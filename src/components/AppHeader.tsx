export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-neutral-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <span className="text-sm font-semibold tracking-[0.25em] uppercase text-neutral-400">
          Aaron Cheng
        </span>
        <div className="flex gap-4 text-xs font-medium text-neutral-300">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
