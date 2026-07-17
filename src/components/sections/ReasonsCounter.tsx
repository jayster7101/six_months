import { AnimatePresence, motion } from 'framer-motion'
import { Heart, RefreshCw } from 'lucide-react'
import { useState } from 'react'
import { couple, importantDates, reasons } from '../../data/scrapbook'
import { daysUntil, useElapsed } from '../../hooks/useTime'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function ReasonsCounter() {
  const [reason, setReason] = useState(0)
  const time = useElapsed(couple.startDate)
  const another = () => setReason(current => {
    if (reasons.length < 2) return current
    let next = current
    while (next === current) next = Math.floor(Math.random() * reasons.length)
    return next
  })
  return (
    <section id="reasons" className="section">
      <SectionHeading eyebrow="In case you ever wonder" title="Why I love you" />
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_.95fr]">
        <Reveal className="flex min-h-[420px] flex-col items-center justify-center rounded-[2rem] bg-rose p-8 text-center text-white shadow-soft md:p-14">
          <Heart className="mb-8 text-white/55" size={25} fill="currentColor" />
          <div aria-live="polite"><AnimatePresence mode="wait"><motion.p key={reason} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="max-w-xl font-display text-4xl leading-tight md:text-5xl">“{reasons[reason]}”</motion.p></AnimatePresence></div>
          <button onClick={another} className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-xs uppercase tracking-[.15em] transition hover:bg-white hover:text-rose"><RefreshCw size={14} /> Tell me another reason</button>
        </Reveal>
        <div className="grid gap-5">
          <Reveal className="rounded-[2rem] border border-stone-200 bg-white/70 p-7 dark:border-white/10 dark:bg-white/5 md:p-9">
            <p className="eyebrow text-rose">Loving you for</p>
            <div className="mt-7 grid grid-cols-4 gap-2">{Object.entries(time).map(([label, value]) => <div key={label} className="text-center"><motion.p key={value} initial={{ y: 5, opacity: .5 }} animate={{ y: 0, opacity: 1 }} className="font-display text-3xl tabular-nums md:text-4xl">{String(value).padStart(2, '0')}</motion.p><p className="mt-2 text-[9px] uppercase tracking-[.15em] text-stone-500">{label}</p></div>)}</div>
          </Reveal>
          <Reveal className="rounded-[2rem] border border-stone-200 bg-white/70 p-7 dark:border-white/10 dark:bg-white/5 md:p-9">
            <p className="eyebrow text-rose">Days worth counting down to</p>
            <div className="mt-5 divide-y divide-stone-200 dark:divide-white/10">{importantDates.map(date => <div key={date.label} className="flex items-center justify-between py-4"><div><p className="font-medium">{date.label}</p><p className="mt-1 text-xs text-stone-500">{new Date(`${date.date}T00:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p></div><div className="text-right"><span className="font-display text-3xl text-rose">{daysUntil(date.date)}</span><span className="ml-1 text-[9px] uppercase tracking-wider text-stone-500">days</span></div></div>)}</div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
