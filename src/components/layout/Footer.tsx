import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">© 2026 29cm - Less than 30</p>
        <p className="max-w-md text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          本サイトは架空のECサイトです（ポートフォリオ作品）。掲載商品は実在しません。
        </p>
        <Link
          href="/products"
          className="text-xs font-bold text-accent-strong hover:underline dark:text-orange-400"
        >
          商品一覧へ →
        </Link>
      </div>
    </footer>
  )
}
