import groupPhoto from '../../images/IMG_5434.JPG';
import { Reveal } from './motion/Reveal';
import { RevealHeading } from './motion/RevealHeading';

interface HeroProps {
  onGetInvolvedClick?: () => void;
}

export function Hero({ onGetInvolvedClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden flex flex-col -mt-16"
      style={{ minHeight: '100vh' }}
    >
      {/* Full-bleed photo */}
      <div className="absolute inset-0">
        <img
          src={groupPhoto}
          alt="UF National Security Club panel discussion"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 40%', filter: 'grayscale(0.45) contrast(1.05) brightness(0.85)' }}
        />
      </div>

      {/* Dark gradient overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(3,5,9,0.55) 0%, rgba(3,5,9,0.66) 45%, rgba(3,5,9,0.94) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(3,5,9,0.6) 0%, rgba(3,5,9,0.1) 30%, rgba(3,5,9,0.1) 70%, rgba(3,5,9,0.6) 100%)',
        }}
      />

      {/* Subtle grid texture over the photo */}
      <div className="absolute inset-0 tac-grid-bg" style={{ pointerEvents: 'none' }} />

      {/* Small precise logo badge, pinned top-left of the hero frame */}
      <Reveal variant="fade" className="absolute hidden md:block" style={{ top: '6.5rem', left: '1.5rem' }}>
        <div className="flex items-center gap-3 tac-bracket-frame" style={{ padding: '0.75rem 1rem' }}>
          <img
            src="/NSC_Logo.png"
            alt=""
            style={{ width: '1.75rem', height: '1.75rem', objectFit: 'contain', filter: 'grayscale(1) brightness(1.4)' }}
          />
          <span className="tac-mono" style={{ fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--tac-text-dim)', textTransform: 'uppercase' }}>
            Univ. of Florida
          </span>
        </div>
      </Reveal>

      <div className="flex-1 flex items-center justify-center w-full relative z-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: '6rem', paddingBottom: '8rem' }}>
          <div className="flex flex-col items-center text-center">
            <Reveal variant="fade">
              <img
                src="/NSC_Logo.png"
                alt="National Security Club logo"
                style={{ width: 'clamp(220px, 26vw, 340px)', height: 'clamp(220px, 26vw, 340px)', objectFit: 'contain', marginBottom: '1.75rem' }}
              />
            </Reveal>

            <RevealHeading
              as="h1"
              lines={["Building Tomorrow's", 'National Security Leaders']}
              className="tac-mono"
              startDelay={150}
              style={{
                color: 'var(--tac-text)',
                fontWeight: 700,
                fontSize: 'clamp(2.25rem, 6vw, 4.25rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
                margin: 0,
              }}
            />

            <Reveal variant="fade" delay={480}>
              <p
                className="tac-mono"
                style={{
                  color: 'var(--tac-text-dim)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.1em',
                  maxWidth: '38rem',
                  marginTop: '1.5rem',
                  marginBottom: '2.5rem',
                }}
              >
                A multidisciplinary club at the University of Florida for students in
                engineering, policy, intelligence, and everything in between.
              </p>
            </Reveal>

            {onGetInvolvedClick && (
              <Reveal variant="fade" delay={620}>
                <button onClick={onGetInvolvedClick} className="tac-btn tac-btn-primary">
                  Get Involved
                </button>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
