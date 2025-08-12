import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/queries'

export const revalidate = 600

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const posts = await getAllPosts()
  const items = posts.map((p:any) => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${base}/blog/${p.slug}</link>
      <guid>${base}/blog/${p.slug}</guid>
      <description><![CDATA[${p.excerpt || ''}]]></description>
    </item>
  `).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Blog RSS</title>
      <link>${base}</link>
      <description>Latest posts</description>
      ${items}
    </channel>
  </rss>`

  return new NextResponse(xml, { headers: { 'Content-Type': 'application/rss+xml' } })
}
