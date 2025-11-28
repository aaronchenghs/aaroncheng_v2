import './spotlightBackground.css';

const styles = {
  root: 'pointer-events-none fixed inset-0 -z-10',
  layer: 'absolute inset-0 spotlight-bg',
} as const;

export function SpotlightBackground() {
  return (
    <div className={styles.root}>
      <div className={styles.layer} />
    </div>
  );
}
