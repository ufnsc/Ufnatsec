import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Get Involved', id: 'get-involved' },
  { label: 'Team', id: 'team' },
  { label: 'Sponsor Us', id: 'sponsor' },
  { label: 'Contact', id: 'contact' },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.25;
      let current = 'home';
      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#07111f]/68 backdrop-blur-sm border-b border-[#FA4616]/12 shadow-md shadow-black/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-3">
            <img src="/NSC_Logo.png" alt="NSC Logo" className="h-10 w-10 object-contain" />
            <span className="text-[#ff9b78] font-mono font-bold text-base md:text-lg tracking-[0.12em] uppercase">
              National Security Club
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-link transition-colors font-mono text-sm tracking-[0.08em] uppercase ${
                  activeSection === item.id
                    ? 'nav-link-active text-[#ffd9cc]'
                    : 'text-[#ff9b78] hover:text-[#ffd9cc]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#ff9b78] hover:text-[#ffd9cc]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07111f]/94 border-t border-[#FA4616]/12">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-lg transition-colors font-mono text-sm tracking-[0.08em] uppercase ${
                  activeSection === item.id
                    ? 'bg-[#FA4616]/8 text-[#ffd9cc]'
                    : 'text-[#ff9b78] hover:bg-[#FA4616]/8 hover:text-[#ffd9cc]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
