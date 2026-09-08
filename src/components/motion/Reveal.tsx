import type { CSSProperties, ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Reveal delay in ms, e.g. for staggering a list of siblings. */
  delay?: number;
  /**
   * "scan" (default): accent scanline sweeps over a fade+rise reveal.
   * "line": for hairline dividers — draws left to right, no scanline.
   * "fade": quiet fade+rise only, no scanline (denser blocks of content).
   */
  variant?: 'scan' | 'line' | 'fade';
}

export function Reveal({ children, className = '', style, delay = 0, variant = 'scan' }: RevealProps) {
  const { ref, armed, revealed } = useReveal<HTMLDivElement>();

  const classes = [
    'tac-reveal',
    variant === 'line' ? 'tac-reveal-line' : '',
    variant === 'fade' ? 'tac-reveal-fade' : '',
    armed ? 'is-armed' : '',
    revealed ? 'is-in-view' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={classes} style={style}>
      <div className="tac-reveal-body" style={{ transitionDelay: `${delay}ms`, animationDelay: `${delay}ms` }}>
        {children}
      </div>
    </div>
  );
}
