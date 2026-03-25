import { useEffect, useRef } from 'react';
import { LICENSE_NAME, LICENSE_SCOPE, LICENSE_TEXT } from '../../lib/license';

const styles = {
  dialogBackdrop: 'fixed inset-0 z-50 bg-black/75 backdrop-blur-sm',
  dialogPanel:
    'fixed left-1/2 top-1/2 z-50 flex max-h-[85vh] w-[min(92vw,42rem)] -translate-x-1/2 ' +
    '-translate-y-1/2 flex-col overflow-y-auto overscroll-contain rounded-3xl border border-white/10 ' +
    'bg-neutral-950/95 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]',
  dialogHeader: 'flex items-start justify-between gap-4',
  dialogTitle: 'text-base font-semibold text-white',
  dialogClose:
    'rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-neutral-300 ' +
    'transition-colors hover:border-emerald-400 hover:text-white',
  dialogBody: 'mt-5 space-y-4 pr-1 text-sm text-neutral-300',
  dialogList: 'space-y-2 text-neutral-300',
  dialogCode:
    'rounded-2xl border border-white/10 bg-black/30 p-4 text-xs leading-relaxed ' +
    'text-neutral-300 whitespace-pre-wrap',
} as const;

type LicenseModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function LicenseModal({ isOpen, onClose }: LicenseModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(
    function handleAttachingModalEvents() {
      if (!isOpen) return;

      const previousBodyOverflow = document.body.style.overflow;
      const previousHtmlOverflow = document.documentElement.style.overflow;

      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.requestAnimationFrame(() => {
        panelRef.current?.focus();
      });

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') onClose();
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = previousBodyOverflow;
        document.documentElement.style.overflow = previousHtmlOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    },
    [isOpen, onClose],
  );

  if (!isOpen) return null;

  return (
    <>
      <button
        type="button"
        className={styles.dialogBackdrop}
        aria-label="Close license details"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="license-dialog-title"
        className={styles.dialogPanel}
        data-lenis-prevent-wheel
        tabIndex={-1}
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
          <button type="button" className={styles.dialogClose} onClick={onClose}>
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
  );
}
