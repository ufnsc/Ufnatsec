import { Button } from './ui/button';

interface MissionProps {
  onLearnMoreClick: () => void;
}

export function Mission({ onLearnMoreClick }: MissionProps) {
  return (
    <section className="bg-[#f0f4ff] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0021A5]/10 to-[#FA4616]/10 rounded-xl p-4 mb-8">
          <h2 className="text-gray-900 text-center">Our Mission</h2>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 text-center">
          <h3 className="text-gray-900 mb-6">
            Bridging Academia, Government, and Industry
          </h3>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
            UF NatSec is committed to fostering multidisciplinary collaboration in national 
            security. We create a dynamic platform where students, faculty, and industry leaders 
            come together to explore critical security challenges, develop innovative solutions, 
            and prepare the next generation of national security professionals through research, 
            dialogue, and hands-on experiences.
          </p>
          
          <Button
            onClick={onLearnMoreClick}
            className="bg-[#FA4616] hover:bg-[#FA4616]/90 text-white px-8 py-6 rounded-xl shadow-lg transition-all hover:shadow-xl"
          >
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
}
