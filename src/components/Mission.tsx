import { Reveal } from './motion/Reveal';

interface MissionProps {
  onLearnMoreClick?: () => void;
}

export function Mission({ onLearnMoreClick }: MissionProps) {
  return (
    <section
      className="relative overflow-hidden tac-grid-bg"
      style={{ backgroundColor: 'var(--tac-navy)', paddingTop: '5rem', paddingBottom: '7rem' }}
    >
      {/* Oversized ghosted logo watermark */}
      <img
        src="/NSC_Logo.png"
        alt=""
        aria-hidden="true"
        className="tac-watermark hidden md:flex"
        style={{ width: '820px', height: '820px', top: '-180px', right: '-220px' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ marginBottom: '2.5rem' }}>
          <Reveal>
            <div className="tac-eyebrow mb-4">
              <span className="tac-bracket">[</span> MISSION <span className="tac-bracket">]</span>
            </div>
          </Reveal>
          <Reveal variant="line">
            <div className="tac-divider" />
          </Reveal>
        </div>

        <div className="tac-card" style={{ padding: '2.5rem', maxWidth: '52rem' }}>
          <Reveal>
            <p className="tac-sans" style={{ color: 'var(--tac-text)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              NSC aims to cultivate a multidisciplinary community of students interested in national
              security by providing access to professionals and opportunities that develop their
              skills and empower them to become emerging leaders.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p
              className="tac-sans"
              style={{ color: 'var(--tac-text-dim)', fontSize: '1.05rem', lineHeight: 1.7, marginTop: '1.25rem' }}
            >
              We bring that mission to life through hands-on workshops that build real-world skills,
              competitive events where students tackle live national security challenges, and a guest
              speaker series featuring professionals from across the defense, intelligence, and policy
              sectors.
            </p>
          </Reveal>

          {onLearnMoreClick && (
            <Reveal variant="fade" delay={160}>
              <button
                onClick={onLearnMoreClick}
                className="tac-btn tac-btn-outline"
                style={{ marginTop: '2rem' }}
              >
                Learn More
              </button>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
