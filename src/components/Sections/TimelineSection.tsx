import { TIMELINE_ENTRIES } from '../../assets/timelineEntries';
import { cn } from '../../lib/cn';
import { SECTION_SELECTORS } from '../../lib/sectionSelectors';
import { Section } from './Section';

const STYLES = {
  wrapper: 'relative mx-auto w-full max-w-5xl',
  list: 'space-y-8 border-l border-white/10 pl-6',
  item:
    'relative group rounded-xl -ml-[2px] px-3 py-2 transition ' +
    'hover:bg-neutral-900/60 hover:shadow-lg hover:shadow-black/40',
  bullet:
    'absolute -left-[9px] mt-1 h-4 w-4 rounded-full border-2 border-emerald-400 bg-neutral-950 ' +
    'shadow-[0_0_0_4px_rgba(16,185,129,0.25)] transition-transform transition-shadow duration-200 ' +
    'group-hover:scale-110 group-hover:shadow-[0_0_0_6px_rgba(16,185,129,0.35)]',
  headerRow: 'flex flex-wrap items-center gap-2 pl-2',
  period:
    'text-[0.7rem] font-mono uppercase tracking-[0.15em] text-neutral-400 ' +
    'transition-colors duration-200 group-hover:text-neutral-200',
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
    'text-sm font-semibold text-white transition-colors duration-200 ' +
    'group-hover:text-emerald-100',
  orgRow: 'flex flex-wrap items-center gap-2 text-[0.8rem] text-neutral-400',
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
      <div className={STYLES.wrapper}>
        <ol className={STYLES.list}>
          {TIMELINE_ENTRIES.map((item) => (
            <li key={item.id} className={STYLES.item}>
              <div className={STYLES.bullet} />
              <div>
                <div className={STYLES.headerRow}>
                  <span className={cn(STYLES.typeBadgeBase, STYLES.typeBadgeByType[item.type])}>
                    {item.type}
                  </span>

                  <span className={STYLES.period}>{item.period}</span>

                  {item.icon && (
                    <span className={STYLES.iconWrapper}>
                      <img src={item.icon} alt={`${item.org} icon`} className={STYLES.iconImg} />
                    </span>
                  )}
                </div>

                <h3 className={STYLES.title}>{item.title}</h3>

                <div className={STYLES.orgRow}>
                  <span className={STYLES.org}>{item.org}</span>
                  {item.location && (
                    <>
                      <span className={STYLES.dot}>•</span>
                      <span className={STYLES.location}>{item.location}</span>
                    </>
                  )}
                </div>

                <p className={STYLES.description}>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
