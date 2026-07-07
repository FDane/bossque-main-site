"use client"

import { useEffect } from "react"

export default function RegisterSW() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return
    if (window.location.protocol === 'file:') return

    const register = async () => {
      try {
        const reg = await navigator.serviceWorker.register('/sw.js')
        // optional: listen for updates
        reg.addEventListener('updatefound', () => {
          const nw = reg.installing
          nw?.addEventListener('statechange', () => {
            // when new content is installed, you could notify the user
          })
        })
      } catch (e) {
        // swallow registration failures
      }
    }

    register()
  }, [])

  return null
}
