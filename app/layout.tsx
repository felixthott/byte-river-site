import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getSettings } from '@/lib/queries'
import { defaultMetadata } from '@/lib/seo'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings()
  return defaultMetadata(settings)
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSettings()
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b border-white/10">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="font-semibold">{settings?.siteTitle || 'Byte River'}</Link>
            <nav className="flex gap-6 text-sm text-[var(--muted)]">
              {(settings?.navigation || []).map((item:any) => (
                <Link key={item._key} href={item.href || '#'}>{item.label}</Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="container py-10">{children}</main>
        <footer className="border-t border-white/10 mt-16">
          <div className="container py-8 text-sm text-[var(--muted)]">© {new Date().getFullYear()} Byte River</div>
        </footer>
      </body>
    </html>
  )
}
