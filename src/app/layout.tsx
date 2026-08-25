import type { Metadata } from 'next'
import { Zen_Kaku_Gothic_New, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-zen-kaku',
})

const plexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-plex-mono',
})

export const metadata: Metadata = {
  title: {
    default: '29cm - Less than 30｜粗大ごみ券、いりません。',
    template: '%s | 29cm - Less than 30',
  },
  description:
    'すべての商品の最長辺は29.9cm以下。粗大ごみ手続き不要、処分費用¥0の架空ECサイト（ポートフォリオ作品）。',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${zenKaku.variable} ${plexMono.variable}`}>
      <body className="bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
