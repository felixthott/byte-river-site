import { getHomePage } from '@/lib/queries'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

export const revalidate = 60

export default async function Page() {
  const page = await getHomePage()

  if (!page) {
    return <div className="prose">Create a home page in Sanity (Page with "Make home page" toggled).</div>
  }

  return (
    <div className="space-y-8">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">{page.title}</h1>
          {page.subtitle && <p className="mt-4 text-lg text-[var(--muted)]">{page.subtitle}</p>}
        </div>
        {page.heroImage?.asset?.url && (
          <Image src={page.heroImage.asset.url} alt={page.heroImage.alt || page.title} width={1200} height={800} className="rounded-xl"/>
        )}
      </section>
      <article className="prose prose-invert max-w-none">
        {page.content ? <PortableText value={page.content} /> : null}
      </article>
    </div>
  )
}
