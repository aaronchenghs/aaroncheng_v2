import { PORTFOLIO_PROJECTS } from '../../assets/projects';
import { techLogos, type TechKey } from '../../assets/techLogos';
import { Section } from './Section';

const certifications = [
  { src: '/certs/aws-cloud-practitioner.png', alt: 'AWS Cloud Practitioner' },
  { src: '/certs/aws-developer-associate.png', alt: 'AWS Developer Associate' },
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
  desc: 'p-1 text-xs text-neutral-300',
  stackRow: 'w-full mt-2 flex flex-wrap justify-center items-center gap-2',
  stackLabel: 'text-[0.7rem] font-semibold uppercase tracking-wide text-neutral-400',
  stackIcons: 'flex flex-wrap items-center gap-1.5',
  stackIcon: 'h-4 w-4 object-contain',
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
          {PORTFOLIO_PROJECTS.map((project) => (
            <Project
              key={project.name}
              name={project.name}
              href={project.href}
              stack={project.stack}
              description={project.description}
              image={project.image}
              techs={project.techs}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

type ProjectProps = {
  name: string;
  href: string;
  stack: string;
  description: string;
  image: string;
  techs: TechKey[];
};

function Project({ name, description, image, techs }: ProjectProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src={image} alt={name} className={styles.img} />
      </div>
      <h3 className={styles.name}>{name}</h3>

      <div className={styles.stackRow}>
        <div className={styles.stackIcons}>
          {techs.map((key) => (
            <img
              key={`${name}-${key}`}
              src={techLogos[key]}
              alt={key}
              className={styles.stackIcon}
            />
          ))}
        </div>
      </div>

      <p className={styles.desc}>{description}</p>
    </article>
  );
}
