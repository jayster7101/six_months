import { motion } from 'framer-motion'
import { couple } from '../../data/scrapbook'

export function Finale({ onStar }: { onStar: () => void }) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#15191c] px-6 py-28 text-center text-cream">
      <div className="stars" aria-hidden="true">{Array.from({ length: 38 }, (_, i) => <i key={i} style={{ '--x': `${(i * 43) % 100}%`, '--y': `${(i * 67) % 100}%`, '--delay': `${i * -.2}s`, '--duration': `${2 + (i % 4) * .8}s` } as React.CSSProperties} />)}</div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .4 }} transition={{ duration: 1.4 }} className="relative mx-auto max-w-3xl">
        <p className="eyebrow text-blush">One more thing…</p>
        <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .5, duration: 1 }} className="mt-6 font-display text-5xl md:text-7xl">I would choose you in every lifetime.</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1, duration: 1.3 }} className="mx-auto mt-10 max-w-2xl font-script text-xl italic leading-9 text-stone-300 md:text-2xl">{couple.finalLetter}</motion.p>
        <p className="mt-12 font-display text-3xl text-blush">Always yours.</p>
        <button onClick={onStar} aria-label="A secret star" className="mt-14 text-champagne/40 transition hover:rotate-12 hover:scale-150 hover:text-champagne">✦</button>
        <p className="mt-16 text-[9px] uppercase tracking-[.3em] text-white/30">Made with every bit of my heart · {new Date().getFullYear()}</p>
      </motion.div>
    </section>
  )
}
