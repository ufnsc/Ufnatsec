export function Partners() {
  const partners = [
    {
      name: 'Florida Institute for National Security',
      logo: '/FINSLogo.png',
    }
    /*,
    {
      name: 'University of Florida',
      logo: '🐊',
    }
    ,
    {
      name: 'Defense Innovation',
      logo: '🛡️',
    },
    {
      name: 'Security Alliance',
      logo: '🔒',
    },
    {
      name: 'Tech Partners',
      logo: '💻',
    }, */
  ];

  return (
    <section className="bg-[#f0f4ff] py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0021A5]/10 to-[#FA4616]/10 rounded-xl p-4 mb-8">
          <h2 className="text-center text-gray-900">
            Our Partners
          </h2>
        </div>
        
        {/* Desktop: Horizontal Layout */}
        <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12 flex-wrap">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors min-w-[140px]"
            >
              <img src={partner.logo} alt={partner.name} className="w-24 h-24 object-contain" />
              <p className="text-sm text-gray-700 text-center">{partner.name}</p>
            </div>
          ))}
        </div>

        {/* Mobile: 2-Column Grid */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <img src={partner.logo} alt={partner.name} className="w-20 h-20 object-contain" />
              <p className="text-xs text-gray-700 text-center">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
