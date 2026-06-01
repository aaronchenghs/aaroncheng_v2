import { useState } from 'react';
import { useLenis } from 'lenis/react';
import { LicenseModal } from './Common/LicenseModal';

const STYLES = {
  root: 'border-t border-white/5 bg-neutral-950',
  inner:
    'mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 ' +
    'text-[0.7rem] md:flex-row md:text-xs text-neutral-400',
  left: 'flex flex-col md:flex-row md:items-center md:gap-2',
  brand:
    'font-semibold text-neutral-200 transition-colors hover:text-white cursor-pointer text-left',
  techNote: 'text-neutral-400',
  right: 'flex items-center gap-4',
  legacyLink: 'text-xs font-medium text-emerald-400 hover:text-emerald-300',
  topButton: 'text-xs font-medium text-neutral-300 hover:text-white cursor-pointer',
  iconLink:
    'inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 ' +
    'bg-neutral-900/90 hover:border-emerald-400 transition-colors',
  iconImg: 'h-4 w-4 object-contain',
} as const;

export function AppFooter() {
  const lenis = useLenis();
  const [isLicenseOpen, setIsLicenseOpen] = useState<boolean>(false);

  const handleScrollTop = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.preventDefault();
    lenis?.scrollTo(0, { duration: 0.85 });
  };

  return (
    <footer className={STYLES.root}>
      <div className={STYLES.inner}>
        <div className={STYLES.left}>
          <button
            type="button"
            className={STYLES.brand}
            onClick={() => setIsLicenseOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={isLicenseOpen}
          >
            Copyright {new Date().getFullYear()} Aaron Cheng
          </button>
          <span className={STYLES.techNote}>
            Built with TS-React, Tailwind, Lenis, and Firebase.
          </span>
        </div>
        <div className={STYLES.right}>
          <a
            href="https://aaroncheng-legacy.netlify.app"
            target="_blank"
            rel="noreferrer"
            className={STYLES.legacyLink}
          >
            View legacy site
          </a>

          <button type="button" onClick={handleScrollTop} className={STYLES.topButton}>
            Back to top
          </button>

          <a
            href="https://www.linkedin.com/in/aaron-cheng-7525a21b7/"
            target="_blank"
            rel="noreferrer"
            className={STYLES.iconLink}
            aria-label="Open LinkedIn profile in new tab"
          >
            <img
              src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=ffffff"
              alt="LinkedIn"
              className={STYLES.iconImg}
            />
          </a>

          <a
            href="https://github.com/aaronchenghs"
            target="_blank"
            rel="noreferrer"
            className={STYLES.iconLink}
            aria-label="Open GitHub profile in new tab"
          >
            <img
              src="https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff"
              alt="GitHub"
              className={STYLES.iconImg}
            />
          </a>
        </div>
      </div>

      <LicenseModal isOpen={isLicenseOpen} onClose={() => setIsLicenseOpen(false)} />
    </footer>
  );
}
