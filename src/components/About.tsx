import { Shield, Users, Lightbulb, Heart } from 'lucide-react';

interface AboutProps {
  onGetInvolvedClick: () => void;
  onContactClick: () => void;
}

export function About({ onGetInvolvedClick, onContactClick }: AboutProps) {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We uphold the highest standards of ethics and professionalism in all our endeavors.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We unite students from diverse disciplines to bridge perspectives and work towards a shared mission.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace creative thinking and cutting-edge approaches to complex security challenges.',
    },
    {
      icon: Heart,
      title: 'Mentorship & Growth',
      description: 'We foster a supportive community that prioritizes mentorship, personal development, and professional opportunity.',
    },
  ];

  return (
    <>
      {/* Header & Mission Statement */}
      <section style={{ backgroundColor: 'var(--tac-navy)' }} className="py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="tac-eyebrow mb-4">
              <span className="tac-bracket">[</span> ABOUT <span className="tac-bracket">]</span>
            </div>
            <div className="tac-divider mb-6" />
            <p className="tac-sans" style={{ color: 'var(--tac-text-dim)', fontSize: '1.1rem', maxWidth: '40rem' }}>
              Building the future of national security through education, collaboration, and innovation.
            </p>
          </div>

          <div className="tac-card" style={{ padding: '2.5rem' }}>
            <div className="tac-tag mb-6">Our Mission</div>
            <p className="tac-sans" style={{ color: 'var(--tac-text)', fontSize: '1.15rem', lineHeight: 1.75, maxWidth: '52rem' }}>
              NSC provides a multidisciplinary forum for students from all majors who are curious or passionate about national security. Our mission is to destigmatize conversations around defense and security, create networking opportunities, foster mentorship, and inspire innovation. Through discussions with peers and professionals, we aim to broaden understanding of critical national security challenges and prepare the next generation of leaders to tackle emerging issues at the intersection of engineering, policy, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section style={{ backgroundColor: 'var(--tac-navy-alt)' }} className="py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="tac-eyebrow mb-4">
              <span className="tac-bracket">[</span> VALUES <span className="tac-bracket">]</span>
            </div>
            <div className="tac-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="tac-card" style={{ padding: '2rem', textAlign: 'center' }}>
                  <div className="tac-icon-box" style={{ margin: '0 auto 1.25rem' }}>
                    <Icon style={{ color: 'var(--tac-accent)' }} size={24} />
                  </div>
                  <h3 className="font-mono" style={{ color: 'var(--tac-text)', marginBottom: '0.75rem' }}>{value.title}</h3>
                  <p className="tac-sans text-sm" style={{ color: 'var(--tac-text-dim)', lineHeight: 1.6 }}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ backgroundColor: 'var(--tac-navy)' }} className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="tac-card" style={{ padding: '3rem', textAlign: 'center' }}>
            <h2 className="font-mono" style={{ color: 'var(--tac-text)', marginBottom: '1rem' }}>Ready to Make an Impact?</h2>
            <p className="tac-sans" style={{ color: 'var(--tac-text-dim)', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '36rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Join UF NSC and become part of a community dedicated to shaping the future of national security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={onGetInvolvedClick} className="tac-btn tac-btn-primary">
                Get Involved
              </button>
              <button onClick={onContactClick} className="tac-btn tac-btn-outline">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
