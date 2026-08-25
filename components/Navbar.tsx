import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useStudio } from '../context/StudioContext';
import { Menu, X, Compass, Grid, Sparkles, Award, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isBlueprintMode, toggleBlueprintMode } = useStudio();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-4 sm:px-8">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 px-6 py-3.5 flex items-center justify-between ${
          isScrolled || isMobileMenuOpen
            ? 'bg-slate-950/90 backdrop-blur-xl border border-white/10 shadow-2xl'
            : 'bg-slate-950/60 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <span className="font-serif font-bold text-lg bg-gradient-to-br from-amber-200 to-amber-400 bg-clip-text text-transparent">
                VG
              </span>
            </div>
          </div>
          <div>
            <div className="font-serif font-bold text-base sm:text-lg tracking-wider text-white group-hover:text-amber-300 transition-colors">
              STUDIO VIDHI GAJJAR
            </div>
            <div className="text-[10px] font-mono tracking-widest text-amber-400/90 flex items-center gap-1.5 uppercase">
              <span>ARCHITECT</span>
              <span>&bull;</span>
              <span className="text-slate-400 font-bold">CA/2018/103740</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-mono font-semibold tracking-widest uppercase transition-all relative py-1 ${
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

        {/* Actions Toolbar */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Blueprint CAD Mode Switcher */}
          <button
            onClick={toggleBlueprintMode}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all border ${
              isBlueprintMode
                ? 'bg-cyan-950 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
            title="Toggle Technical Architectural CAD Grid"
          >
            <Grid className={`w-3.5 h-3.5 ${isBlueprintMode ? 'text-cyan-400 animate-pulse' : ''}`} />
            <span>{isBlueprintMode ? 'CAD: ON' : 'CAD GRID'}</span>
          </button>

          {/* Consultation CTA Button */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-amber-900/30 hover:scale-102 focus:outline-none"
          >
            <span>Commission Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleBlueprintMode}
            className={`p-2 rounded-lg border text-xs font-mono ${
              isBlueprintMode
                ? 'bg-cyan-950 border-cyan-400 text-cyan-300'
                : 'bg-white/5 border-white/10 text-slate-400'
            }`}
          >
            <Grid className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="sm:hidden mt-2 p-6 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-4 animate-fade-in-up">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-mono font-semibold tracking-wider text-slate-200 hover:text-amber-300 py-2 border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center w-full py-3 rounded-xl bg-amber-600 text-white font-bold text-xs uppercase tracking-widest"
          >
            Commission Project
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;