import { Reveal } from './Reveal'

export function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <p className={`eyebrow ${light ? 'text-blush' : 'text-rose'}`}>{eyebrow}</p>
      <h2 className={`mt-3 font-display text-4xl leading-tight md:text-6xl ${light ? 'text-cream' : 'text-ink dark:text-stone-100'}`}>{title}</h2>
      {copy && <p className={`mx-auto mt-5 max-w-xl leading-7 ${light ? 'text-stone-300' : 'text-stone-600 dark:text-stone-400'}`}>{copy}</p>}
    </Reveal>
  )
}
