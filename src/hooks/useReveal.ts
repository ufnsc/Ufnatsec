import { useEffect, useRef, useState } from 'react';

/**
 * Drives the site's scroll-reveal system. Default render (before this
 * effect runs, or if it never runs) is fully visible — only once JS is
 * confirmed alive does an element get armed into its hidden pre-reveal
 * state, so a failed script never hides content.
 */
export function useReveal<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [armed, setArmed] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    setArmed(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px', ...options }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, armed, revealed };
}
