import { ExternalLink, Music2 } from 'lucide-react'
import { playlist } from '../../data/scrapbook'
import { Reveal } from '../ui/Reveal'

export function Playlist() {
  return (
    <section className="px-5 pb-28 md:pb-36">
      <Reveal className="mx-auto max-w-4xl rounded-[2rem] bg-[#dac0b7] p-6 shadow-soft dark:bg-[#342724] md:p-8">
        <div className="mb-6 flex items-center gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-white dark:bg-cream dark:text-ink">
            <Music2 size={19} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="eyebrow text-rose dark:text-blush">Press play, stay awhile</p>
            <h3 className="mt-1 truncate font-display text-3xl">{playlist.title}</h3>
            <p className="text-sm text-stone-600 dark:text-stone-400">{playlist.artist}</p>
          </div>
          <a href={playlist.appleMusicUrl} target="_blank" rel="noreferrer" aria-label={`Open ${playlist.title} by ${playlist.artist} in Apple Music`} className="hidden items-center gap-2 text-xs uppercase tracking-[.12em] text-rose transition hover:text-ink dark:hover:text-cream sm:inline-flex">
            Open in Music <ExternalLink size={13} />
          </a>
        </div>
        <div className="overflow-hidden rounded-xl bg-white/60">
          <iframe
            title={`${playlist.title} by ${playlist.artist} on Apple Music`}
            src={playlist.embedUrl}
            height="175"
            className="block w-full border-0"
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            loading="lazy"
          />
        </div>
        <a href={playlist.appleMusicUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[.12em] text-rose sm:hidden">
          Open in Apple Music <ExternalLink size={13} />
        </a>
      </Reveal>
    </section>
  )
}
