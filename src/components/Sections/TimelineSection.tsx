import { TIMELINE_ENTRIES } from '../../assets/timelineEntries';
import { Section } from './Section';

const styles = {
  wrapper: 'relative mx-auto w-full max-w-3xl',
  list: 'space-y-8 border-l border-white/10 pl-6',
  item: 'relative',
  bullet:
    'absolute -left-[9px] mt-1 h-4 w-4 rounded-full border-2 border-emerald-400 bg-neutral-950 ' +
    'shadow-[0_0_0_4px_rgba(16,185,129,0.25)]',
  headerRow: 'flex flex-wrap items-baseline gap-2',
  period:
    'text-[0.7rem] pl-4 font-mono uppercase tracking-[0.15em] text-neutral-400 ' +
    'bg-neutral-900/70 px-2 py-1 rounded-full',
  typeBadge:
    'text-[0.65rem] uppercase tracking-[0.16em] rounded-full border border-emerald-500/40 ' +
    'bg-emerald-500/10 px-2 py-[2px] text-emerald-300',
  title: 'mt-2 text-sm font-semibold text-white',
  orgRow: 'mt-1 flex flex-wrap items-center gap-2 text-[0.8rem] text-neutral-400',
  org: 'font-medium',
  dot: 'mx-1 text-neutral-600',
  location: 'text-neutral-500',
  description: 'mt-2 text-xs text-neutral-300 leading-relaxed',
} as const;

export function TimelineSection() {
  return (
    <Section id="timeline" label="Timeline" title="My Timeline" kicker="What's led me up to today">
      <div className={styles.wrapper}>
        <ol className={styles.list}>
          {TIMELINE_ENTRIES.map((item) => (
            <li key={item.id} className={styles.item}>
              <div className={styles.bullet} />

              <div>
                <div className={styles.headerRow}>
                  <span className={styles.period}>{item.period}</span>
                  <span className={styles.typeBadge}>{item.type}</span>
                </div>

                <h3 className={styles.title}>{item.title}</h3>

                <div className={styles.orgRow}>
                  <span className={styles.org}>{item.org}</span>
                  {item.location && (
                    <>
                      <span className={styles.dot}>•</span>
                      <span className={styles.location}>{item.location}</span>
                    </>
                  )}
                </div>

                <p className={styles.description}>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
