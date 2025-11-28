import { TIMELINE_ENTRIES } from '../../assets/timelineEntries';
import { COLORS } from '../../lib/colors';
import { SECTION_SELECTORS } from '../../lib/sectionSelectors';
import { Section } from './Section';

const styles = {
  wrapper: 'relative mx-auto w-full max-w-5xl',
  list: 'space-y-8 border-l border-white/10 pl-6',
  item:
    'relative group rounded-xl -ml-[2px] px-3 py-2 transition ' +
    'hover:bg-neutral-900/60 hover:shadow-lg hover:shadow-black/40',
  bullet:
    'absolute -left-[9px] mt-1 h-4 w-4 rounded-full border-2 border-emerald-400 bg-neutral-950 ' +
    'shadow-[0_0_0_4px_rgba(16,185,129,0.25)] transition-transform transition-shadow duration-200 ' +
    `group-hover:scale-110 group-hover:shadow-[0_0_0_6px_${COLORS.FOREST}]`,
  headerRow: 'flex flex-wrap items-center gap-2',
  period:
    'text-[0.7rem] pl-4 font-mono uppercase tracking-[0.15em] text-neutral-400 ' +
    'bg-neutral-900/70 px-2 py-1 rounded-full transition-colors duration-200 ' +
    'group-hover:text-neutral-200 group-hover:bg-neutral-800/80',
  typeBadgeBase:
    'text-[0.65rem] uppercase tracking-[0.16em] rounded-full px-2 py-[2px] border ' +
    'transition-colors duration-200',
  typeBadgeByType: {
    Education: 'border-indigo-400/60 bg-indigo-500/10 text-indigo-200 group-hover:bg-indigo-500/20',
    Internship: 'border-amber-400/60 bg-amber-500/10 text-amber-200 group-hover:bg-amber-500/20',
    Career:
      'border-emerald-400/60 bg-emerald-500/10 text-emerald-200 group-hover:bg-emerald-500/20',
  },
  iconWrapper:
    'ml-auto flex h-7 w-7 items-center justify-center rounded-full border border-white/15 ' +
    'bg-neutral-900/80 transition-transform transition-colors duration-200 ' +
    'group-hover:scale-110 group-hover:border-emerald-400',
  iconImg: 'h-4 w-4 object-contain',
  title:
    'mt-2 text-sm font-semibold text-white transition-colors duration-200 ' +
    'group-hover:text-emerald-100',
  orgRow: 'mt-1 flex flex-wrap items-center gap-2 text-[0.8rem] text-neutral-400',
  org: 'font-medium',
  dot: 'mx-1 text-neutral-600',
  location: 'text-neutral-500',
  description:
    'mt-2 text-xs text-neutral-300 leading-relaxed transition-colors duration-200 ' +
    'group-hover:text-neutral-200',
} as const;

export function TimelineSection() {
  return (
    <Section
      id={SECTION_SELECTORS.TIMELINE}
      label="Timeline"
      title="My Timeline"
      kicker="What's led me to today"
    >
      <div className={styles.wrapper}>
        <ol className={styles.list}>
          {TIMELINE_ENTRIES.map((item) => (
            <li key={item.id} className={styles.item}>
              <div className={styles.bullet} />
              <div>
                <div className={styles.headerRow}>
                  <span className={styles.period}>{item.period}</span>

                  <span className={`${styles.typeBadgeBase} ${styles.typeBadgeByType[item.type]}`}>
                    {item.type}
                  </span>

                  {item.icon && (
                    <span className={styles.iconWrapper}>
                      <img src={item.icon} alt={`${item.org} icon`} className={styles.iconImg} />
                    </span>
                  )}
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
