import { ReactLenis } from 'lenis/react';
import type { ReactNode } from 'react';
import { AppHeader } from './components/AppHeader';
import { AppFooter } from './components/AppFooter';
import { SpotlightBackground } from './components/SpotlightBackground/SpotlightBackground';

const styles = {
  root: 'relative min-h-screen text-neutral-50',
  main: 'mx-auto max-w-6xl px-4',
} as const;

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12,
        smoothWheel: true,
        syncTouch: true,
      }}
    >
      <SpotlightBackground />
      <div className={styles.root}>
        <AppHeader />
        <main className={styles.main}>{children}</main>
        <AppFooter />
      </div>
    </ReactLenis>
  );
}
