import { ReactLenis } from 'lenis/react';
import type { ReactNode } from 'react';
import { AppHeader } from './components/AppHeader';

const styles = {
  root: 'min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-50',
  main: 'mx-auto max-w-5xl px-4',
} as const;

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.15,
        smoothWheel: true,
      }}
    >
      <div className={styles.root}>
        <AppHeader />
        <main className={styles.main}>{children}</main>
      </div>
    </ReactLenis>
  );
}
