import Portrait from '../../assets/images/Portrait_Pro.png';
import Portrait2 from '../../assets/images/Portrait_2.png';
import { SECTION_SELECTORS } from '../../lib/sectionSelectors';
import { LoadableImage } from '../Common/LoadableImage';
import { Section } from './Section';

const STYLES = {
  wrapper: 'flex flex-col gap-8 md:flex-row md:items-center',
  imageWrapper:
    'relative shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/20 ' +
    'h-48 w-48 md:h-60 md:w-60 mx-auto md:mx-0 ' +
    'transition duration-300 hover:border-emerald-400 hover:bg-neutral-900/40',
  image: 'h-full w-full object-cover transition-transform duration-500 group-hover:scale-105',
  text: 'flex-1 text-sm md:text-[0.95rem] leading-relaxed text-neutral-300',
} as const;

export function AboutSection() {
  return (
    <Section
      id={SECTION_SELECTORS.ABOUT}
      label="About"
      title="Aaron Cheng"
      titleAs="h1"
      kicker="Software Engineer"
    >
      <div className={STYLES.wrapper}>
        <div className={STYLES.imageWrapper}>
          <LoadableImage src={Portrait} alt="Portrait of Aaron Cheng" className={STYLES.image} />
        </div>

        <div className={STYLES.text}>
          <p>
            I'm Aaron Cheng, a software engineer and LSU Computer Science graduate. I build
            full-stack and front-end applications with a focus on maintainability, performance, and
            clean user experiences.
          </p>
          <p className="mt-4">
            I currently work as a Software Engineer at Juno Health (DSS Inc.) working on EHR
            applications. This portfolio is my hub for experience, certifications, and project work.
          </p>
          <p className="mt-4">
            Outside of work, I build side projects, stay active, play retro games, and spend time
            with my pup Luna. Here you'll find certs, apps, and direct ways to reach me.
          </p>
        </div>

        <div className={STYLES.imageWrapper}>
          <LoadableImage src={Portrait2} alt="Portrait of Aaron Cheng 2" className={STYLES.image} />
        </div>
      </div>
    </Section>
  );
}
