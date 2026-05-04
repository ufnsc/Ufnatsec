import josephImg from '../../images/joseph.png';
import eliImg from '../../images/eli.png';
import larissaImg from '../../images/larissa2.jpg';
import rishiImg from '../../images/rishi.png';
import greciaImg from '../../images/grecia.jpeg';
import landonImg from '../../images/landon.jpg';
import cyberTech2Img from '../../images/cybertech2.jpg';
import { ImageWithFallback } from './figma/ImageWithFallback';

const officers = [
  {
    name: 'Joseph Starr',
    title: 'President',
    bio: 'Senior, Electrical Engineering',
    image: josephImg,
  },
  {
    name: 'Eli Ergas',
    title: 'Vice President',
    bio: 'Sophomore, Electrical Engineering',
    image: eliImg,
  },
  {
    name: 'Larissa Yaksic',
    title: '',
    bio: 'Junior, Electrical Engineering',
    image: larissaImg,
  },
  {
    name: 'Rishi Jadala',
    title: '',
    bio: 'Sophomore, Electrical Engineering',
    image: rishiImg,
  },
  {
    name: 'Grecia Perez',
    title: '',
    bio: 'Sophomore, Computer Science',
    image: greciaImg,
  },
  {
    name: 'Landon Amaba',
    title: '',
    bio: 'Senior, Electrical Engineering',
    image: landonImg,
  },
];

export function Team() {
  return (
    <section id="team" className="relative py-12 md:py-20 overflow-hidden" style={{ backgroundColor: '#0a1628' }}>

      {/* Blurred background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${cyberTech2Img})`,
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

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex flex-col items-center">
            <h2 className="font-mono text-white text-center text-3xl md:text-5xl font-bold tracking-[0.12em] uppercase">
              OUR LEADERSHIP
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
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-center text-lg mt-8">
            Meet the dedicated team driving UF NatSec's mission forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {officers.map((officer, index) => (
            <div
              key={index}
              className="bg-[#050d1a] border border-[#1e3a5f] rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-[#3b82f6]/5 transition-shadow"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-[#0d1f3c] border-4 border-[#3b82f6]/30">
                <ImageWithFallback
                  src={officer.image}
                  alt={officer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-mono text-white mb-1">{officer.name}</h3>
              {officer.title && (
                <p className="text-[#FA4616] text-sm mb-2">{officer.title}</p>
              )}
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                {officer.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
