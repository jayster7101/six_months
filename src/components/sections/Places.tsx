import { motion } from 'framer-motion'
import { ExternalLink, MapPin } from 'lucide-react'
import { places } from '../../data/scrapbook'
import { SectionHeading } from '../ui/SectionHeading'

export function Places({ onHeart }: { onHeart: () => void }) {
  return (
    <section id="places" className="section relative bg-white/55 dark:bg-white/[.025]">
      <SectionHeading eyebrow="Pins on our map" title="Places that hold us" copy="A place becomes special when a piece of your story decides to stay there." />
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">{places.map((place, i) => <motion.article key={place.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }} className="group overflow-hidden rounded-[1.75rem] bg-cream shadow-soft dark:bg-[#211d1b]"><div className="h-64 overflow-hidden"><img loading="lazy" src={place.image} alt={`A memory from ${place.name}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div><div className="p-7"><p className="eyebrow text-rose">{place.date}</p><h3 className="mt-2 font-display text-3xl">{place.name}</h3><p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-400">{place.story}</p>{place.mapUrl && <a href={place.mapUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[.12em] text-rose"><MapPin size={14} /> See on map <ExternalLink size={12} /></a>}</div></motion.article>)}</div>
      <button onClick={onHeart} aria-label="A hidden heart" className="absolute bottom-8 left-[9%] text-rose/20 hover:text-rose">♥</button>
    </section>
  )
}
