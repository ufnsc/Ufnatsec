import { useState } from 'react';
import paigeImg from '../../images/paige.jpg';
import josephImg from '../../images/joseph.png';
import eliImg from '../../images/eli.png';
import larissaImg from '../../images/larissa2.jpg';
import rishiImg from '../../images/rishi.png';
import greciaImg from '../../images/grecia.jpeg';
import landonImg from '../../images/landon.jpg';
import ethanImg from '../../images/headshot tie.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

const officers = [
  {
    name: 'Paige Anderson',
    title: 'Co-President',
    bio: 'Graduate Student, Nuclear Engineering',
    interests: 'Enjoys doing research in defense.',
    image: paigeImg,
  },
  {
    name: 'Joseph Starr',
    title: 'Co-President',
    bio: 'Senior, Electrical Engineering',
    interests: 'Interested in defense work and enjoys tinkering with Arduinos.',
    image: josephImg,
  },
  {
    name: 'Eli Ergas',
    title: 'Vice President',
    bio: 'Sophomore, Electrical Engineering',
    interests: 'Enjoys playing football and aspires to become an electrical engineer.',
    image: eliImg,
  },
  {
    name: 'Larissa Yaksic',
    title: '',
    bio: 'Junior, Electrical Engineering',
    interests: 'Passionate about teaching others national security awareness.',
    image: larissaImg,
  },
  {
    name: 'Rishi Jadala',
    title: '',
    bio: 'Sophomore, Electrical Engineering',
    interests: 'Loves soccer and is currently doing EE research.',
    image: rishiImg,
  },
  {
    name: 'Grecia Perez',
    title: '',
    bio: 'Sophomore, Computer Science',
    interests: 'Has a passion for national security.',
    image: greciaImg,
  },
  {
    name: 'Landon Amaba',
    title: '',
    bio: 'Senior, Electrical Engineering',
    interests: 'Passionate about public speaking and enjoys giving presentations.',
    image: landonImg,
  },
  {
    name: 'Ethan Ahmed',
    title: '',
    bio: 'Junior, Computer Science',
    interests: 'Enjoys coding and is interested in national security work.',
    image: ethanImg,
  },
];

export function Team() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pinnedIndex, setPinnedIndex] = useState<number | null>(null);

  const togglePinned = (index: number) => {
    setPinnedIndex((current) => (current === index ? null : index));
  };

  return (
    <section style={{ backgroundColor: 'var(--tac-navy-alt)' }} className="py-12 md:py-20 tac-grid-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="tac-eyebrow mb-4">
            <span className="tac-bracket">[</span> LEADERSHIP <span className="tac-bracket">]</span>
          </div>
          <div className="tac-divider mb-6" />
          <p className="tac-sans" style={{ color: 'var(--tac-text-dim)', fontSize: '1.1rem', maxWidth: '40rem' }}>
            Meet the dedicated team driving UF NatSec's mission forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {officers.map((officer, index) => {
            const isOpen = hoveredIndex === index || pinnedIndex === index;
            const hasInterests = Boolean(officer.interests);

            return (
              <div
                key={index}
                onMouseEnter={() => hasInterests && setHoveredIndex(index)}
                onMouseLeave={() => hasInterests && setHoveredIndex((current) => (current === index ? null : current))}
                onFocus={() => hasInterests && setHoveredIndex(index)}
                onBlur={() => hasInterests && setHoveredIndex((current) => (current === index ? null : current))}
                onClick={() => hasInterests && togglePinned(index)}
                onKeyDown={(e) => {
                  if (hasInterests && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    togglePinned(index);
                  }
                }}
                role={hasInterests ? 'button' : undefined}
                tabIndex={hasInterests ? 0 : undefined}
                aria-expanded={hasInterests ? isOpen : undefined}
                className="tac-card text-center"
                style={{
                  padding: '1.75rem',
                  cursor: hasInterests ? 'pointer' : undefined,
                  borderColor: isOpen ? 'var(--tac-line-strong)' : undefined,
                  transition: 'border-color 150ms ease',
                }}
              >
                <div
                  className="w-32 h-32 mx-auto mb-4 overflow-hidden"
                  style={{ border: '1px solid var(--tac-line)', backgroundColor: 'var(--tac-black)', borderRadius: '50%' }}
                >
                  <ImageWithFallback
                    src={officer.image}
                    alt={officer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-mono mb-1" style={{ color: 'var(--tac-text)' }}>{officer.name}</h3>
                {officer.title && (
                  <p className="text-sm mb-2" style={{ color: 'var(--tac-accent)' }}>{officer.title}</p>
                )}
                {officer.bio && (
                  <p className="tac-sans text-sm" style={{ color: 'var(--tac-text-dim)', lineHeight: 1.6 }}>
                    {officer.bio}
                  </p>
                )}
                {hasInterests && (
                  <div
                    className="overflow-hidden"
                    style={{
                      maxHeight: isOpen ? '160px' : '0px',
                      opacity: isOpen ? 1 : 0,
                      marginTop: isOpen ? '1rem' : '0px',
                      paddingTop: isOpen ? '1rem' : '0px',
                      borderTop: isOpen ? '1px solid var(--tac-line)' : '1px solid transparent',
                      transition: 'max-height 300ms ease-out, opacity 300ms ease-out, margin-top 300ms ease-out, padding-top 300ms ease-out',
                    }}
                  >
                    <p className="tac-sans text-sm" style={{ color: 'var(--tac-text-dim)', lineHeight: 1.6 }}>
                      {officer.interests}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
