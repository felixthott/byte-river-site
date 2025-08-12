import { getPageBySlug, getAllPageSlugs } from '@/lib/queries'
import { PortableText } from '@portabletext/react'
import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const revalidate = 60

export async function generateStaticParams() {
  const slugs = await getAllPageSlugs()
  return slugs.map((s: string) => ({ slug: s }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = await getPageBySlug(params.slug)
  return buildPageMetadata(page)
}

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getPageBySlug(params.slug)
  if (!page) return null

  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-bold">{page.title}</h1>
      {page.content ? <PortableText value={page.content} /> : null}
    </article>
  )
}
