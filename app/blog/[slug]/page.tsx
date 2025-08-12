import { getPostBySlug, getAllPostSlugs } from '@/lib/queries'
import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import { PortableText } from '@portabletext/react'

export const revalidate = 60

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((s: string) => ({ slug: s }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  return buildPageMetadata({ ...post, slug: `blog/${post?.slug}` })
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return null
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      {post.content ? <PortableText value={post.content} /> : null}
    </article>
  )
}
