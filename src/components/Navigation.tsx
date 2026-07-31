import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Get Involved', path: '/get-involved' },
  { label: 'Team', path: '/team' },
  { label: 'Sponsor Us', path: '/sponsor' },
  { label: 'Contact', path: '/contact' },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{
        backgroundColor: 'rgba(5, 13, 26, 0.92)',
        borderBottom: '1px solid var(--tac-line)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-3">
            <img
              src="/NSC_Logo.png"
              alt="NSC Logo"
              style={{ width: '2rem', height: '2rem', objectFit: 'contain' }}
            />
            <span
              className="tac-mono"
              style={{
                color: 'var(--tac-text)',
                fontWeight: 600,
                fontSize: '0.8rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
              }}
            >
              National Security Club
            </span>
          </Link>

          <div className="hidden md:flex items-center" style={{ gap: '2rem' }}>
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="tac-mono"
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--tac-accent)' : 'var(--tac-text-dim)',
                    paddingBottom: '4px',
                    borderBottom: isActive ? '1px solid var(--tac-accent)' : '1px solid transparent',
                    transition: 'color 150ms ease, border-color 150ms ease',
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: 'var(--tac-text)' }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div style={{ backgroundColor: 'rgba(3, 5, 9, 0.97)', borderTop: '1px solid var(--tac-line)' }}>
          <div className="px-4 pt-2 pb-4 space-y-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className="tac-mono block w-full text-left px-3 py-2"
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--tac-accent)' : 'var(--tac-text-dim)',
                    borderLeft: isActive ? '2px solid var(--tac-accent)' : '2px solid transparent',
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
