import { Section } from './Section';

const certifications = [
  { src: '/certs/aws-cloud-practitioner.png', alt: 'AWS Cloud Practitioner' },
  { src: '/certs/aws-developer-associate.png', alt: 'AWS Developer Associate' },
];

const projects = [
  {
    name: 'Elapsed',
    stack: 'React · TypeScript · .NET',
    description: 'A swim‑training timer app with laps, splits and live feedback.',
    image: '/projects/elapsed.png',
  },
  {
    name: 'Geaux Enroll',
    stack: 'React · Node · PostgreSQL',
    description: 'Simplifies course enrollment for students with rich search and notifications.',
    image: '/projects/geaux-enroll.png',
  },
  {
    name: 'Youtube Sentiment Analyzer',
    stack: 'Python · Pandas · React',
    description: 'Scrapes comments and visualizes sentiment over time for any video.',
    image: '/projects/youtube-sentiment.png',
  },
  {
    name: 'Palate Passport',
    stack: 'React Native · GraphQL',
    description: 'A food‑travel log that lets you mark and rate dishes across the world.',
    image: '/projects/palate-passport.png',
  },
  {
    name: 'ARC: This Website!',
    stack: 'React · Tailwind · Motion',
    description: 'The very site you’re browsing—rebuilt to be fast, accessible and fun.',
    image: '/projects/arc.png',
  },
  {
    name: 'Exodus',
    stack: 'Unity · C#',
    description: 'A small 2D exploration game with puzzles and atmospheric music.',
    image: '/projects/exodus.png',
  },
  {
    name: 'Akon',
    stack: 'Discord.js · Firebase',
    description: 'A Discord bot for sharing track recommendations and chat games.',
    image: '/projects/akon.png',
  },
];

const styles = {
  sectionDivider: 'flex flex-col gap-8 items-center justify-center',
  certsWrapper: 'flex flex-wrap justify-center gap-6 w-full max-w-4xl',
  certDivider: 'flex flex-col items-center',
  certImg: 'h-20 w-20 object-contain',
  certText: 'mt-2 text-xs text-neutral-300',
  grid: 'grid gap-6 md:grid-cols-2 w-full max-w-4xl',
  card:
    'group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/40 p-5 transition ' +
    'hover:border-white/20 hover:bg-neutral-900/80',
  imgWrapper: 'h-32 mb-3 overflow-hidden rounded-lg bg-neutral-800',
  img: 'h-full w-full object-cover transition-transform duration-300 group-hover:scale-105',
  name: 'mb-1 text-sm font-semibold text-white',
  stack: 'mb-2 text-[0.7rem] uppercase tracking-wide text-neutral-400',
  desc: 'text-xs text-neutral-300',
} as const;

export function PortfolioSection() {
  return (
    <Section
      id="portfolio"
      label="Portfolio"
      title="Projects & Certifications"
      kicker="A sampling of what I’ve built, learned and shipped"
    >
      <div className={styles.sectionDivider}>
        <div className={styles.certsWrapper}>
          {certifications.map((cert) => (
            <div key={cert.alt} className={styles.certDivider}>
              <img src={cert.src} alt={cert.alt} className={styles.certImg} />
              <span className={styles.certText}>{cert.alt}</span>
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.name} className={styles.card}>
              <div className={styles.imgWrapper}>
                <img src={project.image} alt={project.name} className={styles.img} />
              </div>
              <h3 className={styles.name}>{project.name}</h3>
              <p className={styles.stack}>{project.stack}</p>
              <p className={styles.desc}>{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
