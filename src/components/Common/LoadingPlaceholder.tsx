const styles = {
  root: 'absolute inset-0',
  backdrop: 'absolute inset-0 bg-neutral-900/70',
  spinnerWrapper: 'absolute inset-0 z-10 flex items-center justify-center',
  spinner:
    'h-8 w-8 rounded-full border-2 border-neutral-700 border-t-emerald-400 animate-spin',
} as const;

export function LoadingPlaceholder() {
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={styles.backdrop} />
      <div className={styles.spinnerWrapper}>
        <div className={styles.spinner} />
      </div>
    </div>
  );
}
