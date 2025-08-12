import type { MetadataRoute } from 'next'
import { getAllPageSlugs } from '@/lib/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const slugs = await getAllPageSlugs()
  const pages = slugs.map((slug: string) => ({
    url: `${base}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6
  }))
  return [{ url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 }, ...pages]
}
