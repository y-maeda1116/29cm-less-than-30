const STORY_POINTS = [
  {
    number: '01',
    title: '申請、不要',
    body: '自治体の多くは、最長辺が30cmを超えるものを粗大ごみとして扱います。電話やネットでの申請、有料の粗大ごみ処理券の購入、収集日の予約——29cm以下なら、そのすべてが発生しません。',
  },
  {
    number: '02',
    title: '手数料、0円',
    body: '粗大ごみ1点あたり数百円〜千円以上の処理手数料。買い替えのたびに積み重なるこのコストを、本ブランドのプロダクトは最初からゼロに設計しています。',
  },
  {
    number: '03',
    title: 'いつでも手放せる',
    body: '月に数回の収集日を待つ必要も、指定場所まで運ぶ必要もありません。いらなくなったその日に、可燃ごみ・不燃ごみの区分に従って、いつものゴミ袋で出せます。',
  },
] as const

export function BrandStory() {
  return (
    <section id="story" className="scroll-mt-24 border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Brand Story
        </p>
        <h2 className="mt-2 max-w-xl text-2xl font-black leading-tight tracking-tight sm:text-4xl">
          30cmの壁を、越えないという選択。
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          引っ越しや買い替えのたびに立ちはだかる「粗大ごみ」という手続きの壁。
          29cm - Less than 30 は、プロダクトの寸法を最初から29.9cm以下に抑えることで、
          この壁そのものを取り除きました。ものを売るのではなく、
          「手放しやすさ」までデザインして売る。それがこのブランドの存在意義です。
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {STORY_POINTS.map((point) => (
            <article key={point.number}>
              <p className="font-mono text-3xl font-semibold text-accent">{point.number}</p>
              <h3 className="mt-3 text-lg font-black">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {point.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
