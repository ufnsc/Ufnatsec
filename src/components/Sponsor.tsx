import { Button } from './ui/button';
import { Download, Heart } from 'lucide-react';

export function Sponsor() {
  return (
    <section id="sponsor" className="bg-[#f0f4ff] py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0021A5] to-[#0021A5]/90 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
                <Heart className="text-white" size={32} />
              </div>
              
              <h2 className="text-white mb-6">Sponsor Us</h2>
              
              <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed">
                Your support enables UF NatSec to host world-class speakers, conduct critical 
                research, and provide students with unique opportunities in the national security 
                field. Together, we can prepare the next generation of security leaders and 
                innovators.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-white/20">
                <h3 className="text-white mb-4">Why Sponsor?</h3>
                <ul className="text-white/90 text-left space-y-3 max-w-xl mx-auto text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FA4616] mt-1">✓</span>
                    <span>Support cutting-edge research in national security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FA4616] mt-1">✓</span>
                    <span>Connect with talented students passionate about security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FA4616] mt-1">✓</span>
                    <span>Gain visibility at exclusive events and conferences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FA4616] mt-1">✓</span>
                    <span>Contribute to developing tomorrow's security professionals</span>
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/NatSecProspectus.pdf" download>
                  <Button className="bg-white text-[#0021A5] hover:bg-white/90 rounded-xl px-8 py-6 shadow-lg">
                    <Download className="mr-2" size={18} />
                    Download Prospectus
                  </Button>
                </a>
                <Button
                  className="bg-[#FA4616] hover:bg-[#FA4616]/90 text-white rounded-xl px-8 py-6 shadow-lg"
                  onClick={() => window.open('https://www.uff.ufl.edu/giving-opportunities/027811-florida-institute-for-national-security-excellence-fund/', '_blank')}
                >
                  <Heart className="mr-2" size={18} />
                  Donate via UF Foundation
                </Button>
              </div>

              <p className="text-white/70 text-xs md:text-sm mt-6">
                All donations go directly to supporting UF NatSec.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
