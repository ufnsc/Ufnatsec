import { Linkedin, Instagram, Mail } from 'lucide-react';
import { FaSlack } from 'react-icons/fa';
import { Reveal } from './motion/Reveal';

export function Footer() {
  return (
    <footer className="tac-grid-bg" style={{ backgroundColor: 'var(--tac-black)', borderTop: '1px solid var(--tac-line)' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Tagline */}
          <Reveal variant="fade" className="text-center md:text-left">
            <div>
              <span className="tac-mono" style={{ color: 'var(--tac-accent)', fontWeight: 700, letterSpacing: '0.1em' }}>
                UF NSC
              </span>
              <p className="tac-sans text-sm mt-1" style={{ color: 'var(--tac-text-faint)' }}>
                Building Tomorrow's National Security Leaders.
              </p>
            </div>
          </Reveal>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/ufnsc/"
              target="_blank"
              rel="noopener noreferrer"
              className="tac-icon-btn"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://join.slack.com/t/ufnsc/shared_invite/zt-3gnhxlssn-JQbxI3jCo2JZjTtX~Dpl8Q"
              target="_blank"
              rel="noopener noreferrer"
              className="tac-icon-btn"
              aria-label="Slack"
            >
              <FaSlack size={18} />
            </a>
            <a
              href="https://www.instagram.com/uf.nsc/"
              target="_blank"
              rel="noopener noreferrer"
              className="tac-icon-btn"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a href="mailto:anderson.paige@ufl.edu" className="tac-icon-btn" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="tac-divider-soft" style={{ marginTop: '2rem', marginBottom: '1.25rem' }} />

        <p className="tac-classification text-center md:text-left">
          UNCLASSIFIED // FOR PUBLIC RELEASE
        </p>
      </div>
    </footer>
  );
}
