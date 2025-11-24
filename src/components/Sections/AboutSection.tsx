import { Section } from './Section';
import Portrait from '../../assets/images/Portrait_Pro.png';
import Portrait2 from '../../assets/images/Portrait_2.png';
import { SECTION_SELECTORS } from '../../lib/sectionSelectors';
import { LoadableImage } from '../Common/LoadableImage';

const styles = {
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
      kicker="Software developer, LSU grad, builder"
    >
      <div className={styles.wrapper}>

        <div className={styles.imageWrapper}>
          <LoadableImage
            src={Portrait}
            alt="Portrait of Aaron Cheng"
            className={styles.image}
          />
        </div>

        <div className={styles.text}>
          <p>
            I’m a software engineer from Louisiana, constantly looking forward to new opportunities.
            I currently work with web development stacks and Python, focused on shippability and
            interactive experiences. Outside of work, I tinker with my own small software projects,
            enjoy staying active, hang out with my pup Luna, and look for connections with the
            people around me.
          </p>
          <p className="mt-4">
            This site is a compact display of my professional life as well as a home for some of the
            software that I've built. Take a look around—you’ll find certs, apps, and maybe some fun
            surprises. Don't forget to leave a message on my board!
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <LoadableImage
            src={Portrait2}
            alt="Portrait of Aaron Cheng 2"
            className={styles.image}
          />
        </div>

      </div>
    </Section>
  );
}
