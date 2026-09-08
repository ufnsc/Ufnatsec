import { createElement, Fragment, type CSSProperties } from 'react';
import { useReveal } from '../../hooks/useReveal';

interface RevealHeadingProps {
  /** One entry per visual line; each line's words stagger in sequence. */
  lines: string[];
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div';
  className?: string;
  style?: CSSProperties;
  /** Delay in ms before the first word starts. */
  startDelay?: number;
  /** Per-word stagger step in ms, capped so long headings don't crawl. */
  stepMs?: number;
  maxDelayMs?: number;
}

export function RevealHeading({
  lines,
  as = 'div',
  className,
  style,
  startDelay = 0,
  stepMs = 45,
  maxDelayMs = 420,
}: RevealHeadingProps) {
  const { ref, armed, revealed } = useReveal<HTMLElement>();

  let wordIndex = 0;

  const content = lines.map((line, lineIndex) => {
    const words = line.split(' ');
    return createElement(
      'span',
      { key: lineIndex, style: { display: 'block' } },
      words.map((word, wordInLine) => {
        const delay = startDelay + Math.min(wordIndex * stepMs, maxDelayMs);
        wordIndex += 1;
        const wordClasses = ['tac-reveal-word', armed ? 'is-armed' : '', revealed ? 'is-in-view' : '']
          .filter(Boolean)
          .join(' ');
        return createElement(
          Fragment,
          { key: wordInLine },
          createElement(
            'span',
            { className: 'tac-reveal-word-mask' },
            createElement('span', { className: wordClasses, style: { transitionDelay: `${delay}ms` } }, word)
          ),
          wordInLine < words.length - 1 ? ' ' : null
        );
      })
    );
  });

  return createElement(as, { ref, className, style }, content);
}
