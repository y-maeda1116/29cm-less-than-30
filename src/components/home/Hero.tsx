'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, Trash2, Wallet } from 'lucide-react'
import { RulerBar } from './RulerBar'

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent"
      >
        Less than 30 — all products under 29.9 cm
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-6xl"
      >
        30cmを、
        <br />
        超えない。
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base"
      >
        29cm - Less than 30 の全商品は、最長辺29.9cm以下。
        どれも「30cmの壁」を越えないので、処分するときは普通ごみに出せます。
        申請不要、手数料0円、収集日を待つ必要もありません。
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 flex flex-wrap items-center gap-3"
      >
        <Link
          href="/products"
          className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-bold text-white transition hover:opacity-90 dark:bg-zinc-100 dark:text-zinc-900"
        >
          商品を見る <ArrowRight size={16} />
        </Link>
        <Link
          href="/#story"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-bold dark:border-zinc-700"
        >
          30cmの壁とは
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 max-w-2xl"
      >
        <RulerBar />
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-xs text-zinc-600 dark:text-zinc-400">
          <span className="inline-flex items-center gap-1.5">
            <Trash2 size={14} className="text-accent" /> 粗大ごみ手続き 不要
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Wallet size={14} className="text-accent" /> 処分コスト ¥0
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono">最長辺 ≤ 29.9 cm</span>
        </div>
      </motion.div>
    </section>
  )
}
