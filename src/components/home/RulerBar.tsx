'use client'

import { motion } from 'motion/react'

const TICKS = Array.from({ length: 31 }, (_, index) => index)
const MAJOR_TICKS = [0, 5, 10, 15, 20, 25, 30]
/** 29.9cm の位置（%）。30cm = 100% */
const MARKER_POSITION = `${(29.9 / 30) * 100}%`

export function RulerBar() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.85 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="origin-left"
      role="img"
      aria-label="0cmから30cmの定規。29.9cmの位置にアクセント色の限界線マーカーがある"
    >
      <div className="relative">
        <div className="flex items-end justify-between border-b-2 border-zinc-900 dark:border-zinc-100" aria-hidden>
          {TICKS.map((tick) => (
            <div
              key={tick}
              className={`w-px ${tick % 5 === 0 ? 'h-4 bg-zinc-900 dark:bg-zinc-100' : 'h-2 bg-zinc-400'}`}
            />
          ))}
        </div>
        <div className="relative mt-1 h-5" aria-hidden>
          {MAJOR_TICKS.map((tick) => (
            <span
              key={tick}
              className="absolute -translate-x-1/2 font-mono text-[10px] text-zinc-500"
              style={{ left: `${(tick / 30) * 100}%` }}
            >
              {tick}
            </span>
          ))}
        </div>
        <span
          className="absolute -top-9 -translate-x-1/2 font-mono text-[10px] font-bold leading-none text-accent"
          style={{ left: MARKER_POSITION }}
          aria-hidden
        >
          29.9
        </span>
        <div
          className="absolute -top-5 h-9 w-0.5 bg-accent"
          style={{ left: MARKER_POSITION }}
          aria-hidden
        />
      </div>
    </motion.div>
  )
}
