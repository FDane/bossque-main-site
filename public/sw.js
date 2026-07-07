/* Minimal service worker with safe caching rules.
   - Only caches the root HTML as an offline fallback.
   - Uses network-first for navigation requests and falls back to cache.
   - Does not aggressively cache _next or API responses.
*/

const CACHE_NAME = 'bossque-shell-v1'
const OFFLINE_URL = '/'

self.addEventListener('install', (event) => {
  // Take control immediately so the new SW can provide the offline fallback.
  self.skipWaiting()
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll([OFFLINE_URL]).catch(() => {}))
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : Promise.resolve())))).then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  // Only handle GET requests
  if (request.method !== 'GET') return

  // Don't interfere with internal Next.js runtime or API calls
  const url = new URL(request.url)
  if (url.pathname.startsWith('/api') || url.pathname.startsWith('/_next/')) return

  // For navigation (HTML) use network-first with cache fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          // Optionally update the cache with the latest HTML
          const copy = res.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(OFFLINE_URL, copy).catch(() => {}))
          return res
        })
        .catch(() => caches.match(OFFLINE_URL).then((r) => r || new Response('Offline', { status: 503 })))
    )
    return
  }

  // For other GET requests, try network then fallback to cache
  event.respondWith(
    fetch(request)
      .then((res) => {
        // do not cache large or opaque responses
        return res
      })
      .catch(() => caches.match(request))
  )
})
