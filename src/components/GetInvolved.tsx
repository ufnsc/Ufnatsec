import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Calendar, Linkedin, Instagram, Mail } from 'lucide-react';
import { FaSlack } from 'react-icons/fa';
import { useState } from 'react';
import cyberEarthImg from '../../images/cyberearth.jpg';

export function GetInvolved() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const recurringEvents = [
    {
      title: 'Speaker Series',
      frequency: 'Monthly',
      description: 'Connects students with national security professionals from diverse backgrounds.',
    },
    {
      title: 'Experiential Learning Sessions',
      frequency: 'Quarterly',
      description: 'Students develop critical skills by tackling real-world inspired security challenges.',
    },
    {
      title: 'Professional Development Workshops',
      frequency: 'Quarterly',
      description: 'Interactive workshops that focus on equipping students with skills essential for national security roles.',
    },
    {
      title: 'Site Visits & External Engagements',
      frequency: 'Quarterly',
      description: 'These programs connect students directly with the national security ecosystem, providing direct exposure to real-world settings.',
    },
    {
      title: 'Competition Events',
      frequency: 'Quarterly',
      description: 'These events encourage students to apply skills in teamwork, communication, and problem-solving to national security challenges.',
    },
    {
      title: 'Community & Discussion Events',
      frequency: 'Multiple Per Semester',
      description: 'These gatherings foster collaboration, dialogue, and a deeper understanding of national security topics in a relaxed setting.',
    },
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section id="get-involved" className="relative py-12 md:py-20 overflow-hidden" style={{ backgroundColor: '#050d1a' }}>

      {/* Blurred background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${cyberEarthImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px)',
          transform: 'scale(1.08)',
          opacity: 0.18,
        }}
      />

      {/* Radial gradient — solid centre, soft feathered edge into image */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 72% 68% at center,
            #050d1a 0%,
            #050d1a 36%,
            rgba(5,13,26,0.97) 48%,
            rgba(5,13,26,0.80) 60%,
            rgba(5,13,26,0.45) 74%,
            rgba(5,13,26,0.12) 88%,
            transparent 100%)`,
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex flex-col items-center">
            <h2 className="font-mono text-white text-center text-3xl md:text-5xl font-bold tracking-[0.12em] uppercase">
              GET INVOLVED
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
            Join our community of students and professionals interested in national
            security. Attend events, connect with peers, and build your expertise.
          </p>
        </div>

        {/* Calendar Integration */}
        <div className="mb-12 md:mb-16">
          <div className="bg-[#0d1f3c] border border-[#1e3a5f] rounded-xl p-4 mb-6">
            <h3 className="font-mono text-white text-center md:text-left">
              Event Calendar
            </h3>
          </div>
          <div className="bg-[#0a1628] border border-[#1e3a5f] rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="aspect-[16/10] w-full rounded-lg overflow-hidden border border-[#1e3a5f]">
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=da714330ce973b452b5f549314e7df91465c036b03091517b19ecf833ef72888%40group.calendar.google.com&ctz=America%2FNew_York"
                  style={{ border: 0, filter: 'invert(1) hue-rotate(180deg)' }}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  title="NSC Events Calendar"
                ></iframe>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  className="bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-xl"
                  onClick={() => window.open('https://calendar.google.com', '_blank')}
                >
                  <Calendar className="mr-2" size={18} />
                  Add to Google Calendar
                </Button>
                <Button
                  variant="outline"
                  className="border-[#1e3a5f] text-[#3b82f6] hover:bg-[#3b82f6]/10 rounded-xl"
                  onClick={() => window.open('https://outlook.office.com/calendar', '_blank')}
                >
                  <Calendar className="mr-2" size={18} />
                  Add to Outlook
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Recurring Events */}
        <div className="mb-12 md:mb-16">
          <div className="bg-[#0d1f3c] border border-[#1e3a5f] rounded-xl p-4 mb-6">
            <h3 className="font-mono text-white text-center md:text-left">
              Recurring Events
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recurringEvents.map((event, index) => (
              <Card key={index} className="p-6 bg-[#0a1628] border border-[#1e3a5f] rounded-xl hover:shadow-lg hover:shadow-[#3b82f6]/5 transition-shadow">
                <div className="mb-3">
                  <h4 className="font-mono text-white mb-2">{event.title}</h4>
                  <div className="inline-block px-3 py-1 bg-[#3b82f6]/10 border border-[#1e3a5f] text-[#3b82f6] rounded-lg text-sm">
                    {event.frequency}
                  </div>
                </div>
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  {event.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Connect with Us */}
        <div className="bg-[#0a1628] border border-[#1e3a5f] rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h3 className="font-mono text-white mb-6 text-center">Connect With Us</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-xl w-full sm:w-auto"
              onClick={() => window.open('https://www.linkedin.com/company/ufnsc/', '_blank')}
            >
              <Linkedin className="mr-2" size={18} />
              LinkedIn
            </Button>
            <Button
              className="!bg-[#4A154B] hover:bg-[#3F0E40] text-white rounded-xl w-full sm:w-auto"
              onClick={() => window.open('https://join.slack.com/t/ufnsc/shared_invite/zt-3gnhxlssn-JQbxI3jCo2JZjTtX~Dpl8Q', '_blank')}
              aria-label="Slack"
            >
              <FaSlack size={18} className="mr-2" />
              Slack
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl w-full sm:w-auto"
              onClick={() => window.open('https://www.instagram.com/uf.nsc/', '_blank')}
            >
              <Instagram className="mr-2" size={18} />
              Instagram
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
