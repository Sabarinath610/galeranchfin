'use client'

import { useEffect } from 'react'
import { app } from '@/lib/firebase'

export function FirebaseAnalytics() {
  useEffect(() => {
    async function initAnalytics() {
      const { getAnalytics, isSupported } = await import('firebase/analytics')
      if (await isSupported()) {
        getAnalytics(app)
      }
    }
    initAnalytics()
  }, [])

  return null
}
