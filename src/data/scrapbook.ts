import type { Letter, Memory, Photo, Place, TimelineEvent } from '../types/content'

// This is the one file to edit when personalizing the scrapbook.
export const couple = {
  names: 'Isela & Jayden',
  startDate: '2026-01-17T19:00:00',
  eyebrow: 'A small archive of a very big love',
  title: 'Our little forever.',
  subtitle: 'For every ordinary Tuesday that became a favorite memory, and every adventure still waiting for us.',
  welcome: 'I made a little place for us — for where we have been, who we are, and everything still ahead.',
  finalLetter: `If I could keep only one thing from all our years, it would not be a photograph or a place. It would be the feeling of finding you in every room — the quiet certainty that wherever we are, I am home. Thank you for making a life with me that I never want to stop noticing.`,
}

const img = (id: string, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`

export const gallery: Photo[] = [
  { src: img('photo-1522673607200-164d1b6ce486'), alt: 'Couple walking at sunset', caption: 'The kind of afternoon we wished would last forever.' },
  { src: img('photo-1500530855697-b586d89ba3ee'), alt: 'Cozy road trip landscape', caption: 'Windows down, nowhere else to be.' },
  { src: img('photo-1519225421980-715cb0215aed'), alt: 'Hands held at a celebration', caption: 'A promise made in all the small ways.' },
  { src: img('photo-1504196606672-aef5c9cefc92'), alt: 'Dreamy coastline', caption: 'Our favorite view was always the one we shared.' },
  { src: img('photo-1494774157365-9e04c6720e47'), alt: 'A quiet romantic moment', caption: 'Soft light, happy hearts.' },
  { src: img('photo-1523438885200-e635ba2c371e'), alt: 'Flowers held in warm light', caption: 'You still make the world feel new.' },
]

export const timeline: TimelineEvent[] = [
  { date: 'AUGUST 20, 2022', title: 'The beginning', story: 'One conversation stretched into hours, and somehow it felt less like meeting and more like remembering. The first page of us was quiet, easy, and impossible to forget.', photos: [gallery[0]] },
  { date: 'OCTOBER 08, 2022', title: 'Our first adventure', story: 'We took the long way, ordered too much food, and learned that getting a little lost together could be its own kind of destination.', photos: [gallery[1], gallery[3]] },
  { date: 'MAY 14, 2023', title: 'The ordinary magic', story: 'Somewhere between coffee runs, shared playlists, and laughing in the kitchen, ordinary life became the part I looked forward to most.', photos: [gallery[4]] },
  { date: 'NOW & ALWAYS', title: 'Still choosing you', story: 'The story keeps getting better — not because every day is perfect, but because every day is ours.', photos: [gallery[5]] },
]

export const letters: Letter[] = [
  { prompt: "Open when you're sad", salutation: 'My love,', body: 'You do not have to be bright every day. Let today be soft. I am proud of you for the things no one sees, and I am beside you even in the quietest moments.', signoff: 'Always in your corner' },
  { prompt: 'Open when you miss me', salutation: 'Hey, you,', body: 'Close your eyes and picture my hand finding yours. Distance is only the space between two moments together — and ours is already on its way.', signoff: 'Missing you right back' },
  { prompt: 'Open on our anniversary', salutation: 'To my favorite person,', body: 'Another year of tiny jokes, brave conversations, familiar roads, and brand-new dreams. I would choose this life, and you, every single time.', signoff: 'Here is to the next chapter' },
]

export const reasons = [
  'You make even the most ordinary moments feel worth remembering.',
  'You listen with your whole heart.',
  'Your laugh changes the atmosphere of a room.',
  'You make kindness look effortless.',
  'With you, I never have to be anyone but myself.',
  'You believe in the version of me I am still becoming.',
  'You are both my calm and my favorite adventure.',
  'You remember the tiny things — and somehow make them matter.',
  'Home stopped being a place when I met you.',
]

export const importantDates = [
  { label: 'Our anniversary', date: '2026-08-20' },
  { label: 'Your birthday', date: '2026-11-18' },
  { label: 'Our next adventure', date: '2026-12-12' },
]

export const places: Place[] = [
  { name: 'Big Sur', date: 'SPRING 2023', story: 'Ocean air, a winding road, and an afternoon with nowhere else to be.', image: img('photo-1510414842594-a61c69b5ae57'), mapUrl: 'https://maps.google.com/?q=Big+Sur' },
  { name: 'San Francisco', date: 'WINTER 2024', story: 'Cold hands, warm coffee, and every hill somehow worth climbing.', image: img('photo-1501594907352-04cda38ebc29'), mapUrl: 'https://maps.google.com/?q=San+Francisco' },
  { name: 'Yosemite', date: 'SUMMER 2025', story: 'We felt wonderfully small under a sky that seemed to go on forever.', image: img('photo-1500534314209-a25ddb2bd429'), mapUrl: 'https://maps.google.com/?q=Yosemite' },
]

export const adventures = [
  { label: 'See the northern lights', complete: false },
  { label: 'Take a coast-to-coast road trip', complete: false },
  { label: 'Get a dog and give it a ridiculous name', complete: false },
  { label: 'Learn to dance together', complete: false },
  { label: 'Watch the sunrise in a new country', complete: true },
  { label: 'Build a home full of Sunday mornings', complete: false },
]

export const memories: Memory[] = [
  { type: 'ADMIT ONE', title: 'The movie we barely watched', date: '09.16.22', story: 'We whispered through half of it and missed the ending. Still a five-star night.', accent: '#b98178' },
  { type: 'CAFÉ RECEIPT', title: 'Two coffees, one rainy window', date: '01.22.23', story: 'A twenty-minute coffee became a three-hour conversation about everything.', accent: '#9c8069' },
  { type: 'PRESSED FLOWER', title: 'From the first just-because bouquet', date: '04.11.23', story: 'No occasion. That was what made it perfect.', accent: '#83927b' },
  { type: 'CONCERT STUB', title: 'Our song, played live', date: '07.08.24', story: 'A whole crowd disappeared when you looked at me during the chorus.', accent: '#837990' },
]

export const playlist = {
  title: 'Our slow Sunday song', artist: 'The soundtrack to us',
  artwork: img('photo-1494232410401-ad00d5433cfa', 600),
  audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
}
