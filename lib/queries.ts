import { client } from './sanity.client'
import groq from 'groq'

export async function getSettings() {
  const query = groq`*[_type == "settings"][0]{siteTitle, siteDescription, navigation[]{_key, label, href}}`
  return client.fetch(query, {}, { next: { revalidate: 60 } })
}

export async function getHomePage() {
  const query = groq`*[_type == "page" && isHome == true][0]{title, subtitle, heroImage{asset->{url}, alt}, content}`
  return client.fetch(query, {}, { next: { revalidate: 60 } })
}

export async function getAllPageSlugs(): Promise<string[]> {
  const query = groq`*[_type == "page" && defined(slug.current)].slug.current`
  return client.fetch(query, {}, { next: { revalidate: 300 } })
}

export async function getPageBySlug(slug: string) {
  const query = groq`*[_type == "page" && slug.current == $slug][0]{title, content, "slug": slug.current, seo}`
  return client.fetch(query, { slug }, { next: { revalidate: 60 } })
}


export async function getAllPosts() {
  const query = groq`*[_type == "post"] | order(publishedAt desc)[0...24]{
    title,
    excerpt,
    "slug": slug.current,
    coverImage{ "url": asset->url, alt }
  }`
  return client.fetch(query, {}, { next: { revalidate: 60 } })
}

export async function getAllPostSlugs(): Promise<string[]> {
  const query = groq`*[_type == "post" && defined(slug.current)].slug.current`
  return client.fetch(query, {}, { next: { revalidate: 300 } })
}

export async function getPostBySlug(slug: string) {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{ title, excerpt, content, "slug": slug.current, seo }`
  return client.fetch(query, { slug }, { next: { revalidate: 60 } })
}
