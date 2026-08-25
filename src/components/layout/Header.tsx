'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_ITEMS = [
  { href: '/', label: 'ホーム' },
  { href: '/products', label: '商品一覧' },
  { href: '/#story', label: 'ブランドストーリー' },
] as const

function isItemActive(href: string, pathname: string): boolean {
  if (href === '/' || href.startsWith('/#')) return pathname === '/'
  return pathname.startsWith(href)
}

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-900 text-xs font-bold text-white dark:bg-zinc-100 dark:text-zinc-900">
            29
          </span>
          29cm — Less than 30
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="グローバルナビゲーション">
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item.href, pathname)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`rounded-full px-3 py-1.5 text-xs font-bold sm:text-sm ${
                  active
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
