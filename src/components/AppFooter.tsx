import { useEffect, useState } from 'react';
import { useLenis } from 'lenis/react';
import { LICENSE_NAME, LICENSE_SCOPE, LICENSE_TEXT } from '../lib/license';

const styles = {
  root: 'border-t border-white/5 bg-neutral-950',
  inner:
    'mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 ' +
    'text-[0.7rem] md:flex-row md:text-xs text-neutral-400',
  left: 'flex flex-col md:flex-row md:items-center md:gap-2',
  brand:
    'font-semibold text-neutral-200 transition-colors hover:text-white cursor-pointer text-left',
  techNote: 'text-neutral-500',
  right: 'flex items-center gap-4',
  legacyLink: 'text-xs font-medium text-emerald-400 hover:text-emerald-300',
  topButton: 'text-xs font-medium text-neutral-300 hover:text-white cursor-pointer',
  iconLink:
    'inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 ' +
    'bg-neutral-900/90 hover:border-emerald-400 transition-colors',
  iconImg: 'h-4 w-4 object-contain',
  dialogBackdrop: 'fixed inset-0 z-50 bg-black/75 backdrop-blur-sm',
  dialogPanel:
    'fixed left-1/2 top-1/2 z-50 w-[min(92vw,42rem)] -translate-x-1/2 -translate-y-1/2 ' +
    'rounded-3xl border border-white/10 bg-neutral-950/95 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]',
  dialogHeader: 'flex items-start justify-between gap-4',
  dialogTitle: 'text-base font-semibold text-white',
  dialogClose:
    'rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-neutral-300 ' +
    'transition-colors hover:border-emerald-400 hover:text-white',
  dialogBody: 'mt-5 space-y-4 text-sm text-neutral-300',
  dialogList: 'space-y-2 text-neutral-300',
  dialogCode:
    'max-h-64 overflow-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-xs ' +
    'leading-relaxed text-neutral-300 whitespace-pre-wrap',
} as const;

export function AppFooter() {
  const lenis = useLenis();
  const [isLicenseOpen, setIsLicenseOpen] = useState(false);

  useEffect(() => {
    if (!isLicenseOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLicenseOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLicenseOpen]);

  const handleScrollTop = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.preventDefault();
    lenis?.scrollTo(0, { duration: 0.85 });
  };

  return (
    <footer className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <button
            type="button"
            className={styles.brand}
            onClick={() => setIsLicenseOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={isLicenseOpen}
          >
            Copyright {new Date().getFullYear()} Aaron Cheng
          </button>
          <span className={styles.techNote}>Built with TS-React, Tailwind, Lenis, and Firebase.</span>
        </div>
        <div className={styles.right}>
          <a
            href="https://aaroncheng-legacy.netlify.app"
            target="_blank"
            rel="noreferrer"
            className={styles.legacyLink}
          >
            View legacy site
          </a>

          <button type="button" onClick={handleScrollTop} className={styles.topButton}>
            Back to top
          </button>

          <a
            href="https://www.linkedin.com/in/aaron-cheng-7525a21b7/"
            target="_blank"
            rel="noreferrer"
            className={styles.iconLink}
            aria-label="Open LinkedIn profile in new tab"
          >
            <img
              src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=ffffff"
              alt="LinkedIn"
              className={styles.iconImg}
            />
          </a>

          <a
            href="https://github.com/aaronchenghs"
            target="_blank"
            rel="noreferrer"
            className={styles.iconLink}
            aria-label="Open GitHub profile in new tab"
          >
            <img
              src="https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff"
              alt="GitHub"
              className={styles.iconImg}
            />
          </a>
        </div>
      </div>

      {isLicenseOpen && (
        <>
          <button
            type="button"
            className={styles.dialogBackdrop}
            aria-label="Close license details"
            onClick={() => setIsLicenseOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="license-dialog-title"
            className={styles.dialogPanel}
          >
            <div className={styles.dialogHeader}>
              <div>
                <h2 id="license-dialog-title" className={styles.dialogTitle}>
                  {LICENSE_NAME}
                </h2>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-emerald-300/80">
                  License Details
                </p>
              </div>
              <button
                type="button"
                className={styles.dialogClose}
                onClick={() => setIsLicenseOpen(false)}
              >
                Close
              </button>
            </div>

            <div className={styles.dialogBody}>
              <div className={styles.dialogList}>
                {LICENSE_SCOPE.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>

              <pre className={styles.dialogCode}>{LICENSE_TEXT}</pre>
            </div>
          </div>
        </>
      )}
    </footer>
  );
}
