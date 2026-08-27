import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-6xl font-black text-accent">29.9</p>
      <h1 className="mt-4 text-2xl font-black">ページが見つかりません</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        指定されたページは存在しないか、30cmの壁の向こうへ移動しました。
      </p>
      <Link
        href="/products"
        className="mt-6 rounded-full bg-zinc-900 px-6 py-3 text-sm font-bold text-white dark:bg-zinc-100 dark:text-zinc-900"
      >
        商品一覧へ戻る
      </Link>
    </div>
  )
}
