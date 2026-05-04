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
    <section className="bg-[#050d1a] py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex flex-col items-center">
            <h2 className="font-mono text-center text-white text-3xl md:text-5xl font-bold tracking-[0.12em] uppercase">
              OUR PARTNERS
            </h2>
            <div
              className="mt-10 rounded-full"
              style={{
                width: '28rem',
                maxWidth: '72vw',
                height: '3px',
                backgroundColor: '#FA4616',
                boxShadow: '0 0 12px rgba(250, 70, 22, 0.3)',
              }}
            />
          </div>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-8 lg:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center gap-4 p-8 rounded-xl bg-[#0d1f3c] border border-[#1e3a5f] hover:border-[#3b82f6]/40 transition-colors"
            >
              <img src={partner.logo} alt={partner.name} className="h-28 w-auto max-w-[200px] object-contain" />
              <p className="text-sm text-[#94a3b8] text-center max-w-[180px]">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
