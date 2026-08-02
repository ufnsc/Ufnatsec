import { useEffect, useRef, useState } from 'react';
import img1 from '../../images/IMG_1491.JPG';
import img2 from '../../images/IMG_5213.JPG';
import img3 from '../../images/IMG_5434.JPG';
import img4 from '../../images/IMG_8346.JPG';
import img5 from '../../images/IMG_8647.JPG';
import img6 from '../../images/IMG_9391.JPG';

const events = [
  {
    src: img1,
    caption: 'BMNT Networking Event',
    description:
      'A networking event connecting NSC with the Common Mission Project and organizations across national security, government, and private industry.',
  },
  {
    src: img3,
    caption: 'Kickoff Panelists',
    description:
      'Introducing our Kickoff Event panelists, a multidisciplinary group of professionals who shared their experiences and perspectives in national security.',
  },
  {
    src: img4,
    caption: 'Speaker Event',
    description:
      'A speaker event featuring R. Lee Dale, a retired Information Operations (IO) officer, sharing insights from his career in the intelligence community.',
  },
  {
    src: img6,
    caption: 'Iran Conflict Panel',
    description: 'A speaker panel discussion on the Iran conflict and its implications for national security.',
  },
  {
    src: img5,
    caption: 'Workshop Session',
    description: 'A hands-on workshop where members build practical skills together.',
  },
  {
    src: img2,
    caption: 'Club Kickoff Event',
    description: 'Our first meeting of the club, kicking off a new semester of NSC.',
  },
];

const doubled = [...events, ...events];

const maskImage = [
  'linear-gradient(to right,',
  '  transparent 0%,',
  '  rgba(0,0,0,0.2) 4%,',
  '  rgba(0,0,0,0.6) 10%,',
  '  black 18%,',
  '  black 82%,',
  '  rgba(0,0,0,0.6) 90%,',
  '  rgba(0,0,0,0.2) 96%,',
  '  transparent 100%',
  ')',
].join('');

const SPEED_PX_PER_SEC = 40;

export function Events() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [loopWidth, setLoopWidth] = useState(0);
  const [position, setPosition] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pinnedIndex, setPinnedIndex] = useState<number | null>(null);

  const positionRef = useRef(0);
  const loopWidthRef = useRef(0);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);

  useEffect(() => {
    pausedRef.current = hoveredIndex !== null || pinnedIndex !== null;
  }, [hoveredIndex, pinnedIndex]);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        const w = trackRef.current.scrollWidth / 2;
        loopWidthRef.current = w;
        setLoopWidth(w);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    let raf: number;
    let lastTs: number | null = null;

    const tick = (ts: number) => {
      if (lastTs === null) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      if (!pausedRef.current && !draggingRef.current && loopWidthRef.current > 0) {
        let next = positionRef.current + SPEED_PX_PER_SEC * dt;
        if (next >= loopWidthRef.current) next -= loopWidthRef.current;
        positionRef.current = next;
        setPosition(next);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleScrub = (value: number) => {
    positionRef.current = value;
    setPosition(value);
  };

  return (
    <section style={{ backgroundColor: 'var(--tac-navy)' }} className="py-16 md:py-24 relative z-10 tac-grid-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ marginBottom: '3rem' }}>
          <div className="tac-eyebrow mb-4">
            <span className="tac-bracket">[</span> EVENTS <span className="tac-bracket">]</span>
          </div>
          <div className="tac-divider" />
        </div>
      </div>

      <div style={{ WebkitMaskImage: maskImage, maskImage, overflow: 'hidden' }}>
        <div
          ref={trackRef}
          className="carousel-track"
          style={{ animation: 'none', transform: `translateX(-${position}px)` }}
        >
          {doubled.map((event, i) => {
            const isOpen = hoveredIndex === i || pinnedIndex === i;
            return (
              <div
                key={i}
                className="carousel-item"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex((current) => (current === i ? null : current))}
                onClick={() => setPinnedIndex((current) => (current === i ? null : i))}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={event.src}
                  alt={event.caption}
                  loading="lazy"
                  className="carousel-img"
                  style={{
                    display: 'block',
                    borderRadius: 0,
                    boxShadow: 'none',
                    border: '1px solid var(--tac-line)',
                    filter: 'grayscale(0.35) contrast(1.05)',
                  }}
                />
                <div className="tac-carousel-overlay" style={{ opacity: isOpen ? 1 : 0 }}>
                  <span
                    className="tac-mono"
                    style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--tac-accent)',
                      marginBottom: '0.6rem',
                    }}
                  >
                    {event.caption}
                  </span>
                  <span className="tac-sans" style={{ fontSize: '0.85rem', lineHeight: 1.55, color: 'var(--tac-text)' }}>
                    {event.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8" style={{ marginTop: '1.75rem' }}>
        <input
          type="range"
          className="tac-scrubber"
          min={0}
          max={loopWidth || 1}
          step={1}
          value={Math.min(position, loopWidth || 1)}
          onChange={(e) => handleScrub(Number(e.target.value))}
          onPointerDown={() => {
            draggingRef.current = true;
          }}
          onPointerUp={() => {
            draggingRef.current = false;
          }}
          aria-label="Scrub through events at your own pace"
        />
      </div>
    </section>
  );
}
