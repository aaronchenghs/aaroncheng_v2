import { CONTACT_INFOS } from '../../assets/contacts';
import { Section } from './Section';

const styles = {
  list: 'space-y-5 w-full max-w-2xl md:max-w-3xl mx-auto',
  item:
    'relative flex items-center gap-4 md:gap-6 justify-between md:justify-center ' +
    'rounded-2xl border border-white/10 bg-neutral-900/70 p-5',
  iconWrapper:
    'flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800/80 flex-shrink-0 ' +
    'md:absolute md:left-5 md:top-1/2 md:-translate-y-1/2',
  iconImg: 'h-6 w-6 object-contain',
  content: 'flex-1 text-left md:text-center md:px-14',
  title: 'text-sm font-semibold text-white',
  desc: 'mt-1 text-xs text-neutral-300',
  link: 'mt-2 inline-block text-sm text-emerald-400 hover:underline break-all',
} as const;

export function ContactSection() {
  return (
    <Section
      id="contact"
      label="Contact"
      title="Get in Touch"
      kicker="Questions, collaborations or just a say hi!"
    >
      <ul className={styles.list}>
        {CONTACT_INFOS.map((method) => (
          <li key={method.name} className={styles.item}>
            <a href={method.link} className={styles.iconWrapper} target="_blank" rel="noreferrer">
              <img src={method.path} alt={method.name} className={styles.iconImg} />
            </a>

            <div className={styles.content}>
              <div className={styles.title}>{method.name}</div>
              <p className={styles.desc}>{method.description}</p>
              <a href={method.link} className={styles.link} target="_blank" rel="noreferrer">
                {method.tag}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
