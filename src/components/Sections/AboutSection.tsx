import { Section } from './Section';
import Portrait from '../../assets/images/Portrait_Pro.png';
import Portrait2 from '../../assets/images/Portrait_2.png';

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
      id="about"
      label="About"
      title="Aaron Cheng"
      kicker="Software developer, LSU grad, builder of web and desktop tools"
    >
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <img src={Portrait} alt="Portrait of Aaron Cheng" className={styles.image} />
        </div>

        <div className={styles.text}>
          <p>
            I’m an from Louisiana who loves making things. I work primarily with TypeScript, React
            and .NET, shipping production-ready apps with high emphasis on reliability and polish.
            Outside of work, I dive into motion-heavy UIs, small SaaS-y ideas and ways to merge
            technology with my interests in law and policy.
          </p>
          <p className="mt-4">
            This site is the laboratory for my experiments and the place where my finished projects
            live. Take a look around—you’ll find certs, apps, and perhaps a few fun surprises.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <img src={Portrait2} alt="Portrait of Aaron Cheng 2" className={styles.image} />
        </div>
      </div>
    </Section>
  );
}
