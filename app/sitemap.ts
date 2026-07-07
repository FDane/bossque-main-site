import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/data'

// Auto-generated at /sitemap.xml by Next.js. Add new top-level routes here
// as the site grows beyond the single-page layout.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
