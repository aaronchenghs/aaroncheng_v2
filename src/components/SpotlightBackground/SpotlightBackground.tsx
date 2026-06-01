import './spotlightBackground.scss';

const STYLES = {
  root: 'pointer-events-none fixed inset-0 -z-10',
  layer: 'absolute inset-0 spotlight-bg',
} as const;

export function SpotlightBackground() {
  return (
    <div className={STYLES.root}>
      <div className={STYLES.layer} />
    </div>
  );
}
