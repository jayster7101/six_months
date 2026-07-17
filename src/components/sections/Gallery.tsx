import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { favoritePhotos } from '../../data/scrapbook'
import { SectionHeading } from '../ui/SectionHeading'

const rotations = [-3, 2, -1, 3, -2, 1]

export function Gallery({ onHeart }: { onHeart: () => void }) {
  const [selected, setSelected] = useState<number | null>(null)
  const move = (amount: number) => setSelected(value => value === null ? null : (value + amount + favoritePhotos.length) % favoritePhotos.length)
  useEffect(() => {
    if (selected === null) return
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null); if (e.key === 'ArrowLeft') move(-1); if (e.key === 'ArrowRight') move(1) }
    document.body.style.overflow = 'hidden'; window.addEventListener('keydown', key)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', key) }
  }, [selected])
  return (
    <section id="gallery" className="section relative overflow-hidden">
      <SectionHeading eyebrow="Proof we were here" title="A handful of favorites" copy="Not every beautiful moment needs to be perfect. It only needs to be ours." />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3 md:gap-9">
        {favoritePhotos.map((photo, i) => <motion.button initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .07 }} whileHover={{ y: -10, rotate: 0, scale: 1.02 }} onClick={() => setSelected(i)} key={photo.src} style={{ rotate: `${rotations[i % rotations.length]}deg` }} className="polaroid"><img loading="lazy" src={photo.src} alt={photo.alt} /><span>{photo.caption}</span></motion.button>)}
      </div>
      <button onClick={onHeart} aria-label="A hidden heart" className="absolute right-[5%] top-[44%] text-rose/20 transition hover:text-rose"><span className="text-lg">♥</span></button>
      <AnimatePresence>{selected !== null && <motion.div role="dialog" aria-modal="true" aria-label="Photo lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] grid place-items-center bg-[#151211]/95 p-5 backdrop-blur-xl">
        <button onClick={() => setSelected(null)} aria-label="Close lightbox" className="absolute right-5 top-5 text-white"><X /></button>
        <button onClick={() => move(-1)} aria-label="Previous photo" className="absolute left-3 top-1/2 rounded-full bg-white/10 p-3 text-white md:left-8"><ChevronLeft /></button>
        <motion.figure key={selected} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} className="max-w-4xl text-center"><img src={favoritePhotos[selected].src} alt={favoritePhotos[selected].alt} className="max-h-[72vh] rounded-lg object-contain shadow-2xl" /><figcaption className="mt-5 font-script text-xl italic text-stone-200">{favoritePhotos[selected].caption}</figcaption></motion.figure>
        <button onClick={() => move(1)} aria-label="Next photo" className="absolute right-3 top-1/2 rounded-full bg-white/10 p-3 text-white md:right-8"><ChevronRight /></button>
      </motion.div>}</AnimatePresence>
    </section>
  )
}
