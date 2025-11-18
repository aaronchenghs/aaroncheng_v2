import { Section } from './Section';

const contactMethods = [
  {
    label: 'Email',
    description: 'I’m always checking my inbox. Expect a reply within a day.',
    detail: {
      text: 'aaronchengj@gmail.com',
      href: 'mailto:aaronchengj@gmail.com',
    },
  },
  {
    label: 'Phone',
    description: 'For quick replies, shoot me a text and I’ll respond within an hour.',
    detail: {
      text: '+1 (225) 964‑4030',
      href: 'tel:+12259644030',
    },
  },
  {
    label: 'WhatsApp',
    description: 'You can also reach me on WahtsApp!',
    detail: {
      text: '+1 (225) 964‑4030',
      href: 'https://wa.me/12259644030',
    },
  },
  {
    label: 'LinkedIn',
    description: 'Connect professionally or just say hi over on LinkedIn.',
    detail: {
      text: 'Aaron (Raphael) Cheng',
      href: 'https://www.linkedin.com/in/your-handle',
    },
  },
  {
    label: 'GitHub',
    description: 'See what I’m building.',
    detail: {
      text: 'aaronchenghs',
      href: 'https://github.com/aaronchenghs',
    },
  },
];

const styles = {
  list: 'space-y-5',
  item: 'rounded-2xl border border-white/10 bg-neutral-900/70 p-4',
  title: 'text-sm font-semibold text-white',
  desc: 'mt-1 text-xs text-neutral-300',
  link: 'mt-2 inline-block text-sm text-emerald-400 hover:underline',
} as const;

export function ContactSection() {
  return (
    <Section
      id="contact"
      label="Contact"
      title="Get in Touch"
      kicker="Questions, collaborations or just a friendly hello"
    >
      <ul className={styles.list}>
        {contactMethods.map((method) => (
          <li key={method.label} className={styles.item}>
            <div className={styles.title}>{method.label}</div>
            <p className={styles.desc}>{method.description}</p>
            <a href={method.detail.href} className={styles.link}>
              {method.detail.text}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
