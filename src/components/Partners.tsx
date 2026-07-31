import cmpLogo from '../../images/cmplogo.png';

const partners = [
  {
    name: 'Florida Institute for National Security',
    logo: '/FINSLogo.png',
  },
  {
    name: 'Common Mission Project',
    logo: cmpLogo,
  },
];

export function Partners() {
  return (
    <section style={{ backgroundColor: 'var(--tac-navy-alt)' }} className="py-16 md:py-24 relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ marginBottom: '3rem' }}>
          <div className="tac-eyebrow mb-4">
            <span className="tac-bracket">[</span> PARTNERS <span className="tac-bracket">]</span>
          </div>
          <div className="tac-divider" />
        </div>

        <div className="flex flex-wrap" style={{ gap: '1px', backgroundColor: 'var(--tac-line-soft)' }}>
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center gap-4 p-8"
              style={{ backgroundColor: 'var(--tac-navy)', flex: '1 1 220px', minWidth: '220px' }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-24 object-contain"
                style={{ filter: 'grayscale(0.4)', maxWidth: '180px' }}
              />
              <p className="tac-mono text-center" style={{ fontSize: '0.72rem', letterSpacing: '0.08em', color: 'var(--tac-text-dim)', textTransform: 'uppercase' }}>
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
