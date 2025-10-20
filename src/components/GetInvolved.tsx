import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Calendar, Linkedin, Instagram, Mail } from 'lucide-react';
import { useState } from 'react';

export function GetInvolved() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const upcomingEvents = [
    {
      title: 'Cybersecurity Workshop',
      date: 'November 15, 2025',
      description: 'Hands-on workshop covering modern cybersecurity threats and defense strategies.',
    },
    {
      title: 'National Security Speaker Series',
      date: 'December 3, 2025',
      description: 'Guest speakers from government and industry discuss current security challenges.',
    },
    {
      title: 'Intelligence Analysis Forum',
      date: 'January 20, 2026',
      description: 'Interactive session on intelligence gathering and analytical methodologies.',
    },
  ];

  const recurringEvents = [
    {
      title: 'Weekly General Body Meetings',
      frequency: 'Every Tuesday',
      description: 'Open meetings for all members to discuss current events, plan activities, and network.',
    },
    {
      title: 'Policy Discussion Roundtables',
      frequency: 'Monthly',
      description: 'Deep-dive discussions on national security policies, defense strategies, and geopolitical issues.',
    },
    {
      title: 'Guest Speaker Series',
      frequency: 'Bi-Monthly',
      description: 'Industry professionals and government officials share insights on national security careers and trends.',
    },
    {
      title: 'Cybersecurity Workshops',
      frequency: 'Quarterly',
      description: 'Technical workshops on cybersecurity tools, threat analysis, and digital defense strategies.',
    },
    {
      title: 'Simulation Exercises',
      frequency: 'Bi-Annually',
      description: 'Crisis simulation and war-gaming exercises to practice strategic decision-making.',
    },
    {
      title: 'Networking Social Events',
      frequency: 'Monthly',
      description: 'Casual meetups to build community and connect with fellow national security enthusiasts.',
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
    <section id="get-involved" className="bg-[#f0f4ff] py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header Banner */}
        <div className="bg-gradient-to-r from-[#0021A5] to-[#0021A5]/90 rounded-2xl shadow-lg p-8 md:p-10 mb-12 text-center">
          <h2 className="text-white mb-4">Get Involved</h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Join our community of students and professionals passionate about national 
            security. Attend events, connect with peers, and build your expertise.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-12 md:mb-16">
          <div className="bg-gradient-to-r from-[#0021A5]/10 to-[#FA4616]/10 rounded-xl p-4 mb-6">
            <h3 className="text-gray-900 text-center md:text-left">
              Upcoming Events
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-0">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[#0021A5]/10">
                    <Calendar className="text-[#0021A5]" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-1">{event.title}</h4>
                    <p className="text-sm text-[#FA4616]">{event.date}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Calendar Integration */}
        <div className="mb-12 md:mb-16">
          <div className="bg-gradient-to-r from-[#0021A5]/10 to-[#FA4616]/10 rounded-xl p-4 mb-6">
            <h3 className="text-gray-900 text-center md:text-left">
              Event Calendar
            </h3>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="aspect-[16/10] w-full rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&mode=MONTH"
                  style={{ border: 0 }}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  title="UF NatSec Events Calendar"
                ></iframe>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  className="bg-[#0021A5] hover:bg-[#0021A5]/90 text-white rounded-xl"
                  onClick={() => window.open('https://calendar.google.com', '_blank')}
                >
                  <Calendar className="mr-2" size={18} />
                  Add to Google Calendar
                </Button>
                <Button
                  variant="outline"
                  className="border-[#0021A5] text-[#0021A5] hover:bg-[#0021A5]/10 rounded-xl"
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
          <div className="bg-gradient-to-r from-[#0021A5]/10 to-[#FA4616]/10 rounded-xl p-4 mb-6">
            <h3 className="text-gray-900 text-center md:text-left">
              Recurring Events
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recurringEvents.map((event, index) => (
              <Card key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-0">
                <div className="mb-3">
                  <h4 className="text-gray-900 mb-2">{event.title}</h4>
                  <div className="inline-block px-3 py-1 bg-[#FA4616]/10 text-[#FA4616] rounded-lg text-sm">
                    {event.frequency}
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Connect with Us */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h3 className="text-gray-900 mb-6 text-center">Connect With Us</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="bg-[#0021A5] hover:bg-[#0021A5]/90 text-white rounded-xl w-full sm:w-auto"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              <Linkedin className="mr-2" size={18} />
              LinkedIn
            </Button>
            <Button
              className="bg-[#5865F2] hover:bg-[#5865F2]/90 text-white rounded-xl w-full sm:w-auto"
              onClick={() => window.open('https://discord.com', '_blank')}
            >
              <svg
                className="mr-2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
              </svg>
              Discord
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl w-full sm:w-auto"
              onClick={() => window.open('https://instagram.com', '_blank')}
            >
              <Instagram className="mr-2" size={18} />
              Instagram
            </Button>
          </div>
        </div>

        {/* Email Signup */}
        <div className="bg-gradient-to-r from-[#0021A5] to-[#0021A5]/90 rounded-2xl shadow-lg p-6 md:p-8">
          <div className="max-w-xl mx-auto text-center">
            <Mail className="mx-auto mb-4 text-white" size={32} />
            <h3 className="text-white mb-3">Stay Updated</h3>
            <p className="text-white/90 mb-6 text-sm md:text-base">
              Subscribe to our newsletter for event updates and security insights.
            </p>
            {!submitted ? (
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white border-0 rounded-xl"
                />
                <Button
                  type="submit"
                  className="bg-[#FA4616] hover:bg-[#FA4616]/90 text-white rounded-xl"
                >
                  Subscribe
                </Button>
              </form>
            ) : (
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                ✓ Thank you for subscribing!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
