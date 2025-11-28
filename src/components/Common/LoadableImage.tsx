import { useState } from 'react';

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const styles = {
  root: 'relative h-full w-full',
  spinnerWrapper: 'absolute inset-0 flex items-center justify-center',
  spinner:
    'h-8 w-8 rounded-full border-2 border-neutral-700 border-t-emerald-400 animate-spin',
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
      {!loaded && !error && (
        <div className={styles.spinnerWrapper}>
          <div className={styles.spinner} />
        </div>
      )}

      {!error && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`${styles.imgBase} ${imgOpacityClass}${
            className ? ` ${className}` : ''
          }`}
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
