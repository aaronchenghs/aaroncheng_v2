import { useState } from 'react';
import { LoadingPlaceholder } from './LoadingPlaceholder';
import { cn } from '../../lib/cn';

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const styles = {
  root: 'relative h-full w-full overflow-hidden bg-neutral-900/50',
  imgBase: 'transition-opacity duration-500',
  imgHidden: 'opacity-0',
  imgVisible: 'opacity-100',
  errorWrapper:
    'flex h-full w-full items-center justify-center text-xs text-neutral-500',
} as const;

export function LoadableImage({ src, alt, className }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const imgOpacityClass = loaded ? styles.imgVisible : styles.imgHidden;

  return (
    <div className={styles.root}>
      {!loaded && !error && <LoadingPlaceholder />}

      {!error && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={cn(styles.imgBase, imgOpacityClass, className)}
        />
      )}

      {error && (
        <div className={styles.errorWrapper}>
          Image failed to load
        </div>
      )}
    </div>
  );
}
