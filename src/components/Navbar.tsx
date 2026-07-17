import { Heart, Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'

const links = [['Home', 'home'], ['Our Story', 'story'], ['Gallery', 'gallery'], ['Letters', 'letters'], ['Reasons', 'reasons'], ['Places', 'places'], ['Future', 'future']]

export function Navbar({ dark, toggleDark }: { dark: boolean; toggleDark: () => void }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-cream/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#181514]/80">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-2 font-display text-xl"><Heart size={15} className="text-rose" fill="currentColor" /> I & J</a>
        <div className="hidden items-center gap-7 lg:flex">{links.map(([label, id]) => <a key={id} className="text-xs uppercase tracking-[.16em] text-stone-600 transition-colors hover:text-rose dark:text-stone-300" href={`#${id}`}>{label}</a>)}</div>
        <div className="flex items-center gap-2">
          <button onClick={toggleDark} aria-label={`Use ${dark ? 'light' : 'dark'} mode`} className="icon-button">{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu" className="icon-button lg:hidden">{open ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </nav>
      {open && <div className="border-t border-stone-200 bg-cream px-5 py-5 dark:border-white/10 dark:bg-[#181514] lg:hidden">{links.map(([label, id]) => <a onClick={() => setOpen(false)} key={id} className="block py-2.5 text-sm text-stone-700 dark:text-stone-200" href={`#${id}`}>{label}</a>)}</div>}
    </header>
  )
}
