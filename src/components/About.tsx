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
      description: 'We believe in the power of diverse perspectives working together toward common goals.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace creative thinking and cutting-edge approaches to complex security challenges.',
    },
    {
      icon: Heart,
      title: 'Service',
      description: 'We are dedicated to serving our nation and community through knowledge and action.',
    },
  ];

  return (
    <>
      {/* Header & Mission Statement */}
      <section className="bg-[#f0f4ff] py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header Banner */}
          <div className="bg-gradient-to-r from-[#0021A5] to-[#0021A5]/90 rounded-2xl shadow-lg p-8 md:p-10 mb-12 text-center">
            <h2 className="text-white mb-4">About Us</h2>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              Building the future of national security through education, collaboration, and innovation.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="inline-block px-4 py-2 bg-[#0021A5]/10 rounded-full mb-4">
                <span className="text-[#0021A5]">Our Mission</span>
              </div>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              The University of Florida National Security Club advances multidisciplinary 
              collaboration in national security by connecting students, faculty, government 
              officials, and industry professionals. We foster critical thinking, research, 
              and dialogue on the most pressing security challenges facing our nation and the 
              world, preparing the next generation of leaders to protect and serve.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#f0f4ff] py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0021A5]/10 to-[#FA4616]/10 rounded-xl p-4 mb-8">
            <h2 className="text-gray-900 text-center">Our Story</h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                UF NatSec was founded with a vision to create a vibrant community where 
                passionate individuals could engage with the complex and evolving landscape 
                of national security. Affiliated with the <span className="text-[#0021A5]">Florida Institute for National Security (FINS)</span>, 
                we benefit from a robust network that bridges government, academia, and industry.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our club emerged from the recognition that addressing modern security challenges 
                requires diverse expertise—from cybersecurity and intelligence analysis to policy 
                development and strategic communication. By bringing together students from various 
                disciplines, we create a unique environment for learning and innovation.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, UF NatSec serves as a dynamic platform for students to explore career paths 
                in national security, engage with thought leaders, participate in simulations and 
                workshops, and contribute to meaningful research that shapes policy and practice. 
                We are proud to be part of the University of Florida's commitment to excellence 
                and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#f0f4ff] py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0021A5]/10 to-[#FA4616]/10 rounded-xl p-4 mb-8">
            <h2 className="text-gray-900 text-center">Our Values</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
            The principles that guide everything we do and shape our community.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-2xl p-6 md:p-8 text-center hover:shadow-lg transition-shadow border border-gray-200"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#0021A5]/10 flex items-center justify-center">
                    <Icon className="text-[#0021A5]" size={28} />
                  </div>
                  <h3 className="text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="bg-[#f0f4ff] py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0021A5]/10 to-[#FA4616]/10 rounded-xl p-4 mb-8">
            <h2 className="text-gray-900 text-center">Our Community in Action</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Glimpses of our workshops, events, and collaborative moments.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"
                alt="Team collaboration"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600"
                alt="Workshop session"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560439514-4e9645039924?w=600"
                alt="Conference event"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600"
                alt="Team discussion"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600"
                alt="Presentation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600"
                alt="Networking event"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#f0f4ff] py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0021A5] to-[#0021A5]/90 rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center text-white">
              <h2 className="text-white mb-6">Ready to Make an Impact?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join UF NatSec and become part of a community dedicated to shaping the future of national security.
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
                  className="bg-white hover:bg-gray-100 text-[#0021A5] px-8 py-6 rounded-xl shadow-lg transition-all hover:shadow-xl"
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
