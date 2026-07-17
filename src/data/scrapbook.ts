import type { Letter, Memory, Photo, Place, TimelineEvent } from '../types/content'

// This is the one file to edit when personalizing the scrapbook.
export const couple = {
  names: 'Isela & Jayden',
  startDate: '2026-01-17T19:00:00',
  eyebrow: 'Wished upon the stars and found my home and my heart.',
  title: 'The beginning of forever.',
  subtitle: 'For how we came to be, some special moments and memories, but just a drop in every thing well ever be.',
  welcome: 'I made a little place for us, for where we have been, who we are, and everything still ahead.',
  finalLetter: `

  Isela, my love, my best friend, my home. Meeting you six months ago was the best thing that's ever happened to me and I say that with the utmost sincerity. I always knew what I wanted for my future, but so often it felt like a fantasy, thats until I met you. You have this charm and light that I cannot explain, it comforts me but at the same time motivates me to be the best version of myself. Im going to provide the future we dream of, and thats a promise that I can make to you. I will forever strive to attain all that we've talked about, all 5 kids (lollll), all the adventures, the wedding we want, and most of all a bond and love thats unshakable. You are my soulmate, the one I want to grow old with, I loved you yesterday, I love you today, and Ill love you forever.
`,
}

const img = (id: string, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`

// Photos shown only in the "A handful of favorites" Polaroid gallery.
export const favoritePhotos: Photo[] = [
  { src: '/photos/sunset.jpeg', alt: 'Our first sunset together', caption: 'Wow.. Can you believe you shared a sunset walk with me??' },
  { src: '/photos/vday.jpeg', alt: 'valentines ask', caption: 'Me asking you to be my valentine, best decision evaaaaaa!!' },
  { src: '/photos/ring.jpeg', alt: 'Engagement ring', caption: 'We glanced a little, got a feel, but I think we should do it for real. ' },
  { src: '/photos/bagel.jpeg', alt: 'photo of bagel', caption: 'I know you loved this place so it had to be in the favorites!' },
  { src: '/photos/Meal1.jpeg', alt: 'First time you cooked for me', caption: 'You said you can cook, little did I know you were a secret chef!' },
  { src: '/photos/carve.jpeg', alt: 'Carved out initials', caption: 'Is this considered graffiti??? I hope it stays forever <3' },
]

// Photos used by the story timeline. These are independent from favoritePhotos.
export const storyPhotos: Photo[] = [
  { src: '/photos/IMG_9928.jpeg', alt: 'The night we met', caption: 'The beginning of our story.' },
  { src: '/photos/ucsbzoo1.jpeg', alt: 'Our first zoo date', caption: 'Our first adventure together.' },
  { src: '/photos/ucsbzoo2.jpeg', alt: 'Another memory from our zoo date', caption: 'A favorite day from the very beginning.' },
  { src: '/photos/valentines.jpeg', alt: 'Our first Valentine’s Day', caption: 'Cupid’s arrow found us.' },
  { src: '/photos/spit_in_mouth.jpeg', alt: 'A favorite night together', caption: 'A memory that still makes me smile.' },
  { src: '/photos/hike.jpeg', alt: 'First Hike we went on', caption: 'A hike we went on.' },
  { src: '/photos/sandwich.jpeg', alt: 'First Sandwich we had together', caption: 'Best Sandwich ever.' },
  { src: '/photos/yeezy1.jpeg', alt: 'Kanye', caption: 'GOAT' },
  { src: '/photos/yeezy2.jpeg', alt: 'Us at kanye concert', caption: 'In an uber to sofi.' },
  { src: '/photos/official1.jpeg', alt: 'asking out', caption: 'asking out' },
  { src: '/photos/official2.jpeg', alt: 'asking out trunk', caption: 'asking out trunk' },
  { src: '/photos/tooDrunk1.jpeg', alt: 'too drunk, fun time ', caption: 'too drunk, fun time ' },
  { src: '/photos/grad.jpeg', alt: 'grad', caption: 'grad' },
  { src: '/photos/sf1.jpeg', alt: 'sf1', caption: 'sf1' },
  { src: '/photos/sf2.jpeg', alt: 'sf2', caption: 'sf2' },
  { src: '/photos/BP1.jpeg', alt: 'BP1', caption: 'BP1' },
  { src: '/photos/BP2.jpeg', alt: 'BP2', caption: 'BP2' },
  { src: '/photos/bday.jpeg', alt: 'bday', caption: 'bday' },
  { src: '/photos/forth.jpeg', alt: 'forth', caption: 'forth' },
  { src: '/photos/rizz.jpeg', alt: 'rizz', caption: 'rizz' },

  

]

export const timeline: TimelineEvent[] = [
  { date: 'JANUARY 17, 2026', title: 'The beginning', story: 'A party we both almost didn\'t attend, a whole lot of eye contact, and a white lie that sealed the deal. Any maybeeeee a little bit of liquid courage.', photos: [storyPhotos[0]] },
  { date: 'JANUARY 31, 2026', title: 'Our first adventure', story: 'We had our first date at the zoo, where we shared watered down matcha from DUNE and got height mogged by Giraffes and almost attacked by a bird. ', photos: [storyPhotos[1], storyPhotos[2]] },
  { date: 'FEBRUARY 14, 2026', title: 'Cupids Arrow', story: 'Our first Valentine\'s Day together. Sitting across from you I was so nervous. Your beauty took my breath away but I knew in that moment that I had found someone truly special.', photos: [storyPhotos[3]] },
  { date: 'FEBRUARY 26, 2026', title: 'My personal shot glass', story: 'A pregame fueled by shots taken directly from your mouth, who needs a chaser when you have a kiss!', photos: [storyPhotos[4]] },
  { date: 'MARCH 8, 2026', title: 'A hike with two views', story: 'While you didn\'t know it, this hike and day changed me forever. There was something about it that utterly made me fall so much in love with you.', photos: [storyPhotos[5], storyPhotos[6]] },
  { date: 'April 3, 2026', title: 'YEEZY', story: 'We got to witness one of the best concerts of all time. There was nothing better than being there with you, my little dancer *joke*.', photos: [storyPhotos[7], storyPhotos[8]] },
  { date: 'April 17, 2026', title: 'Officially Mine', story: 'While we had been locked in since day one, I officially locked you down this day. Its crazy to think that at this moment it had only been 3 months, but Love was never a question. ps the vision for the trunk looked better in my head HAHA...', photos: [storyPhotos[9], storyPhotos[10]] },
  { date: 'May 30, 2026', title: 'Oh... Getting drunk with you', story: 'Im sorry, I had to include this night, its a night I will never forget, we had fun night alright lolll. Roommate: "Are you okay in there?????",\nYou: "Yes come in", Me: "wtffff', photos: [storyPhotos[11]] },
  { date: 'June 12, 2026', title: 'GRADUATIONNNNN', story: 'While this day marked a new chapter in our lives, I could not have asked for a better person to have supported me through my last 2 quarters.', photos: [storyPhotos[12]] },
  { date: 'June 20, 2026', title: 'First time with the fishiesss', story: 'This is the first time we got to experience the magic of the ocean together - National Geographic Voice.', photos: [storyPhotos[13], storyPhotos[14]] },
  { date: 'June 24, 2026', title: 'First Baseball Game', story: 'How was our first baseball game the Fricken A\'s vs the Giants, thats pretty yay area coded if you ask me. ', photos: [storyPhotos[15], storyPhotos[16]] },
  { date: 'July 1, 2026', title: 'Twenty Fineeeee', story: 'Our first birthday celebration together. And tbh, you made me feel more loved and special than I ever thought possible. So thank you again, a million times over!', photos: [storyPhotos[17]] },
  { date: 'July 4, 2026', title: 'Mericcaaa Day', story: 'While the bridge was a fluke, we still made it work and I got this goofy photo of my goofy girl. Cheers to merica and our first forth of july together.', photos: [storyPhotos[18]] },
  { date: 'July 17, 2026', title: '6 months', story: 'Six months of memories, laughs, and love. Here\'s to many more!', photos: [storyPhotos[19]] },

]

export const letters: Letter[] = [
  { prompt: "Open when you're sad", salutation: 'My love,', body: 'A day like this comes and goes, but always remember that you are not alone, you have me in your corner for life. Sad days come, but so do brighter ones, so never loath too much on things you cant control, it will be okay.', signoff: 'Always in your corner' },
  { prompt: 'Open when you miss me', salutation: 'Awwww my wittle babyyyyy,', body: 'If youre missing me, just imagine how Im feeling about you right now. Just know that soon enough, we will be reunited again and you can get endless hugs and kisses and date nights and flowers and did I mention kisses? Those days are just around the corner, well be together in no time!', signoff: 'Missing you right back' },
  { prompt: 'Open on our 1 year anniversary', salutation: 'To my favorite person,', body: 'One year is such an accomplishment for us, so first off, cheers to that. Im writing this looking forward to that day. We will have gone through many great times and possibly a few rough patches, but one thing is for sure, well be even closer and stronger than ever before. Hey, you never know, a ring could be on its way!', signoff: 'One Year down, infinity yo go' },
]

export const reasons = [
  'You are the goofiest girl Ive ever met, and ohhhh I love goofy.',
  'Home is no longer some physical place, but a feeling that I get when Im with you.',
  'You cook like a chef, you are literally chef wife, and ohhh you know I can eat.',
  'Youve got the best, and ohhhhh I mean the best cream de la meow meow, and oh is it my favorite desert in the world.',
  'Your willingness to remain true to yourself even after countless mfers messing with you is beyond admirable, and I love that about you.',
  'Youve got beauty, oh is that an understatement, you are the most beautiful girl that Ive ever laid eyes on.',
  'My baby, you are so smart and driven, we are going to be unstoppable together, and I love that about you.',
  'You are the most thoughtful person I know, you do everything with maximal effort.',
  'You make even the most ordinary moments feel worth remembering.',
  'You make kindness look effortless.',
  'With you, I never have to be anyone but myself.',
  'You believe in the version of me I am still becoming.',
  'You are both my calm and my favorite adventure.',
  'You remember the tiny things, and somehow make them matter.',
  'Home stopped being a physical place when I met you.',
]

export const importantDates = [
  { label: 'MEXICO trip', date: '2026-08-24' },
  { label: 'Your birthday', date: '2026-11-04' },
  { label: 'Our anniversary', date: '2027-01-17' },
  
  
]

export const places: Place[] = [
  { name: 'UC Santa Barbara', date: 'Early 2026', story: 'Ocean breeze, sand between our toes, A little bit of vodka, and a love that only grows. A place forever etched within my heart, The place where our forever got its start.', image: '/photos/UCSB.jpg', mapUrl: 'https://www.google.com/maps/place/University+of+California,+Santa+Barbara/@34.4139629,-119.8515219,17z/data=!4m14!1m7!3m6!1s0x80e93f67f3314b37:0x4e956b7e5cb6cec2!2sUniversity+of+California,+Santa+Barbara!8m2!3d34.4139629!4d-119.848947!16zL20vMDFmMXI0!3m5!1s0x80e93f67f3314b37:0x4e956b7e5cb6cec2!8m2!3d34.4139629!4d-119.848947!16zL20vMDFmMXI0?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D' },
  { name: 'The Bayarea', date: 'Our entire lives', story: 'There was something so familiar about the way you talked, your sense of humor, the way you carried yourself. I attribute a lot of this to growing up in the Bayarea and it reinforced just how similar we are. ', image: img('photo-1501594907352-04cda38ebc29'), mapUrl: 'https://www.google.com/maps/place/San+Francisco+Bay+Area,+CA/@37.8734471,-123.7395291,8z/data=!3m1!4b1!4m6!3m5!1s0x808583a3a688d7b5:0x8c891b8457461fa9!8m2!3d37.8271784!4d-122.2913078!16zL20vMDZwdnI?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D' },
  { name: 'Whats next?', date: 'Our next chapter', story: 'I don\'t know where our next adventure will take us. Maybe another city, another country, or a place we\'ve never even dreamed of. Wherever it is, I know one thing for certain, I can\'t wait to discover it with you.', image: '/photos/next_adventure.jpeg', mapUrl: 'https://www.google.com/maps/place/San+Francisco+City+Hall/@37.7806932,-122.6989607,11z/data=!3m1!5s0x8085809967dd6703:0x16ff23393f947b9b!4m10!1m2!2m1!1ssf+courthouse+wedding!3m6!1s0x808580997aeae663:0xb2706dff83574f4a!8m2!3d37.779275!4d-122.4192417!15sChVzZiBjb3VydGhvdXNlIHdlZGRpbmdaFyIVc2YgY291cnRob3VzZSB3ZWRkaW5nkgEJY2l0eV9oYWxs4AEA!16zL20vMDNwX3Bx?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D' },
]

export const adventures = [
  { label: 'Eat dinner on the Amalfi Coast over looking the ocean', complete: false },
  { label: 'Drink fresh coconuts at sunrise in Costa Rica', complete: false },
  { label: 'Eat authentic Japanese Ramen', complete: false },
  { label: 'Learn to Surf in Hawaii', complete: false },
  { label: 'Eat authentic Italian food in Rome', complete: false },
  { label: 'Ski in the Alps', complete: false },
  { label: 'See the northern lights', complete: false },
  { label: 'Scuba dive in the Great Barrier Reef', complete: false },
  { label: 'Hot air ballon in Turkey', complete: false },
  { label: 'Explore the big apple', complete: false },
  { label: 'Dance with you in Ibiza', complete: false },
  { label: 'Attend a concert', complete: true },
]

export const memories: Memory[] = [
  { type: 'ADMIT ONE', title: 'Our first movie in theaters', date: '04.11.26', story: 'We watched Project Hail Mary.I think this was the first movie that we actually watched in its entirety... I guess that means we just cant get enough of each other!', accent: '#b98178' },
  { type: 'DINNER RECEIPT', title: 'Two plates, 1 drink, and our first date', date: '01.31.26', story: 'On the night of our first date, we went and ate at Zaytoon and enjoyed our dinner under the beautiful lights, next time i\'ll make sure we get the fire pit table..', accent: '#9c8069' },
  { type: 'OFFICIAL MEET UP', title: 'Our first official meet up', date: '01.25.26', story: 'I believe this was the first time we officially met up together. It was when you invited me over to get some banana bread and you wore that cute, but chill outfit on purpose. Boyyyy was I trying to keep it together!', accent: '#83927b' },
  { type: 'PERSONAL CONCERT STUB', title: 'The sound track of you and I', date: '02.13.26', story: 'Brent Faiyaz dropped his album, "Icon", to which we sat and had our own little listening party.', accent: '#837990' },
]

export const playlist = {
  title: 'butterflies.',
  artist: 'Brent Faiyaz',
  appleMusicUrl: 'https://music.apple.com/us/album/butterflies/1867923697?i=1867923703',
  embedUrl: 'https://embed.music.apple.com/us/album/butterflies/1867923697?i=1867923703',
}
