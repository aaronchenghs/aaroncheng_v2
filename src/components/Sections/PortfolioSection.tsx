import { PORTFOLIO_CERTIFICATIONS, type PortfolioCert } from '../../assets/certifications';
import { PORTFOLIO_PROJECTS, type PortfolioProject } from '../../assets/projects';
import { techLogos } from '../../assets/techLogos';
import { Section } from './Section';

const styles = {
  sectionDivider: 'flex flex-col gap-10 items-center justify-center',
  certsWrapper: 'flex flex-wrap justify-center gap-6 w-full max-w-4xl',
  certCard:
    'group flex flex-col items-center rounded-2xl border border-white/10 bg-neutral-900/40 p-4 ' +
    'transition hover:border-emerald-400 hover:bg-neutral-900/80 cursor-pointer',
  certImg: 'h-24 w-24 object-contain mb-2 transition-transform duration-300 group-hover:scale-110',
  certText: 'mt-1 text-xs font-medium text-neutral-200',
  grid: 'grid gap-7 md:grid-cols-2 w-full max-w-4xl',
  card:
    'group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/40 p-6 transition ' +
    'hover:border-emerald-400 hover:bg-neutral-900/80',
  imgWrapper: 'h-40 mb-4 overflow-hidden rounded-lg bg-neutral-800',
  img: 'h-full w-full object-cover transition-transform duration-300 group-hover:scale-105',
  name: 'mb-1 text-sm md:text-base font-semibold text-white',
  nameLink:
    'inline-flex items-center text-sm md:text-base font-semibold text-white hover:text-emerald-400 transition-colors',
  desc: 'pt-1 text-xs md:text-sm text-neutral-300',
  stackRow: 'w-full mt-2 flex flex-wrap justify-center items-center gap-2',
  stackIcons: 'flex flex-wrap items-center gap-1.5',
  stackIcon: 'h-4 w-4 md:h-5 md:w-5 object-contain',
} as const;

export function PortfolioSection() {
  return (
    <Section
      id="portfolio"
      label="Portfolio"
      title="Projects & Certifications"
      kicker="A sampling of what I’ve built"
    >
      <div className={styles.sectionDivider}>
        <div className={styles.certsWrapper}>
          {PORTFOLIO_CERTIFICATIONS.map((cert: PortfolioCert) => (
            <Certification key={cert.alt} {...cert} />
          ))}
        </div>

        <div className={styles.grid}>
          {PORTFOLIO_PROJECTS.map((project) => (
            <Project
              key={project.name}
              name={project.name}
              href={project.href}
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

function Certification({ alt, url, src, issued }: PortfolioCert) {
  return (
    <a key={alt} href={url} target="_blank" rel="noreferrer" className={styles.certCard}>
      <img src={src} alt={alt} className={styles.certImg} />
      <span className={styles.certText}>{alt}</span>
      <span className={styles.certText}>Issued {issued}</span>
    </a>
  );
}

function Project({ name, href, description, image, techs }: PortfolioProject) {
  return (
    <article className={styles.card}>
      <div className={styles.imgWrapper}>
        <a href={href} target="_blank" rel="noreferrer">
          <img src={image} alt={name} className={styles.img} />
        </a>
      </div>

      <h3 className={styles.name}>
        <a href={href} target="_blank" rel="noreferrer" className={styles.nameLink}>
          {name}
        </a>
      </h3>

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
