import { useEffect, useState } from 'react'

export function useEasterEggs() {
  const [phrase, setPhrase] = useState(false)
  const [konami, setKonami] = useState(false)

  useEffect(() => {
    let typed = ''
    let sequence: string[] = []
    const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
    const onKey = (event: KeyboardEvent) => {
      typed = `${typed}${event.key.toLowerCase()}`.slice(-24)
      if (typed.includes('i love you')) { setPhrase(true); typed = '' }
      sequence = [...sequence, event.key].slice(-code.length)
      if (sequence.join('|').toLowerCase() === code.join('|').toLowerCase()) setKonami(true)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return { phrase, setPhrase, konami, setKonami }
}
