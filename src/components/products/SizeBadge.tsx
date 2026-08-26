import type { SizeBand } from '@/types/product'
import { getSizeBand } from '@/lib/filters'

const BAND_STYLES: Record<SizeBand, string> = {
  under15: 'border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400',
  under25: 'border-zinc-500 text-zinc-800 dark:border-zinc-400 dark:text-zinc-200',
  limit: 'border-accent bg-accent/10 font-bold text-accent',
}

export function SizeBadge({ maxSize }: { maxSize: number }) {
  const band = getSizeBand(maxSize)
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[11px] ${BAND_STYLES[band]}`}
      data-testid={`size-badge-${band}`}
    >
      {maxSize.toFixed(1)} cm
    </span>
  )
}
