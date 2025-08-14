import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { ModeToggle } from '@/components/ModeToggle'
import { SearchBox } from '@/components/SearchBox'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Codec Live c — Movie Reviews',
  description: 'Explore trending & top-rated films and TV. Search and view rich details powered by TMDB.',
  keywords: ['movies','reviews','tmdb','nextjs','imdb clone','codec live c'],
  metadataBase: new URL('https://example.com')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="sticky top-0 z-50 border-b border-zinc-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-950/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
              <Link href="/" className="font-bold text-xl tracking-tight no-underline">
                <span className="px-2 py-1 rounded-2xl bg-brand/15 text-brand">Codec Live c</span>
                <span className="ml-2">Movie Reviews</span>
              </Link>
              <nav className="ml-auto flex items-center gap-2">
                <Link className="px-3 py-1 rounded-xl bg-zinc-100 dark:bg-zinc-800" href="/?tab=trending">Trending</Link>
                <Link className="px-3 py-1 rounded-xl bg-zinc-100 dark:bg-zinc-800" href="/?tab=top">Top Rated</Link>
                <Link className="px-3 py-1 rounded-xl bg-zinc-100 dark:bg-zinc-800" href="/tv">TV</Link>
                <SearchBox />
                <ModeToggle />
              </nav>
            </div>
          </header>
          <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
          <footer className="max-w-6xl mx-auto px-4 py-10 text-sm text-zinc-500">
            Data from TMDB but not endorsed/Certified by TMDB.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
