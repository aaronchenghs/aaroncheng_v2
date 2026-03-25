import type { CSSProperties, ReactNode } from 'react';

const styles = {
  root: 'scroll-mt-24 py-16 border-b border-white/5 last:border-b-0',
  inner: 'space-y-8',
  header: 'flex flex-col items-center justify-center space-y-3',
  label:
    'inline-flex items-center rounded-full border border-white/10 bg-black/40 px-3 py-1 ' +
    'text-[0.65rem] font-medium uppercase tracking-[0.2em] text-neutral-300/80 backdrop-blur',
  title: 'text-2xl md:text-3xl font-semibold tracking-tight text-white',
  kicker: 'text-sm text-neutral-400 max-w-xl text-center',
  body: 'text-sm md:text-[0.95rem] leading-relaxed text-neutral-300',
} as const;

const sectionStyle: CSSProperties = {
  contentVisibility: 'auto',
  containIntrinsicSize: '1px 900px',
};

type SectionProps = {
  id: string;
  label?: string;
  title: string;
  titleAs?: 'h1' | 'h2';
  kicker?: string;
  children: ReactNode;
};

export function Section({ id, label, title, titleAs = 'h2', kicker, children }: SectionProps) {
  const TitleTag = titleAs;

  return (
    <section id={id} className={styles.root} style={sectionStyle}>
      <div className={styles.inner}>
        <header className={styles.header}>
          {label && <span className={styles.label}>{label}</span>}
          <TitleTag className={styles.title}>{title}</TitleTag>
          {kicker && <p className={styles.kicker}>{kicker}</p>}
        </header>

        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
}
