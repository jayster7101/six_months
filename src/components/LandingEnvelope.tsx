import { AnimatePresence, motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { couple } from '../data/scrapbook'

export function LandingEnvelope({ onOpen }: { onOpen: () => void }) {
  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#f3eae2] px-6" exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <div className="particles" aria-hidden="true">{Array.from({ length: 14 }, (_, i) => <i key={i} style={{ '--x': `${(i * 37) % 100}%`, '--delay': `${i * -.8}s`, '--duration': `${8 + (i % 5)}s` } as React.CSSProperties}>✦</i>)}</div>
        <div className="relative text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }} className="eyebrow mb-12 text-rose">A letter, just for you</motion.p>
          <motion.button aria-label="Open your letter" onClick={onOpen} className="group relative h-52 w-[min(80vw,340px)] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose" whileHover={{ y: -5 }} whileTap={{ scale: .98 }}>
            <div className="absolute inset-0 rounded-md bg-[#d7aca3] shadow-soft" />
            <div className="absolute inset-x-0 bottom-0 z-20 h-full overflow-hidden rounded-md">
              <div className="absolute -bottom-28 left-1/2 h-64 w-64 -translate-x-1/2 rotate-45 bg-[#e4c2ba]" />
            </div>
            <div className="absolute left-1/2 top-1/2 z-30 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-rose text-cream shadow-lg transition-transform group-hover:scale-110"><Heart size={18} fill="currentColor" /></div>
            <div className="absolute inset-x-0 top-0 z-10 origin-top [clip-path:polygon(0_0,100%_0,50%_72%)] bg-[#c99187] pb-[47%]" />
          </motion.button>
          <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .8 }} className="mt-9 text-sm text-stone-500">Click the seal to open</motion.p>
          <span className="sr-only">{couple.welcome}</span>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
