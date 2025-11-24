import { Section } from './Section';
import Portrait from '../../assets/images/Portrait_Pro.png';
import Portrait2 from '../../assets/images/Portrait_2.png';
import { SECTION_SELECTORS } from '../../lib/sectionSelectors';

const styles = {
  wrapper: 'flex flex-col gap-8 md:flex-row md:items-center',
  imageWrapper:
    'shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/20 ' +
    'h-48 w-48 md:h-60 md:w-60 mx-auto md:mx-0',
  image: 'h-full w-full object-cover',
  text: 'flex-1 text-sm md:text-[0.95rem] leading-relaxed text-neutral-300',
} as const;

export function AboutSection() {
  return (
    <Section
      id={SECTION_SELECTORS.ABOUT}
      label="About"
      title="Aaron Cheng"
      kicker="Software developer, LSU grad, builder"
      subtleOnMount
    >
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <img src={Portrait} alt="Portrait of Aaron Cheng" className={styles.image} />
        </div>

        <div className={styles.text}>
          <p>
            I’m a software enginner from Louisiana, contantly looking forward to new opportunities.
            I currently work with web development stacks as well as Python, focused on shippability
            and interactive experiences. Outside of work, I tinker with my own small software
            projects, enjoy staying active, hang out with my pup Luna, and look for connections with
            the people around me.
          </p>
          <p className="mt-4">
            This site is a compact display of my professional life as well as a home for some of the
            software that I've built. Take a look around—you’ll find certs, apps, and maybe some fun
            surprises. Don't forget to leave a message on my board!
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <img src={Portrait2} alt="Portrait of Aaron Cheng 2" className={styles.image} />
        </div>
      </div>
    </Section>
  );
}
