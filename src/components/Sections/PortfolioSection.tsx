import { PORTFOLIO_CERTIFICATIONS, type PortfolioCert } from '../../assets/certifications';
import { PORTFOLIO_PROJECTS, type PortfolioProject } from '../../assets/projects';
import { techLabels, techLogos } from '../../assets/techLogos';
import { cn } from '../../lib/cn';
import { Tooltip } from '../Common/Tooltip';
import { SECTION_SELECTORS } from '../../lib/sectionSelectors';
import { LoadableImage } from '../Common/LoadableImage';
import { Section } from './Section';

const styles = {
  sectionDivider: 'flex flex-col gap-10 items-center justify-center',
  certsWrapper: 'flex flex-wrap justify-center gap-6 w-full max-w-4xl',
  certCard:
    'group flex flex-col items-center rounded-2xl border border-white/10 bg-neutral-900/40 p-4 ' +
    'transition duration-300 hover:border-emerald-400 hover:bg-neutral-900/80 cursor-pointer ' +
    'hover:-translate-y-[2px] hover:shadow-[0_0_38px_rgba(52,211,153,1)]',
  certImg:
    'mb-2 h-24 w-24 object-contain mx-auto transition-transform duration-300 ' +
    'group-hover:scale-110 group-hover:shadow-[0_0_32px_rgba(56,189,248,0.85)] group-hover:rounded-xl',
  certText: 'mt-1 text-xs font-medium text-neutral-200',

  grid: 'grid gap-7 md:grid-cols-2 w-full max-w-4xl',
  card:
    'group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/40 p-6 ' +
    'transition duration-300 hover:border-emerald-400 hover:bg-neutral-900/80 ' +
    'hover:-translate-y-[2px] hover:shadow-[0_0_40px_rgba(52,211,153,1)]',
  featuredCard:
    'border-sky-300/20 bg-sky-950/15 ring-1 ring-sky-300/10 ' +
    'shadow-[0_0_18px_rgba(56,189,248,0.28)] hover:border-sky-300/40 hover:shadow-[0_0_28px_rgba(56,189,248,0.38)]',
  imgWrapper:
    'h-40 mb-4 overflow-hidden rounded-lg bg-neutral-800 flex items-center justify-center ' +
    'transition-all duration-300 group-hover:ring-2 group-hover:ring-emerald-400/80 ' +
    'group-hover:ring-offset-2 group-hover:ring-offset-neutral-950 ' +
    'group-hover:shadow-[0_0_42px_rgba(56,189,248,0.85)]',
  featuredImgWrapper:
    'bg-transparent ring-1 ring-sky-300/25 ring-offset-1 ring-offset-neutral-950 ' +
    'shadow-[0_0_12px_rgba(56,189,248,0.2)]',
  projectImgLink: 'flex h-full w-full items-center justify-center',
  img:
    'h-full w-full object-cover mx-auto transition-transform duration-300 ' +
    'group-hover:scale-105',
  featuredImg: 'h-full w-full object-contain p-4 md:p-5',

  name: 'mb-1 text-sm md:text-base font-semibold text-white',
  nameLink:
    'inline-flex items-center text-sm md:text-base font-semibold text-white ' +
    'hover:text-emerald-400 transition-colors',
  featuredNameLink: 'text-sky-100 hover:text-sky-300',
  desc: 'pt-1 text-xs md:text-sm text-neutral-300',
  stackRow: 'w-full mt-2 flex flex-wrap justify-center items-center gap-2',
  stackIcons: 'flex flex-wrap items-center gap-2',
  stackIconWrapper:
    'flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-neutral-200/20',
  stackIcon: 'h-4 w-4 md:h-5 md:w-5 object-contain',
} as const;

export function PortfolioSection() {
  return (
    <Section
      id={SECTION_SELECTORS.PORTFOLIO}
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
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

function Certification({ alt, url, src, issued }: PortfolioCert) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className={styles.certCard}>
      <img src={src} alt={alt} className={styles.certImg} />
      <span className={styles.certText}>{alt}</span>
      <span className={styles.certText}>Issued {issued}</span>
    </a>
  );
}

function Project({ name, href, description, image, techs, featured }: PortfolioProject) {
  return (
    <article className={cn(styles.card, featured && styles.featuredCard)}>
      <div className={cn(styles.imgWrapper, featured && styles.featuredImgWrapper)}>
        <a
          href={href}
          title={`${name}-image`}
          target="_blank"
          rel="noreferrer"
          className={styles.projectImgLink}
        >
          <LoadableImage
            src={image}
            alt={name}
            className={cn(styles.img, featured && styles.featuredImg)}
          />
        </a>
      </div>

      <h3 className={styles.name}>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={cn(styles.nameLink, featured && styles.featuredNameLink)}
        >
          {name}
        </a>
      </h3>

      <div className={styles.stackRow}>
        <div className={styles.stackIcons}>
          {techs.map((key) => (
            <Tooltip key={`${name}-${key}`} content={techLabels[key]}>
              <span className={styles.stackIconWrapper}>
                <img src={techLogos[key]} alt={techLabels[key]} className={styles.stackIcon} />
              </span>
            </Tooltip>
          ))}
        </div>
      </div>

      <p className={styles.desc}>{description}</p>
    </article>
  );
}
