import { Linkedin, Instagram, Mail } from 'lucide-react';
import { FaSlack } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-[#020810] border-t border-[#1e3a5f] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Tagline */}
          <div className="text-center md:text-left">
            <span className="font-mono font-bold text-[#FA4616]">UF NSC</span>
            <p className="text-sm text-[#64748b] mt-1">
              Building Tomorrow's National Security Leaders.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/ufnsc/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#3b82f6]/10 hover:bg-[#3b82f6]/20 transition-colors text-[#94a3b8] hover:text-[#3b82f6]"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://join.slack.com/t/ufnsc/shared_invite/zt-3gnhxlssn-JQbxI3jCo2JZjTtX~Dpl8Q"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#3b82f6]/10 hover:bg-[#3b82f6]/20 transition-colors text-[#94a3b8] hover:text-[#3b82f6]"
              aria-label="Slack"
            >
              <FaSlack size={20} />
            </a>
            <a
              href="https://www.instagram.com/uf.nsc/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#3b82f6]/10 hover:bg-[#3b82f6]/20 transition-colors text-[#94a3b8] hover:text-[#3b82f6]"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:anderson.paige@ufl.edu"
              className="p-2 rounded-full bg-[#3b82f6]/10 hover:bg-[#3b82f6]/20 transition-colors text-[#94a3b8] hover:text-[#3b82f6]"
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
