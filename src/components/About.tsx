import { Button } from './ui/button';
import { Shield, Users, Lightbulb, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
      <section className="bg-[#050d1a] py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header Banner */}
          <div className="bg-gradient-to-r from-[#050d1a] to-[#0d1f3c] border border-[#1e3a5f] rounded-2xl shadow-lg p-8 md:p-10 mb-12 text-center">
            <h2 className="font-mono text-white mb-4">About Us</h2>
            <p className="text-[#94a3b8] max-w-2xl mx-auto text-lg">
              Building the future of national security through education, collaboration, and innovation.
            </p>
          </div>

          <div className="bg-[#0a1628] rounded-2xl p-8 md:p-10 shadow-lg border border-[#1e3a5f]">
            <div className="text-center mb-6">
              <div className="inline-block px-4 py-2 bg-[#3b82f6]/10 border border-[#1e3a5f] rounded-full mb-4">
                <span className="text-[#3b82f6] font-mono text-sm">Our Mission</span>
              </div>
            </div>

            <p className="text-xl text-[#e0eaff] leading-relaxed text-center max-w-4xl mx-auto">
              NSC provides a multidisciplinary forum for students from all majors who are curious or passionate about national security. Our mission is to destigmatize conversations around defense and security, create networking opportunities, foster mentorship, and inspire innovation. Through discussions with peers and professionals, we aim to broaden understanding of critical national security challenges and prepare the next generation of leaders to tackle emerging issues at the intersection of engineering, policy, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#050d1a] py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0d1f3c] border border-[#1e3a5f] rounded-xl p-4 mb-8">
            <h2 className="font-mono text-white text-center">Our Values</h2>
          </div>
          <p className="text-[#64748b] max-w-2xl mx-auto text-center mb-12">
            The principles that guide everything we do and shape our community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-[#0a1628] border border-[#1e3a5f] rounded-2xl p-6 md:p-8 text-center hover:shadow-lg hover:shadow-[#3b82f6]/5 transition-shadow"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#3b82f6]/10 flex items-center justify-center">
                    <Icon className="text-[#3b82f6]" size={28} />
                  </div>
                  <h3 className="font-mono text-white mb-3">{value.title}</h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#050d1a] py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#050d1a] to-[#0d1f3c] border border-[#1e3a5f] rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center">
              <h2 className="font-mono text-white mb-6">Ready to Make an Impact?</h2>
              <p className="text-xl text-[#94a3b8] mb-8 max-w-2xl mx-auto">
                Join UF NSC and become part of a community dedicated to shaping the future of national security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={onGetInvolvedClick}
                  className="bg-[#FA4616] hover:bg-[#FA4616]/90 text-white px-8 py-6 rounded-xl shadow-lg transition-all hover:shadow-xl"
                >
                  Get Involved
                </Button>
                <Button
                  onClick={onContactClick}
                  className="bg-[#3b82f6]/10 hover:bg-[#3b82f6]/20 text-[#3b82f6] border border-[#3b82f6]/30 px-8 py-6 rounded-xl shadow-lg transition-all hover:shadow-xl"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
