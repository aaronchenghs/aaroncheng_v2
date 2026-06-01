const STYLES = {
  root:
    'group relative isolate inline-flex items-center gap-3 overflow-hidden rounded-md border ' +
    'border-white/10 border-l-2 border-l-emerald-300 bg-neutral-950/80 px-4 py-3 text-left ' +
    'shadow-[8px_8px_0_rgba(16,185,129,0.10)] transition duration-200 ' +
    'before:absolute before:right-0 before:top-0 before:border-b-[14px] before:border-l-[14px] ' +
    'before:border-b-emerald-300/35 before:border-l-transparent before:content-[""] ' +
    'hover:-translate-y-[2px] hover:border-white/20 hover:border-l-emerald-200 ' +
    'hover:bg-neutral-900/90 hover:shadow-[10px_10px_0_rgba(16,185,129,0.18)] ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ' +
    'focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950',
  badge:
    'grid h-9 w-9 place-items-center rounded bg-emerald-300 text-[0.62rem] font-black ' +
    'leading-none tracking-normal text-neutral-950 shadow-[0_0_18px_rgba(52,211,153,0.65)] ' +
    'transition group-hover:bg-emerald-200',
  copy: 'flex flex-col gap-0.5',
  label: 'text-xs font-semibold uppercase tracking-[0.14em] text-emerald-100',
  meta: 'text-[0.68rem] normal-case tracking-normal text-neutral-400',
} as const;

const RESUME_DOWNLOAD_PATH = '/AaronCheng_Resume2026.pdf';
const RESUME_FILE_NAME = 'AaronCheng_Resume2026.pdf';

export function ResumeDownloadLink() {
  return (
    <a href={RESUME_DOWNLOAD_PATH} download className={STYLES.root}>
      <span className={STYLES.badge}>PDF</span>
      <span className={STYLES.copy}>
        <span className={STYLES.label}>Download Resume</span>
        <span className={STYLES.meta}>{RESUME_FILE_NAME}</span>
      </span>
    </a>
  );
}
