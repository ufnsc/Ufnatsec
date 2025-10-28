import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Calendar, Linkedin, Instagram, Mail } from 'lucide-react';
import { FaSlack } from 'react-icons/fa';
import { useState } from 'react';

export function GetInvolved() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  /*
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
  ]; */

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
    <section id="get-involved" className="bg-[#f0f4ff] py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header Banner */}
        <div className="bg-gradient-to-r from-[#0021A5] to-[#0021A5]/90 rounded-2xl shadow-lg p-8 md:p-10 mb-12 text-center">
          <h2 className="text-white mb-4">Get Involved</h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Join our community of students and professionals interested in national
            security. Attend events, connect with peers, and build your expertise.
          </p>
        </div>

        {/* Upcoming Events 
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
        </div> */}

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
                  src="https://calendar.google.com/calendar/embed?src=da714330ce973b452b5f549314e7df91465c036b03091517b19ecf833ef72888%40group.calendar.google.com&ctz=America%2FNew_York"
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
              onClick={() => window.open('https://www.linkedin.com/company/ufnatsec/', '_blank')}
            >
              <Linkedin className="mr-2" size={18} />
              LinkedIn
            </Button>
            <Button
              className="!bg-[#611F69] hover:bg-[#4A154B]/90 text-white rounded-xl w-full sm:w-auto"
              onClick={() => window.open('https://join.slack.com/t/ufnatsec/shared_invite/zt-3gnhxlssn-JQbxI3jCo2JZjTtX~Dpl8Q', '_blank')}
              aria-label="Slack"
            >
              <FaSlack size={18} className="mr-2" />
              Slack
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

        {/* Email Signup 
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
        </div> */}

      </div>
    </section>
  );
}
