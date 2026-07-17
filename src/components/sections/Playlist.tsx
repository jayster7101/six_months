import { Pause, Play, Volume2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { playlist } from '../../data/scrapbook'
import { Reveal } from '../ui/Reveal'

export function Playlist() {
  const audio = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(.65)
  useEffect(() => { if (audio.current) audio.current.volume = volume }, [volume])
  const toggle = async () => {
    if (!audio.current) return
    if (playing) audio.current.pause(); else await audio.current.play()
    setPlaying(!playing)
  }
  const seek = (value: number) => { if (audio.current?.duration) audio.current.currentTime = (value / 100) * audio.current.duration }
  return (
    <section className="px-5 pb-28 md:pb-36">
      <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-7 rounded-[2rem] bg-[#dac0b7] p-6 shadow-soft dark:bg-[#342724] md:flex-row md:p-8">
        <img loading="lazy" src={playlist.artwork} alt="Playlist artwork" className={`h-40 w-40 rounded-full object-cover shadow-xl ${playing ? 'animate-spin-slow' : ''}`} />
        <div className="w-full flex-1 text-center md:text-left"><p className="eyebrow text-rose dark:text-blush">Press play, stay awhile</p><h3 className="mt-2 font-display text-3xl">{playlist.title}</h3><p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{playlist.artist}</p><div className="mt-6 flex items-center gap-4"><button onClick={toggle} aria-label={playing ? 'Pause song' : 'Play song'} className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-white dark:bg-cream dark:text-ink">{playing ? <Pause size={17} fill="currentColor" /> : <Play size={17} fill="currentColor" />}</button><input aria-label="Song progress" type="range" min="0" max="100" value={progress} onChange={e => seek(Number(e.target.value))} className="accent-rose w-full" /><Volume2 size={16} /><input aria-label="Volume" type="range" min="0" max="1" step=".05" value={volume} onChange={e => setVolume(Number(e.target.value))} className="w-16 accent-rose" /></div></div>
        <audio ref={audio} src={playlist.audio} preload="metadata" onTimeUpdate={e => setProgress(e.currentTarget.duration ? e.currentTarget.currentTime / e.currentTarget.duration * 100 : 0)} onEnded={() => setPlaying(false)} />
      </Reveal>
    </section>
  )
}
