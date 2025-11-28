import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const styles = {
  root: 'scroll-mt-24 py-16 border-b border-white/5 last:border-b-0', // you already had similar
  inner: 'space-y-8',
  header: 'flex flex-col items-center justify-center space-y-3',
  label:
    'inline-flex items-center rounded-full border border-white/10 bg-black/40 px-3 py-1 ' +
    'text-[0.65rem] font-medium uppercase tracking-[0.2em] text-neutral-300/80 backdrop-blur',
  title: 'text-2xl md:text-3xl font-semibold tracking-tight text-white',
  kicker: 'text-sm text-neutral-400 max-w-xl text-center',
  body: 'text-sm md:text-[0.95rem] leading-relaxed text-neutral-300',
} as const;

type SectionProps = {
  id: string;
  label?: string;
  title: string;
  kicker?: string;
  children: ReactNode;
};

export function Section({ id, label, title, kicker, children }: SectionProps) {
  const reduceMotion = useReducedMotion();

  const motionProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: {
          once: true,
          amount: 0.1,
          margin: '-10% 0px 0px 0px',
        },
        transition: { duration: 0.8 },
      };

  return (
    <motion.section id={id} className={styles.root} {...motionProps}>
      <div className={styles.inner}>
        <header className={styles.header}>
          {label && <span className={styles.label}>{label}</span>}
          <h2 className={styles.title}>{title}</h2>
          {kicker && <p className={styles.kicker}>{kicker}</p>}
        </header>

        <div className={styles.body}>{children}</div>
      </div>
    </motion.section>
  );
}
