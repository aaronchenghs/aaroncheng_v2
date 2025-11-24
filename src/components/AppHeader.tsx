import { useState } from 'react';
import { useLenis } from 'lenis/react';
import { HEADER_KAOMOJIS } from '../assets/emotes';
import { SECTION_SELECTORS } from '../lib/sectionSelectors';

const styles = {
  root: 'sticky top-0 z-30 border-b border-white/5 bg-neutral-950/70 backdrop-blur',
  nav: 'mx-auto flex max-w-8xl items-center justify-between px-4 py-3 select-none',
  brandButton:
    'text-sm font-semibold tracking-[0.25em] uppercase text-neutral-400 hover:text-white cursor-pointer select-none',
  navContainer: 'flex gap-4',
  navLink: 'text-xs font-medium text-neutral-300 transition-colors hover:text-white',
} as const;

export function AppHeader() {
  const lenis = useLenis();
  const [kaomojiIndex, setKaomojiIndex] = useState(0);

  const scrollToSection = (selector: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    lenis?.scrollTo(selector, { duration: 1 });
  };

  const handleKaomojiIncrement = () => {
    setKaomojiIndex((prev) => (prev + 1) % HEADER_KAOMOJIS.length);
    lenis?.scrollTo(0, { duration: 1.5 });
  };

  return (
    <header className={styles.root}>
      <nav className={styles.nav}>
        <button type="button" onClick={handleKaomojiIncrement} className={styles.brandButton}>
          Aaron Cheng {HEADER_KAOMOJIS[kaomojiIndex]}
        </button>

        <div className={styles.navContainer}>
          <a
            href={`#${SECTION_SELECTORS.PORTFOLIO}`}
            className={styles.navLink}
            onClick={scrollToSection(`#${SECTION_SELECTORS.PORTFOLIO}`)}
          >
            Portfolio
          </a>
          <a
            href={`#${SECTION_SELECTORS.TIMELINE}`}
            className={styles.navLink}
            onClick={scrollToSection(`#${SECTION_SELECTORS.TIMELINE}`)}
          >
            Timeline
          </a>
          <a
            href={`#${SECTION_SELECTORS.CONTACT}`}
            className={styles.navLink}
            onClick={scrollToSection(`#${SECTION_SELECTORS.CONTACT}`)}
          >
            Contact
          </a>
          <a
            href={`#${SECTION_SELECTORS.MESSAGE_BOARD}`}
            className={styles.navLink}
            onClick={scrollToSection(`#${SECTION_SELECTORS.MESSAGE_BOARD}`)}
          >
            Message Board
          </a>
        </div>
      </nav>
    </header>
  );
}
