"use client"

import { useEffect } from "react"

export default function UnregisterSW() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return

    // Unregister all service workers (useful during development or when
    // migrating away from a previously deployed service worker).
    navigator.serviceWorker.getRegistrations().then((regs) => {
      regs.forEach((r) => {
        try {
          r.unregister()
        } catch (e) {
          // swallow errors
        }
      })
    })

    // Also try to unregister the active registration if present
    try {
      navigator.serviceWorker.ready.then((reg) => reg?.unregister().catch(() => {}))
    } catch (e) {
      // ignore
    }
  }, [])

  return null
}
