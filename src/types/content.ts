export type Photo = { src: string; alt: string; caption: string }
export type TimelineEvent = { date: string; title: string; story: string; photos: Photo[] }
export type Letter = { prompt: string; salutation: string; body: string; signoff: string }
export type Place = { name: string; date: string; story: string; image: string; mapUrl?: string }
export type Memory = { type: string; title: string; date: string; story: string; accent: string }
