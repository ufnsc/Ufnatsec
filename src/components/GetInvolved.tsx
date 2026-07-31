import { Linkedin, Instagram } from 'lucide-react';
import { FaSlack } from 'react-icons/fa';

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

export function GetInvolved() {
  return (
    <section style={{ backgroundColor: 'var(--tac-navy)' }} className="py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="tac-eyebrow mb-4">
            <span className="tac-bracket">[</span> GET INVOLVED <span className="tac-bracket">]</span>
          </div>
          <div className="tac-divider mb-6" />
          <p className="tac-sans" style={{ color: 'var(--tac-text-dim)', fontSize: '1.1rem', maxWidth: '40rem' }}>
            Join our community of students and professionals interested in national
            security. Attend events, connect with peers, and build your expertise.
          </p>
        </div>

        {/* Recurring Events */}
        <div className="mb-12 md:mb-16">
          <h3 className="font-mono" style={{ color: 'var(--tac-text)', marginBottom: '1.5rem' }}>
            Recurring Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recurringEvents.map((event, index) => (
              <div key={index} className="tac-card" style={{ padding: '1.75rem' }}>
                <h4 className="font-mono" style={{ color: 'var(--tac-text)', marginBottom: '0.75rem' }}>{event.title}</h4>
                <div className="tac-tag" style={{ marginBottom: '0.9rem' }}>{event.frequency}</div>
                <p className="tac-sans text-sm" style={{ color: 'var(--tac-text-dim)', lineHeight: 1.6 }}>
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Connect with Us */}
        <div className="tac-card" style={{ padding: '2rem' }}>
          <h3 className="font-mono text-center" style={{ color: 'var(--tac-text)', marginBottom: '1.5rem' }}>Connect With Us</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="tac-btn w-full sm:w-auto"
              style={{ backgroundColor: '#0a66c2', color: '#fff', borderColor: '#0a66c2' }}
              onClick={() => window.open('https://www.linkedin.com/company/ufnsc/', '_blank')}
            >
              <Linkedin size={16} />
              LinkedIn
            </button>
            <button
              className="tac-btn w-full sm:w-auto"
              style={{ backgroundColor: '#4A154B', color: '#fff', borderColor: '#4A154B' }}
              onClick={() => window.open('https://join.slack.com/t/ufnsc/shared_invite/zt-3gnhxlssn-JQbxI3jCo2JZjTtX~Dpl8Q', '_blank')}
              aria-label="Slack"
            >
              <FaSlack size={16} />
              Slack
            </button>
            <button
              className="tac-btn w-full sm:w-auto"
              style={{ backgroundColor: '#C1367B', color: '#fff', borderColor: '#C1367B' }}
              onClick={() => window.open('https://www.instagram.com/uf.nsc/', '_blank')}
            >
              <Instagram size={16} />
              Instagram
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
