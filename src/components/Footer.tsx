import { Linkedin, Instagram, Mail } from 'lucide-react';
import { FaSlack } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-[#0021A5] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Tagline */}
          <div className="text-center md:text-left">
            <p className="text-sm opacity-90">
              Building Tomorrow's National Security Leaders.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/ufnatsec/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://join.slack.com/t/ufnatsec/shared_invite/zt-3gnhxlssn-JQbxI3jCo2JZjTtX~Dpl8Q"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Slack"
            >
              <FaSlack size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:anderson.paige@ufl.edu"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
