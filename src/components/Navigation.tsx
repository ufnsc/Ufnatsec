import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Get Involved', value: 'get-involved' },
    { label: 'Team', value: 'team' },
    { label: 'Sponsor Us', value: 'sponsor' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleTabClick = (value: string) => {
    onTabChange(value);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-[#0021A5]">UF NatSec</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleTabClick(item.value)}
                className={`transition-colors ${
                  activeTab === item.value
                    ? 'text-[#0021A5]'
                    : 'text-gray-700 hover:text-[#0021A5]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-[#0021A5]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleTabClick(item.value)}
                className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  activeTab === item.value
                    ? 'bg-[#0021A5]/10 text-[#0021A5]'
                    : 'text-gray-700 hover:bg-[#0021A5]/10 hover:text-[#0021A5]'
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
