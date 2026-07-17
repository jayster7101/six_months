import { AnimatePresence, motion } from 'framer-motion'
import { Heart, Sparkles, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { LandingEnvelope } from './components/LandingEnvelope'
import { Navbar } from './components/Navbar'
import { Finale } from './components/sections/Finale'
import { FutureMemory } from './components/sections/FutureMemory'
import { Gallery } from './components/sections/Gallery'
import { Hero } from './components/sections/Hero'
import { Letters } from './components/sections/Letters'
import { Places } from './components/sections/Places'
import { Playlist } from './components/sections/Playlist'
import { ReasonsCounter } from './components/sections/ReasonsCounter'
import { Timeline } from './components/sections/Timeline'
import { couple } from './data/scrapbook'
import { useEasterEggs } from './hooks/useEasterEggs'

function App() {
  const [intro, setIntro] = useState<'envelope' | 'letter' | 'done'>('envelope')
  const [dark, setDark] = useState(() => localStorage.getItem('scrapbook-theme') === 'dark')
  const [hearts, setHearts] = useState<string[]>([])
  const [secretLetter, setSecretLetter] = useState(false)
  const { phrase, setPhrase, konami, setKonami } = useEasterEggs()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('scrapbook-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    if (intro !== 'letter') return
    const timer = window.setTimeout(() => setIntro('done'), 3100)
    return () => window.clearTimeout(timer)
  }, [intro])

  const findHeart = (id: string) => setHearts(found => found.includes(id) ? found : [...found, id])

  return (
    <div className="min-h-screen bg-cream text-ink transition-colors duration-500 dark:bg-[#181514] dark:text-stone-100">
      <AnimatePresence mode="wait">
        {intro === 'envelope' && <LandingEnvelope key="envelope" onOpen={() => setIntro('letter')} />}
        {intro === 'letter' && <motion.div key="welcome" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] grid place-items-center bg-[#f3eae2] p-6"><motion.div initial={{ scaleY: .2, y: 90, opacity: 0 }} animate={{ scaleY: 1, y: 0, opacity: 1 }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }} className="max-w-lg origin-bottom rounded-sm bg-[#fffaf1] p-9 text-center text-stone-800 shadow-soft md:p-14"><p className="font-script text-2xl italic leading-9">“{couple.welcome}”</p><p className="mt-7 text-[10px] uppercase tracking-[.25em] text-rose">With all my love</p></motion.div></motion.div>}
      </AnimatePresence>

      {intro === 'done' && <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Navbar dark={dark} toggleDark={() => setDark(value => !value)} />
        <Hero onHeart={() => findHeart('hero')} />
        <Timeline />
        <Gallery onHeart={() => findHeart('gallery')} />
        <Letters />
        <ReasonsCounter />
        <Places onHeart={() => findHeart('places')} />
        <FutureMemory />
        <Playlist />
        <Finale onStar={() => setSecretLetter(true)} />
      </motion.main>}

      <AnimatePresence>
        {hearts.length === 3 && <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }} className="fixed bottom-5 left-1/2 z-[70] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl bg-ink p-5 text-center text-sm text-white shadow-2xl dark:bg-cream dark:text-ink"><button aria-label="Close message" onClick={() => setHearts([])} className="absolute right-3 top-3"><X size={14} /></button><Heart className="mx-auto mb-2 text-rose" size={18} fill="currentColor" />You found every hidden heart. The secret was you all along.</motion.div>}
        {phrase && <motion.div onClick={() => setPhrase(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] grid cursor-pointer place-items-center overflow-hidden bg-rose/95 p-8 text-center text-white"><div className="heart-burst" aria-hidden="true">{Array.from({ length: 20 }, (_, i) => <span key={i} style={{ '--angle': `${i * 18}deg`, '--delay': `${i * -.07}s` } as React.CSSProperties}>♥</span>)}</div><motion.div initial={{ scale: .6 }} animate={{ scale: 1 }}><Heart size={35} fill="currentColor" className="mx-auto mb-6" /><p className="font-display text-6xl md:text-8xl">I love you more.</p><p className="mt-6 text-xs uppercase tracking-[.2em] text-white/70">You found the magic words · tap to close</p></motion.div></motion.div>}
        {konami && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] grid place-items-center bg-[#101416] p-6 text-center text-white"><button onClick={() => setKonami(false)} aria-label="Close secret" className="absolute right-5 top-5"><X /></button><motion.div initial={{ y: 20 }} animate={{ y: 0 }}><Sparkles className="mx-auto mb-7 text-champagne" /><p className="eyebrow text-blush">Secret chapter unlocked</p><h2 className="mt-5 font-display text-6xl">Player two is my favorite.</h2><p className="mx-auto mt-6 max-w-lg text-stone-400">No matter the level, the side quest, or the boss fight — I’m glad we’re on the same team.</p></motion.div></motion.div>}
        {secretLetter && <div className="fixed inset-0 z-[85] overflow-y-auto"><Letters secret onCloseSecret={() => setSecretLetter(false)} /></div>}
      </AnimatePresence>
    </div>
  )
}

export default App
