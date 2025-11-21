import type { TechKey } from './techLogos';

export const PORTFOLIO_PROJECTS: {
  name: string;
  href: string;
  stack: string;
  description: string;
  image: string;
  techs: TechKey[];
}[] = [
  {
    name: 'Elapsed',
    href: 'https://github.com/pfranz1/swim_timer',
    stack: 'Dart · Flutter · Firebase · Figma',
    description:
      'Elapsed is a mobile app developed by myself and peers for our software development class. ' +
      'Compatible with iOS and Android, it streamlines time tracking, record keeping, and performance analysis ' +
      'for swimming coaches. The README links to a demo you can try yourself.',
    image: 'https://i.ibb.co/tx3tPMQ/Elapsed-BGImage.png',
    techs: ['DART', 'FLUTTER', 'FIREBASE', 'FIGMA'],
  },
  {
    name: 'Geaux Enroll',
    href: 'https://github.com/aaronchenghs/geaux_enroll',
    stack: 'TypeScript · React · Redux · Sass',
    description:
      'An Interface Design course project: an interactive prototype rethinking university course scheduling UX. ' +
      'Explores better search, enrollment flows, and schedule visualization. Deployed build is linked in the repo.',
    image: 'https://i.ibb.co/GcNR7rR/Capture.png',
    techs: ['TS', 'REACT', 'REDUX', 'SASS'],
  },
  {
    name: 'Youtube Sentiment Analyzer',
    href: 'https://github.com/aaronchenghs/youtube-sentiment-analyzer-server',
    stack: 'Python · Pandas · Flask · Next.js · TypeScript · Sass',
    description:
      'Full-stack ML app that ingests comments from a YouTube video and predicts sentiment. ' +
      'Flask + Pandas on the backend, Next.js + TypeScript on the frontend. Backend repo links to the frontend and setup steps.',
    image: 'https://i.ibb.co/vB5K4xC/comment-sect.png',
    techs: ['PYTHON', 'PANDAS', 'FLASK', 'TS', 'NEXT', 'SASS'],
  },
  {
    name: 'Palate Passport',
    href: 'https://github.com/aaronchenghs/Code_Bros',
    stack: 'TypeScript · React · Redux · MUI · Sass · Yelp API',
    description:
      'A web app using the Yelp API to help users plan trips by scheduling meals by day. ' +
      'Built for an LSU hackathon and awarded first prize after a 24-hour build and live demo.',
    image: 'https://i.ibb.co/h8wVkgn/Capture.png',
    techs: ['TS', 'REACT', 'REDUX', 'MUI', 'SASS'],
  },
  {
    name: 'ARC: This Website (Legacy)',
    href: 'https://github.com/aaronchenghs/AaronCheng-Website',
    stack: 'JavaScript · React · Sass · MUI · Firebase',
    description:
      'The first major version of my personal site, built with React, Sass, Material UI, and Firebase. ' +
      'The repo shows the foundations that this v2 is built on.',
    image: 'https://i.ibb.co/QJxx9dG/webLogo.png',
    techs: ['JS', 'HTML5', 'SASS', 'REACT', 'MUI', 'FIREBASE'],
  },
  {
    name: 'Exodus',
    href: 'https://www.exodusgbw.io/',
    stack: 'TypeScript · Node · Decentraland SDK',
    description:
      'A web-hosted RPG metaverse game on the Decentraland platform. I worked remotely as a front-end developer, ' +
      'building 2D interfaces in TypeScript with the Decentraland SDK. The project received a quarter-million community grant.',
    image: 'https://i.ibb.co/nscswNs/Thumb6.jpg',
    techs: ['TS', 'NODE'],
  },
  {
    name: 'Akon',
    href: 'https://github.com/aaronchenghs/Akon',
    stack: 'Python · Discord.py',
    description:
      'A music-playing and utilities Discord bot themed after Akon. Handles playback, queues, and various chat features. ' +
      'The repo contains the full source and setup.',
    image: 'https://i.ibb.co/HDQ5xX1/Akon.png',
    techs: ['PYTHON', 'DISCORD'],
  },
];
