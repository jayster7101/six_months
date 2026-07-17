import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Heart } from 'lucide-react'
import { couple } from '../../data/scrapbook'

export function Hero({ onHeart }: { onHeart: () => void }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 700], [0, 150])
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-16">
      <motion.div style={{ y }} className="absolute left-[8%] top-[18%] h-52 w-52 rounded-full bg-blush/50 blur-3xl md:h-96 md:w-96" />
      <div className="absolute bottom-[8%] right-[7%] h-72 w-72 rounded-full bg-champagne/15 blur-3xl" />
      <div className="absolute inset-0 paper-grid opacity-40" />
      <div className="relative mx-auto max-w-5xl text-center">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .8 }} className="eyebrow text-rose">{couple.eyebrow}</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="mt-6 font-display text-[clamp(4rem,11vw,9rem)] leading-[.88] tracking-[-.04em] text-ink dark:text-stone-50">{couple.title}</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8, duration: 1 }} className="mx-auto mt-8 max-w-xl text-base leading-7 text-stone-600 dark:text-stone-400 md:text-lg">{couple.subtitle}</motion.p>
        <motion.a href="#story" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-12 inline-flex flex-col items-center gap-3 text-[10px] uppercase tracking-[.3em] text-stone-500">
          Begin our story <motion.span animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}><ArrowDown size={16} /></motion.span>
        </motion.a>
      </div>
      <button onClick={onHeart} aria-label="A hidden heart" className="absolute bottom-[17%] left-[7%] rotate-[-12deg] text-rose/20 transition hover:scale-125 hover:text-rose"><Heart size={19} fill="currentColor" /></button>
    </section>
  )
}
