import type { Metadata } from 'next'

export function defaultMetadata(settings: any): Metadata {
  const title = settings?.siteTitle || 'Byte River'
  const description = settings?.siteDescription || 'Technology consultancy'
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  return {
    metadataBase: new URL(base),
    title,
    description,
    alternates: { canonical: '/' },
    openGraph: {
      type: 'website',
      siteName: title,
      title,
      description
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  }
}

export function buildPageMetadata(page: any): Metadata {
  if (!page) return {}
  const title = page?.seo?.title || page.title
  const description = page?.seo?.description
  const canonical = page?.seo?.canonical || `/${page.slug}`
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title, description
    },
    twitter: {
      card: 'summary_large_image',
      title, description
    }
  }
}
