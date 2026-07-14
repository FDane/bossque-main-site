import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/data'

// Auto-generated at /sitemap.xml by Next.js.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1 },
    { path: '/about', priority: 0.7 },
    { path: '/services', priority: 0.9 },
    { path: '/faq', priority: 0.7 },
    { path: '/contact', priority: 0.8 },
  ]

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority,
  }))
}
