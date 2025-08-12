import Link from 'next/link'
import { getAllPosts } from '@/lib/queries'
import Image from 'next/image'

export const revalidate = 60

export default async function BlogIndex() {
  const posts = await getAllPosts()
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Blog</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p:any) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="block border border-white/10 rounded-xl overflow-hidden hover:translate-y-[-2px] transition">
            {p.coverImage?.url && (
              <Image src={p.coverImage.url} alt={p.coverImage.alt || p.title} width={800} height={500}/>
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="text-[var(--muted)] text-sm mt-1">{p.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
