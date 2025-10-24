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
          <div className="mb-6 md:mb-8">
            {/*<div className="inline-flex items-center justify-center w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-[#0021A5]/10 to-[#FA4616]/10 rounded-full shadow-lg border-4 border-white backdrop-blur-sm relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0021A5]/5 to-[#FA4616]/5 rounded-full animate-pulse"></div> */}
                <img
                  src="/NatSecLogo.png"
                  alt="UF NatSec Logo"
                  className="w-40 h-40 md:w-48 md:h-48 object-contain rounded-full shadow-lg border-4 border-white backdrop-blur-sm"
                />
            </div>
          </div>

          {/* Tagline */}
          <h1 className="text-4xl md:text-6xl mb-4 md:mb-6 text-gray-900">
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
