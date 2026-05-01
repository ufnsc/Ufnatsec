import blueAbstractImg from '../../images/blue-abstract-technology-data-wavy-600nw-2473376713.webp';

export function Mission() {
  return (
    <section id="about" className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: '#0a1628' }}>

      {/* Blurred background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${blueAbstractImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px)',
          transform: 'scale(1.08)',
          opacity: 0.18,
        }}
      />

      {/* Radial gradient — solid centre, soft feathered edge into image */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 72% 68% at center,
            #0a1628 0%,
            #0a1628 36%,
            rgba(10,22,40,0.97) 48%,
            rgba(10,22,40,0.80) 60%,
            rgba(10,22,40,0.45) 74%,
            rgba(10,22,40,0.12) 88%,
            transparent 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex flex-col items-center">
            <h2 className="font-mono text-white text-center text-3xl md:text-5xl font-bold tracking-[0.12em] uppercase">
              ABOUT US
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

        <div className="text-center">
          <p className="text-lg md:text-xl text-[#e0eaff] leading-relaxed max-w-4xl mx-auto mb-6">
            NSC aims to cultivate a multidisciplinary community of students interested in national security by
            providing access to professionals and opportunities that develop their skills and empower them to
            become emerging leaders.
          </p>
          <p className="text-lg md:text-xl text-[#c2d5f4] leading-relaxed max-w-4xl mx-auto">
            We bring that mission to life through hands-on workshops that build real-world skills, competitive
            events where students tackle live national security challenges, and a guest speaker series featuring
            professionals from across the defense, intelligence, and policy sectors. Whether you're an engineer,
            a policy thinker, or simply curious about the forces shaping our world, NSC is where those
            conversations happen.
          </p>
        </div>
      </div>
    </section>
  );
}
