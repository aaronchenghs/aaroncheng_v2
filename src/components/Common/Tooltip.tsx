import type { ReactNode } from 'react';

import { cn } from '../../lib/cn';

type TooltipProps = {
  content: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

const styles = {
  root: 'group/tooltip relative inline-flex',
  trigger: 'inline-flex',
  content:
    'pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 translate-y-1 ' +
    'whitespace-nowrap rounded-md border border-emerald-300/30 bg-neutral-950/95 px-2 py-1 ' +
    'text-[0.65rem] font-medium uppercase tracking-[0.12em] text-emerald-100 opacity-0 ' +
    'shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition duration-150 ' +
    'group-hover/tooltip:translate-y-0 group-hover/tooltip:opacity-100 ' +
    'group-focus-within/tooltip:translate-y-0 group-focus-within/tooltip:opacity-100',
} as const;

export function Tooltip({ content, children, className, contentClassName }: TooltipProps) {
  return (
    <span className={cn(styles.root, className)} title={content}>
      <span className={styles.trigger}>{children}</span>
      <span role="tooltip" className={cn(styles.content, contentClassName)}>
        {content}
      </span>
    </span>
  );
}
