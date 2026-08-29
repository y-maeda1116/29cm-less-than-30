'use client'

export function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div
      data-testid="empty-state"
      className="rounded-2xl border border-dashed border-zinc-300 py-16 text-center dark:border-zinc-700"
    >
      <p className="font-black">該当する商品がありません</p>
      <p className="mt-1 text-sm text-zinc-500">フィルター条件を変えてみてください。</p>
      <button
        type="button"
        onClick={onReset}
        className="mt-5 rounded-full bg-zinc-900 px-5 py-2 text-xs font-bold text-white dark:bg-zinc-100 dark:text-zinc-900"
      >
        フィルターをリセット
      </button>
    </div>
  )
}
