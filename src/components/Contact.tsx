import { Mail, Linkedin, Phone } from 'lucide-react';
import { Reveal } from './motion/Reveal';

const channels = [
  { icon: Mail, label: 'Email', value: 'anderson.paige@ufl.edu', href: 'mailto:anderson.paige@ufl.edu' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/company/ufnsc', href: 'https://linkedin.com/company/ufnsc', external: true },
  { icon: Phone, label: 'Phone', value: '(614) 832-6794', href: 'tel:+16148326794' },
];

export function Contact() {
  return (
    <section style={{ backgroundColor: 'var(--tac-navy-alt)' }} className="py-12 md:py-20 tac-grid-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Reveal>
            <div className="tac-eyebrow mb-4">
              <span className="tac-bracket">[</span> CONTACT <span className="tac-bracket">]</span>
            </div>
          </Reveal>
          <Reveal variant="line">
            <div className="tac-divider mb-6" />
          </Reveal>
          <Reveal delay={80}>
            <p className="tac-sans" style={{ color: 'var(--tac-text-dim)', fontSize: '1.1rem', maxWidth: '40rem' }}>
              Have questions or want to learn more? We'd love to hear from you.
            </p>
          </Reveal>
        </div>

        <Reveal variant="fade">
          <div className="max-w-2xl mx-auto tac-card" style={{ padding: '2rem' }}>
            <div className="tac-tag mb-6">Get in Touch</div>

            <div className="space-y-4">
              {channels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <Reveal key={channel.label} variant="fade" delay={Math.min(index * 70, 210)}>
                    <div className="flex items-start gap-4">
                      <div className="tac-icon-box">
                        <Icon style={{ color: 'var(--tac-accent)' }} size={18} />
                      </div>
                      <div>
                        <p className="mb-1" style={{ color: 'var(--tac-text)' }}>{channel.label}</p>
                        <a
                          href={channel.href}
                          target={channel.external ? '_blank' : undefined}
                          rel={channel.external ? 'noopener noreferrer' : undefined}
                          className="hover:underline"
                          style={{ color: 'var(--tac-accent)' }}
                        >
                          {channel.value}
                        </a>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
