import { Button } from './ui/button';
import { Download, Heart } from 'lucide-react';

export function Sponsor() {
  return (
    <section id="sponsor" className="bg-[#0a1628] py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex flex-col items-center">
            <h2 className="font-mono text-white text-center text-3xl md:text-5xl font-bold tracking-[0.12em] uppercase">
              SPONSOR US
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
            Your support enables NSC to educate, inspire, and connect students with national security professionals and opportunities.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#050d1a] to-[#0d1f3c] border border-[#1e3a5f] rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[#94a3b8] text-base md:text-lg mb-8 leading-relaxed">
                By partnering with us, you help develop the next generation of national security leaders while showcasing your organization's expertise and commitment to the field.
              </p>

              <div className="bg-[#3b82f6]/10 border border-[#3b82f6]/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8">
                <h3 className="font-mono text-white mb-4">Why Sponsor?</h3>
                <ul className="text-[#e0eaff] text-left space-y-3 max-w-xl mx-auto text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FA4616] mt-1">✓</span>
                    <span><strong>Access to Top Talent:</strong> Connect with motivated, skilled students.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FA4616] mt-1">✓</span>
                    <span><strong>Brand Visibility:</strong> Showcase your organization to UF students and faculty.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FA4616] mt-1">✓</span>
                    <span><strong>Thought Leadership:</strong> Share expertise via panels, workshops, and mentorship.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FA4616] mt-1">✓</span>
                    <span><strong>Mission Impact:</strong> Help develop the future national security workforce.</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/NSCSponsorshipPacket.pdf" download>
                  <Button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-xl px-8 py-6 shadow-lg shadow-[#3b82f6]/20">
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

              <p className="text-[#64748b] text-xs md:text-sm mt-6">
                All donations go directly to supporting UF NSC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
