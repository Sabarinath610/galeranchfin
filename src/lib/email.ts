import { Resend } from 'resend'
import { SITE_CONFIG } from '@/constants'
import type { ContactFormData } from '@/types'

function getResend(): Resend {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY environment variable is not set')
  return new Resend(key)
}

interface EmailResult {
  success: boolean
  error?: string
}

function buildAdminEmailHtml(data: ContactFormData): string {
  const dateStr = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; color: #0B1F3A; margin: 0; padding: 0; background: #FAF7F2; }
        .wrapper { max-width: 600px; margin: 40px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(11,31,58,0.08); }
        .header { background: #0B1F3A; padding: 32px 40px; }
        .header h1 { color: #C9A84C; font-size: 22px; margin: 0; font-family: Georgia, serif; }
        .header p { color: #ffffff99; font-size: 13px; margin: 6px 0 0; }
        .body { padding: 40px; }
        .field { margin-bottom: 24px; border-bottom: 1px solid #F0EDE8; padding-bottom: 24px; }
        .field:last-child { border-bottom: none; }
        .label { display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: #C9A84C; font-weight: 600; margin-bottom: 6px; }
        .value { display: block; font-size: 15px; color: #0B1F3A; line-height: 1.6; }
        .message-box { background: #FAF7F2; border-radius: 6px; padding: 16px 20px; font-size: 15px; color: #0B1F3A; line-height: 1.7; }
        .footer { background: #060F1E; padding: 20px 40px; text-align: center; }
        .footer p { color: #ffffff55; font-size: 12px; margin: 0; }
        .cta { display: inline-block; margin-top: 24px; padding: 12px 28px; background: #C9A84C; color: #0B1F3A; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <h1>New Contact Form Submission</h1>
          <p>Gale Ranch Finance — ${dateStr}</p>
        </div>
        <div class="body">
          <div class="field">
            <span class="label">Full Name</span>
            <span class="value">${data.name}</span>
          </div>
          <div class="field">
            <span class="label">Email Address</span>
            <span class="value"><a href="mailto:${data.email}" style="color:#C9A84C">${data.email}</a></span>
          </div>
          ${data.phone ? `
          <div class="field">
            <span class="label">Phone Number</span>
            <span class="value"><a href="tel:${data.phone}" style="color:#C9A84C">${data.phone}</a></span>
          </div>` : ''}
          <div class="field">
            <span class="label">Service of Interest</span>
            <span class="value">${data.service.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}</span>
          </div>
          ${data.referral ? `
          <div class="field">
            <span class="label">How They Found You</span>
            <span class="value">${data.referral}</span>
          </div>` : ''}
          <div class="field">
            <span class="label">Message</span>
            <div class="message-box">${data.message.replace(/\n/g, '<br>')}</div>
          </div>
          <a href="mailto:${data.email}" class="cta">Reply to ${data.name.split(' ')[0]}</a>
        </div>
        <div class="footer">
          <p>Sent from galeranchfin.com contact form</p>
        </div>
      </div>
    </body>
    </html>
  `
}

function buildAutoReplyHtml(name: string): string {
  const firstName = name.split(' ')[0]
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; color: #0B1F3A; margin: 0; padding: 0; background: #FAF7F2; }
        .wrapper { max-width: 600px; margin: 40px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(11,31,58,0.08); }
        .header { background: #0B1F3A; padding: 40px; text-align: center; }
        .header h1 { color: #C9A84C; font-size: 26px; margin: 0 0 8px; font-family: Georgia, serif; }
        .header p { color: #ffffffaa; font-size: 14px; margin: 0; }
        .meridian { width: 48px; height: 1.5px; background: #C9A84C; margin: 16px auto; }
        .body { padding: 40px; }
        .body p { font-size: 15px; line-height: 1.8; color: #4A5568; margin: 0 0 16px; }
        .body p strong { color: #0B1F3A; }
        .card { background: #FAF7F2; border-radius: 8px; padding: 24px 28px; margin: 28px 0; }
        .card p { margin: 0 0 8px; font-size: 14px; }
        .card p:last-child { margin: 0; }
        .cta-wrap { text-align: center; margin: 32px 0; }
        .cta { display: inline-block; padding: 14px 32px; background: #C9A84C; color: #0B1F3A; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 15px; }
        .footer { background: #060F1E; padding: 24px 40px; text-align: center; }
        .footer p { color: #ffffff44; font-size: 12px; margin: 0 0 4px; }
        .footer a { color: #C9A84C; text-decoration: none; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <h1>Gale Ranch Finance</h1>
          <div class="meridian"></div>
          <p>Your Financial Security, Simplified.</p>
        </div>
        <div class="body">
          <p>Hi <strong>${firstName}</strong>,</p>
          <p>Thank you for reaching out. I've received your message and will get back to you <strong>within 4 business hours</strong>.</p>
          <p>In the meantime, if you have an urgent question, feel free to call or text me directly:</p>
          <div class="card">
            <p>📞 <strong><a href="${SITE_CONFIG.phoneHref}" style="color:#0B1F3A;text-decoration:none">${SITE_CONFIG.phone}</a></strong></p>
            <p>✉️ <strong><a href="${SITE_CONFIG.emailHref}" style="color:#0B1F3A;text-decoration:none">${SITE_CONFIG.email}</a></strong></p>
            <p>🕐 ${SITE_CONFIG.hours}</p>
          </div>
          <p>If you'd like to skip the wait, you can also book a free 30-minute consultation directly:</p>
          <div class="cta-wrap">
            <a href="${SITE_CONFIG.booking}" class="cta">Book a Free Call</a>
          </div>
          <p>Looking forward to helping you and your family.</p>
          <p>Warm regards,<br><strong>Govind Gopal</strong><br>Gale Ranch Finance</p>
        </div>
        <div class="footer">
          <p>${SITE_CONFIG.address.full}</p>
          <a href="${SITE_CONFIG.url}">${SITE_CONFIG.url}</a>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function sendContactNotification(
  data: ContactFormData
): Promise<EmailResult> {
  try {
    const { error } = await getResend().emails.send({
      from: 'Gale Ranch Finance <noreply@galeranchfin.com>',
      to: [SITE_CONFIG.email],
      replyTo: data.email,
      subject: `New inquiry: ${data.service.replace(/-/g, ' ')} — ${data.name}`,
      html: buildAdminEmailHtml(data),
    })
    if (error) return { success: false, error: error.message }
    return { success: true }
  } catch {
    return { success: false, error: 'Failed to send notification email' }
  }
}

export async function sendAutoReply(
  data: ContactFormData
): Promise<EmailResult> {
  try {
    const { error } = await getResend().emails.send({
      from: 'Govind Gopal <noreply@galeranchfin.com>',
      to: [data.email],
      subject: `Thanks for reaching out, ${data.name.split(' ')[0]} — I'll be in touch shortly`,
      html: buildAutoReplyHtml(data.name),
    })
    if (error) return { success: false, error: error.message }
    return { success: true }
  } catch {
    return { success: false, error: 'Failed to send auto-reply email' }
  }
}
