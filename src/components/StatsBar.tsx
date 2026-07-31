const stats = [
  { label: 'Members' },
  { label: 'Events / YR' },
  { label: 'Partners' },
  { label: 'Competitions' },
];

export function StatsBar() {
  return (
    <section
      style={{
        backgroundColor: 'var(--tac-black)',
        borderTop: '1px solid var(--tac-line)',
        borderBottom: '1px solid var(--tac-line)',
      }}
    >
      <div
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ paddingTop: '2.5rem', paddingBottom: '3rem' }}
      >
        <div className="tac-stats-grid">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="tac-stat-tile text-center md:text-left"
              style={{ borderLeft: index === 0 ? '1px solid transparent' : undefined }}
            >
              <div className="tac-stat-value" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
                TBD
              </div>
              <div className="tac-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        <p
          className="tac-mono text-center"
          style={{ fontSize: '0.68rem', letterSpacing: '0.08em', color: 'var(--tac-text-faint)', marginTop: '2rem' }}
        >
          // figures published each semester — check back soon
        </p>
      </div>
    </section>
  );
}
