'use client'

import { Search } from 'lucide-react'
import { CATEGORIES, SIZE_BANDS } from '@/types/product'
import { CATEGORY_LABELS, SIZE_BAND_LABELS } from '@/lib/constants'
import type { FilterState } from '@/lib/filters'

interface FilterBarProps {
  filter: FilterState
  onChange: (next: FilterState) => void
}

function chipClass(active: boolean): string {
  return `rounded-full border px-3.5 py-1.5 text-xs font-bold transition-colors ${
    active
      ? 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900'
      : 'border-zinc-300 text-zinc-600 hover:border-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-100'
  }`
}

export function FilterBar({ filter, onChange }: FilterBarProps) {
  return (
    <div className="space-y-4">
      <label className="flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 dark:border-zinc-700">
        <Search size={16} className="shrink-0 text-zinc-400" />
        <input
          type="search"
          value={filter.query}
          onChange={(event) => onChange({ ...filter, query: event.target.value })}
          placeholder="商品を検索（例: スツール）"
          aria-label="商品を検索"
          className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
        />
      </label>
      <div className="flex flex-wrap gap-2" role="group" aria-label="カテゴリで絞り込む">
        <button
          type="button"
          className={chipClass(filter.category === 'all')}
          onClick={() => onChange({ ...filter, category: 'all' })}
        >
          すべて
        </button>
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            className={chipClass(filter.category === category)}
            onClick={() => onChange({ ...filter, category })}
          >
            {CATEGORY_LABELS[category]}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="サイズで絞り込む">
        <button
          type="button"
          className={chipClass(filter.sizeBand === 'all')}
          onClick={() => onChange({ ...filter, sizeBand: 'all' })}
        >
          全サイズ
        </button>
        {SIZE_BANDS.map((band) => (
          <button
            key={band}
            type="button"
            className={chipClass(filter.sizeBand === band)}
            onClick={() => onChange({ ...filter, sizeBand: band })}
          >
            {SIZE_BAND_LABELS[band]}
          </button>
        ))}
      </div>
    </div>
  )
}
