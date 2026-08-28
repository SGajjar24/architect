import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'PROJECTS (48)', path: '/portfolio' },
    { name: 'PRACTICE', path: '/practice' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'bg-slate-950/80 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Perfectly aligned to left grid edge */}
        <Link to="/" className="flex items-center gap-3.5 group focus:outline-none shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <span className="font-serif font-bold text-base bg-gradient-to-br from-amber-200 to-amber-400 bg-clip-text text-transparent">
                VG
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-serif font-bold text-base sm:text-lg tracking-wider text-white group-hover:text-amber-300 transition-colors leading-none">
              STUDIO VIDHI GAJJAR
            </div>
            <div className="text-[10px] font-mono tracking-widest text-amber-400/90 flex items-center gap-1.5 uppercase mt-1">
              <span>CONTEMPORARY PRACTICE</span>
              <span>&bull;</span>
              <span className="text-slate-400 font-medium">GUJARAT</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links - Centered */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-mono font-semibold tracking-widest uppercase transition-all relative py-2 ${
                  isActive
                    ? 'text-amber-300'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action CTA - Perfectly aligned to right grid edge */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-amber-900/30 hover:scale-102 focus:outline-none font-mono uppercase"
          >
            <span>Commission Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex sm:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="sm:hidden border-t border-white/10 bg-slate-950/98 backdrop-blur-2xl px-6 py-6 space-y-4 animate-fade-in-up">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-mono font-semibold tracking-wider text-slate-200 hover:text-amber-300 py-3 border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center w-full py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs uppercase tracking-widest font-mono shadow-lg"
          >
            Commission Project
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;