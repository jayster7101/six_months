import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { timeline } from '../../data/scrapbook'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Timeline() {
  const [open, setOpen] = useState(0)
  return (
    <section id="story" className="section bg-white/55 dark:bg-white/[.025]">
      <SectionHeading eyebrow="Chapter by chapter" title="How we got here" copy="A few of the moments that quietly changed everything. Tap a chapter to read more." />
      <div className="relative mx-auto max-w-5xl before:absolute before:bottom-0 before:left-3 before:top-0 before:w-px before:bg-stone-200 dark:before:bg-stone-700 md:before:left-1/2">
        {timeline.map((event, index) => {
          const expanded = open === index
          return (
            <Reveal key={event.title} className={`relative mb-8 pl-10 md:mb-12 md:w-1/2 md:pl-0 ${index % 2 ? 'md:ml-auto md:pl-12' : 'md:pr-12'}`}>
              <span className={`absolute left-[7px] top-9 h-3 w-3 rounded-full border-2 border-cream bg-rose dark:border-[#181514] ${index % 2 ? 'md:-left-[6px]' : 'md:left-auto md:-right-[6px]'}`} />
              <motion.button layout onClick={() => setOpen(expanded ? -1 : index)} aria-expanded={expanded} className="w-full overflow-hidden rounded-[1.5rem] border border-white/80 bg-cream p-5 text-left shadow-soft dark:border-white/10 dark:bg-[#211d1b] md:p-7">
                <p className="eyebrow text-rose">{event.date}</p>
                <div className="mt-2 flex items-center justify-between gap-4"><h3 className="font-display text-3xl">{event.title}</h3><motion.span animate={{ rotate: expanded ? 180 : 0 }}><ChevronDown size={18} /></motion.span></div>
                <AnimatePresence initial={false}>
                  {expanded && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .45 }} className="overflow-hidden"><p className="mt-5 leading-7 text-stone-600 dark:text-stone-400">{event.story}</p><div className={`mt-5 grid items-start gap-3 ${event.photos.length > 1 ? 'grid-cols-2' : ''}`}>{event.photos.map(photo => <img loading="lazy" key={photo.src} src={photo.src} alt={photo.alt} className="h-auto w-full rounded-xl bg-stone-100 object-contain dark:bg-stone-800" />)}</div></motion.div>}
                </AnimatePresence>
              </motion.button>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
