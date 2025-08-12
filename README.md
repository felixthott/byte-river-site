# Byte River – Next.js + Sanity Starter

Performance-first rebuild with a full CMS and SEO controls.

## Quick start

```bash
# 1) Copy envs
cp .env.example .env

# 2) Install deps
pnpm install   # or npm/yarn

# 3) Run
pnpm dev
```

## Deploy to Vercel
1. Push this repo to GitHub.
2. Import to Vercel (Free plan is fine).
3. Add env vars from `.env` (SANITY_*, REVALIDATE_SECRET, NEXT_PUBLIC_SITE_URL).
4. Set **Build Command**: `next build` and **Output**: `.next` (defaults).
5. Set a **Webhook** in Sanity -> Project -> Webhooks to `https://<your-domain>/api/revalidate?secret=REVALIDATE_SECRET`.

## Geo restriction (US, GB, IE only)
`middleware.ts` blocks other countries using Vercel’s `x-vercel-ip-country` header. Remove or edit list if not desired.

## CMS (Sanity)
- Studio is available at `/studio` in development and production.
- Content models: Settings, Page, Navigation, Redirect.
- Pages are routed by slug; `/` uses the page marked as "home".
- Per-page SEO fields override global defaults.

## SEO
- Automatic `sitemap.xml` and `robots.txt`.
- JSON-LD for Organisation and WebSite.
- Open Graph/Twitter images via Sanity media.

---

Lighthouse targets: LCP ≤ 2.0s, INP ≤ 200ms, CLS ≤ 0.05 on key pages.


## Blog
- New Sanity types: **Post**, **Author**, **Category**
- Pages: `/blog` and `/blog/[slug]`
- **RSS** at `/rss`
- Per-post SEO fields (title, description, canonical)

