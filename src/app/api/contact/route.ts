import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'
import { sendContactNotification, sendAutoReply } from '@/lib/email'
import type { ApiResponse } from '@/types'

// In-memory rate limiter — resets on server restart
const submissions = new Map<string, number[]>()
const RATE_LIMIT = 3
const WINDOW_MS = 10 * 60 * 1000 // 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = submissions.get(ip) ?? []
  const recent = timestamps.filter((t) => now - t < WINDOW_MS)
  if (recent.length >= RATE_LIMIT) {
    submissions.set(ip, recent)
    return true
  }
  submissions.set(ip, [...recent, now])
  return false
}

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  )
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse>> {
  try {
    const ip = getClientIp(request)
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many submissions. Please wait 10 minutes and try again.' },
        { status: 429 }
      )
    }

    let body: unknown
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { success: false, message: 'Invalid request format.' },
        { status: 400 }
      )
    }

    const result = contactFormSchema.safeParse(body)
    if (!result.success) {
      const firstError = result.error.issues[0]?.message ?? 'Validation failed.'
      return NextResponse.json(
        { success: false, message: firstError },
        { status: 422 }
      )
    }

    const formData = result.data

    const [notification, autoReply] = await Promise.allSettled([
      sendContactNotification(formData),
      sendAutoReply(formData),
    ])

    if (
      notification.status === 'rejected' ||
      (notification.status === 'fulfilled' && !notification.value.success)
    ) {
      return NextResponse.json(
        { success: false, message: 'Failed to send your message. Please call us directly.' },
        { status: 500 }
      )
    }

    if (
      autoReply.status === 'rejected' ||
      (autoReply.status === 'fulfilled' && !autoReply.value.success)
    ) {
      // Non-critical — log and continue
    }

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully.' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

export const dynamic = 'force-dynamic'
