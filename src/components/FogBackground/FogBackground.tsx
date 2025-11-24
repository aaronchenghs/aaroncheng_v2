import './fogBackground.css';

const styles = {
  root: 'pointer-events-none fixed inset-0 -z-10 overflow-hidden ' + 'bg-neutral-950',
  layer: 'absolute inset-[-20%] opacity-30 mix-blend-screen',
} as const;

export function FogBackground() {
  return (
    <div className={styles.root}>
      <div className={`${styles.layer} fog-layer-1`} />
      <div className={`${styles.layer} fog-layer-2`} />
    </div>
  );
}
