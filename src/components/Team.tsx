import { ImageWithFallback } from './figma/ImageWithFallback';

export function Team() {
  const officers = [
    {
      name: 'Sarah Chen',
      title: 'President',
      bio: 'Senior majoring in Political Science with a focus on international security policy.',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDc0NzE0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Marcus Johnson',
      title: 'Vice President',
      bio: 'Computer Science major specializing in cybersecurity and network defense.',
      image: 'https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjA3NTM4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Emily Rodriguez',
      title: 'Events Coordinator',
      bio: 'International Relations student with expertise in intelligence analysis.',
      image: 'https://images.unsplash.com/photo-1742119971773-57e0131095b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVtYmVyfGVufDF8fHx8MTc2MDc0MzI2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const advisors = [
    {
      name: 'Dr. Katherine Williams',
      title: 'Faculty Advisor',
      bio: 'Professor of International Relations, former State Department analyst.',
    },
    {
      name: 'Col. Robert Thompson (Ret.)',
      title: 'Military Advisor',
      bio: 'Retired Army Colonel with 25 years in defense intelligence.',
    },
  ];

  return (
    <section id="team" className="bg-[#f0f4ff] py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header Banner */}
        <div className="bg-gradient-to-r from-[#0021A5] to-[#0021A5]/90 rounded-2xl shadow-lg p-8 md:p-10 mb-12 text-center">
          <h2 className="text-white mb-4">Our Leadership</h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Meet the dedicated team driving UF NatSec's mission forward.
          </p>
        </div>

        {/* Officers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {officers.map((officer, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 border-4 border-[#0021A5]/10">
                <ImageWithFallback
                  src={officer.image}
                  alt={officer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-gray-900 mb-1">{officer.name}</h3>
              <p className="text-[#FA4616] text-sm mb-3">{officer.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {officer.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Advisors Section */}
        <div className="pt-12">
          <div className="bg-gradient-to-r from-[#0021A5]/10 to-[#FA4616]/10 rounded-xl p-4 mb-8">
            <h3 className="text-gray-900 text-center">Advisors</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0021A5]/5 to-[#FA4616]/5 rounded-2xl p-6 border border-[#0021A5]/10"
              >
                <div className="w-24 h-24 mx-auto md:mx-0 mb-4 rounded-full bg-[#0021A5]/10 flex items-center justify-center">
                  <span className="text-3xl">👤</span>
                </div>
                <h4 className="text-gray-900 mb-1 text-center md:text-left">
                  {advisor.name}
                </h4>
                <p className="text-[#FA4616] text-sm mb-3 text-center md:text-left">
                  {advisor.title}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed text-center md:text-left">
                  {advisor.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
