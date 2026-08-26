import type { WasteType } from '@/types/product'
import { WASTE_TYPE_LABELS } from '@/lib/constants'

export function WasteBadge({ wasteType }: { wasteType: WasteType }) {
  return (
    <>
      <span className="inline-flex items-center rounded-full border border-zinc-900 px-2 py-0.5 text-[11px] font-bold dark:border-zinc-100">
        {WASTE_TYPE_LABELS[wasteType]} OK
      </span>
      <span className="inline-flex items-center rounded-full border border-accent px-2 py-0.5 text-[11px] font-bold text-accent">
        処分費用 ¥0
      </span>
    </>
  )
}
