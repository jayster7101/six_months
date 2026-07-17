import { AnimatePresence, motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { adventures, memories } from '../../data/scrapbook'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function FutureMemory() {
  const [checked, setChecked] = useState(() => adventures.map(item => item.complete))
  const [memory, setMemory] = useState<number | null>(null)
  return (
    <section id="future" className="section">
      <SectionHeading eyebrow="What comes next" title="The best is unwritten" copy="Never has my future felt so bright & I cant wait to experience my life with you." />
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <Reveal className="rounded-[2rem] bg-[#26302d] p-7 text-white shadow-soft md:p-10">
          <div className="flex items-center justify-between"><p className="eyebrow text-[#cad4c6]">Our someday list</p><Sparkles size={18} className="text-champagne" /></div>
          <div className="mt-8 space-y-3">{adventures.map((item, i) => <button key={item.label} onClick={() => setChecked(values => values.map((v, n) => n === i ? !v : v))} className="flex w-full items-center gap-4 rounded-xl bg-white/[.06] p-4 text-left transition hover:bg-white/10"><motion.span animate={{ backgroundColor: checked[i] ? '#a56b68' : 'rgba(255,255,255,.05)', scale: checked[i] ? [1, 1.15, 1] : 1 }} className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/20">{checked[i] && <Check size={13} />}</motion.span><span className={checked[i] ? 'text-white/45 line-through' : ''}>{item.label}</span></button>)}</div>
        </Reveal>
        <Reveal className="rounded-[2rem] border border-stone-200 bg-white/60 p-7 dark:border-white/10 dark:bg-white/5 md:p-10">
          <p className="eyebrow text-rose">The memory box</p><p className="mt-3 text-sm text-stone-500">Tap a keepsake to remember its story.</p>
          <div className="mt-7 grid grid-cols-2 gap-3">{memories.map((item, i) => <motion.button whileHover={{ y: -4, rotate: i % 2 ? 1 : -1 }} onClick={() => setMemory(memory === i ? null : i)} key={item.title} className="min-h-40 rounded-lg border border-dashed border-stone-300 bg-[#fffaf1] p-5 text-left text-stone-800 shadow-md"><span className="text-[9px] tracking-[.22em]" style={{ color: item.accent }}>{item.type}</span><p className="mt-5 font-display text-xl leading-tight">{item.title}</p><p className="mt-3 text-[10px] text-stone-400">{item.date}</p></motion.button>)}</div>
          <AnimatePresence mode="wait">{memory !== null && <motion.p key={memory} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-6 rounded-xl bg-blush/35 p-5 font-script text-lg italic leading-7 text-stone-700 dark:text-stone-200">{memories[memory].story}</motion.p>}</AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
