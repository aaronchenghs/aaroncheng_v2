import { ReactLenis } from 'lenis/react';
import type { ReactNode } from 'react';
import { AppHeader } from './components/AppHeader';
import { FogBackground } from './components/FogBackground/FogBackground';
import { AppFooter } from './components/AppFooter';

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
        lerp: 0.15,
        smoothWheel: true,
      }}
    >
      <FogBackground />
      <div className={styles.root}>
        <AppHeader />
        <main className={styles.main}>{children}</main>
        <AppFooter />
      </div>
    </ReactLenis>
  );
}
