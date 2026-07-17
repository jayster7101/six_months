import { useEffect, useState } from 'react'

export function useEasterEggs() {
  const [phrase, setPhrase] = useState(false)

  useEffect(() => {
    let typed = ''
    const onKey = (event: KeyboardEvent) => {
      typed = `${typed}${event.key.toLowerCase()}`.slice(-24)
      if (typed.includes('i love you')) { setPhrase(true); typed = '' }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return { phrase, setPhrase }
}
