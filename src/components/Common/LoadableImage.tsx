import { useState } from 'react';
import { LoadingPlaceholder } from './LoadingPlaceholder';
import { cn } from '../../lib/cn';

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const STYLES = {
  root: 'relative h-full w-full overflow-hidden bg-neutral-900/50',
  imgBase: 'transition-opacity duration-500',
  imgHidden: 'opacity-0',
  imgVisible: 'opacity-100',
  errorWrapper: 'flex h-full w-full items-center justify-center text-xs text-neutral-400',
} as const;

export function LoadableImage({ src, alt, className }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const imgOpacityClass = isLoaded ? STYLES.imgVisible : STYLES.imgHidden;

  return (
    <div className={STYLES.root}>
      {!isLoaded && !hasError && <LoadingPlaceholder />}

      {!hasError && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(STYLES.imgBase, imgOpacityClass, className)}
        />
      )}

      {hasError && <div className={STYLES.errorWrapper}>Image failed to load</div>}
    </div>
  );
}
