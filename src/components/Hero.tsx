import { Button } from './ui/button';

interface HeroProps {
  onGetInvolvedClick?: () => void;
}

export function Hero({ onGetInvolvedClick }: HeroProps) {
  return (
    <section id="home" className="bg-white relative overflow-hidden">
      {/* Subtle Tech-Inspired Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#0021A5] rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#FA4616] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-[#0021A5] rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid Pattern Overlay for Tech Feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0021A510_1px,transparent_1px),linear-gradient(to_bottom,#0021A510_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="text-center">
          {/* Logo Placeholder */}
          <div className="flex flex-col items-center justify-center space-y-4">
                <img
                  src="/NatSecLogo.png"
                  alt="UF NatSec Logo"
                  className="w-36 h-36 md:w-40 md:h-40"
                />
            </div>

          {/* Tagline */}
          <h1 className="text-4xl md:text-6xl text-gray-900 text-center">
            UF NatSec
          </h1>
          <p className="text-xl md:text-3xl mb-12 md:mb-16 text-gray-600 max-w-3xl mx-auto">
            Building Tomorrow's National Security Leaders
          </p>

          {/* CTA Button */}
          {onGetInvolvedClick && (
            <Button
              onClick={onGetInvolvedClick}
              className="bg-[#0021A5] hover:bg-[#0021A5]/90 text-white px-10 py-7 rounded-xl shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Get Involved
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
