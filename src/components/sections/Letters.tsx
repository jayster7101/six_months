import { AnimatePresence, motion } from 'framer-motion'
import { Mail, X } from 'lucide-react'
import { useState } from 'react'
import { letters } from '../../data/scrapbook'
import { SectionHeading } from '../ui/SectionHeading'

export function Letters({ secret = false, onCloseSecret }: { secret?: boolean; onCloseSecret?: () => void }) {
  const [open, setOpen] = useState<number | null>(secret ? 0 : null)
  return (
    <section id="letters" className="section bg-[#eee1db] dark:bg-[#211b1a]">
      <SectionHeading eyebrow="For the days you need me" title="Letters for later" copy="There is something here for every version of your day." />
      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
        {letters.map((letter, i) => <motion.button key={letter.prompt} onClick={() => setOpen(i)} whileHover={{ y: -7 }} className="group rounded-[1.75rem] bg-[#d7a9a1] p-7 text-left shadow-soft"><div className="mb-16 flex justify-between text-white/70"><Mail /><span className="text-xs tracking-[.2em]">0{i + 1}</span></div><p className="font-display text-3xl text-white">{letter.prompt}</p><p className="mt-3 text-sm text-white/70">Break the seal →</p></motion.button>)}
      </div>
      <AnimatePresence>{open !== null && <motion.div role="dialog" aria-modal="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => { setOpen(null); onCloseSecret?.() }} className="fixed inset-0 z-[80] grid place-items-center bg-ink/70 p-5 backdrop-blur-md"><motion.article onClick={e => e.stopPropagation()} initial={{ y: 80, opacity: 0, rotateX: 20 }} animate={{ y: 0, opacity: 1, rotateX: 0 }} exit={{ y: 40, opacity: 0 }} className="relative max-w-xl rounded-sm bg-[#fffaf1] px-8 py-12 text-stone-800 shadow-2xl md:px-14 md:py-16"><button onClick={() => { setOpen(null); onCloseSecret?.() }} aria-label="Close letter" className="absolute right-4 top-4"><X size={18} /></button><p className="font-script text-2xl italic">{letters[open].salutation}</p><p className="mt-8 font-script text-xl italic leading-9">{letters[open].body}</p><p className="mt-10 font-script text-xl italic text-rose">{letters[open].signoff},<br />J.</p></motion.article></motion.div>}</AnimatePresence>
    </section>
  )
}
