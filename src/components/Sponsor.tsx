import { Download, Heart } from 'lucide-react';

export function Sponsor() {
  return (
    <section style={{ backgroundColor: 'var(--tac-navy-alt)' }} className="py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="tac-eyebrow mb-4">
            <span className="tac-bracket">[</span> SPONSOR US <span className="tac-bracket">]</span>
          </div>
          <div className="tac-divider mb-6" />
          <p className="tac-sans" style={{ color: 'var(--tac-text-dim)', fontSize: '1.1rem', maxWidth: '40rem' }}>
            Your support enables NSC to educate, inspire, and connect students with national security professionals and opportunities.
          </p>
        </div>

        <div className="tac-card overflow-hidden">
          <div className="p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <p className="tac-sans text-base md:text-lg mb-8" style={{ color: 'var(--tac-text-dim)', lineHeight: 1.7 }}>
                By partnering with us, you help develop the next generation of national security leaders while showcasing your organization's expertise and commitment to the field.
              </p>

              <div className="mb-8" style={{ border: '1px solid var(--tac-line)', backgroundColor: 'var(--tac-navy)', padding: '1.75rem' }}>
                <h3 className="font-mono mb-4" style={{ color: 'var(--tac-text)' }}>Why Sponsor?</h3>
                <ul className="text-left space-y-3 max-w-xl mx-auto text-sm md:text-base" style={{ color: 'var(--tac-text)' }}>
                  <li className="flex items-start gap-3">
                    <span style={{ color: 'var(--tac-accent)', marginTop: '0.15rem' }}>&#9656;</span>
                    <span><strong>Access to Top Talent:</strong> Connect with motivated, skilled students.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span style={{ color: 'var(--tac-accent)', marginTop: '0.15rem' }}>&#9656;</span>
                    <span><strong>Brand Visibility:</strong> Showcase your organization to UF students and faculty.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span style={{ color: 'var(--tac-accent)', marginTop: '0.15rem' }}>&#9656;</span>
                    <span><strong>Thought Leadership:</strong> Share expertise via panels, workshops, and mentorship.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span style={{ color: 'var(--tac-accent)', marginTop: '0.15rem' }}>&#9656;</span>
                    <span><strong>Mission Impact:</strong> Help develop the future national security workforce.</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/NSCSponsorshipPacket.pdf" download>
                  <button className="tac-btn tac-btn-outline w-full sm:w-auto">
                    <Download size={16} />
                    Download Prospectus
                  </button>
                </a>
                <button
                  className="tac-btn tac-btn-primary w-full sm:w-auto"
                  onClick={() => window.open('https://www.uff.ufl.edu/giving-opportunities/027811-florida-institute-for-national-security-excellence-fund/', '_blank')}
                >
                  <Heart size={16} />
                  Donate via UF Foundation
                </button>
              </div>

              <p className="text-xs md:text-sm mt-6" style={{ color: 'var(--tac-text-faint)' }}>
                All donations go directly to supporting UF NSC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
