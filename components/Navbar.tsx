import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // "Transparent" state applies when at top of ANY page (over dark hero)
  // We assume all pages now have a dark hero section.
  const isDarkHero = !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Vastu', path: '/vastu' },
    { name: 'AI Tech', path: '/ai-construction' },
    { name: 'Portfolio', path: '/portfolio' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // --- Dynamic Styling Classes ---
  
  // Determine Logo Variant
  const logoVariant = (isOpen || isDarkHero) ? 'light' : 'dark';

  // Nav Pill Container Style
  const navPillClass = scrolled 
    ? 'bg-slate-100/80 border-slate-200/50 backdrop-blur-md' 
    : (isDarkHero 
        ? 'bg-white/10 border-white/10 backdrop-blur-md' 
        : 'bg-white/40 border-white/40 backdrop-blur-sm shadow-sm');

  // Action Button Style
  const actionButtonClass = isDarkHero 
    ? 'bg-white text-slate-900 hover:bg-stone-100 shadow-black/5' 
    : 'bg-slate-900 text-white hover:bg-secondary shadow-slate-900/20';

  // Mobile Toggle Button Style
  const mobileToggleClass = isOpen 
    ? 'bg-white text-slate-900 hover:bg-slate-200 shadow-lg' 
    : (isDarkHero
        ? 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md'
        : 'bg-slate-100 text-slate-900 hover:bg-slate-200');

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-in-out ${
          scrolled 
            ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/50' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            
            {/* Logo Area */}
            <div className="relative z-[70]">
              <button onClick={() => handleNavigation('/')} className="focus:outline-none group">
                <Logo variant={logoVariant} />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className={`flex items-center space-x-1 p-1.5 rounded-full border transition-all duration-500 ${navPillClass}`}>
                {navLinks.map((link) => {
                   const active = isActive(link.path);
                   let linkClass = "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none ";
                   if (active) {
                     linkClass += "bg-white text-slate-900 shadow-md transform scale-105";
                   } else if (isDarkHero) {
                     linkClass += "text-stone-300 hover:text-white hover:bg-white/10";
                   } else {
                     linkClass += "text-slate-600 hover:text-slate-900 hover:bg-white/50";
                   }

                   return (
                    <button
                      key={link.name}
                      onClick={() => handleNavigation(link.path)}
                      className={linkClass}
                    >
                      {link.name}
                    </button>
                   );
                })}
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center justify-end gap-4">
              <button 
                onClick={() => handleNavigation('/contact')}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2 ${actionButtonClass}`}
              >
                Start Project <ArrowRight size={14} />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center lg:hidden z-[70]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-full focus:outline-none transition-colors duration-300 ${mobileToggleClass}`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[65] bg-slate-900 transition-all duration-500 ease-in-out lg:hidden flex flex-col ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="flex-1 flex flex-col justify-center px-8 pt-20 pb-8 overflow-y-auto">
          <div className="space-y-6">
            {navLinks.map((link, idx) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.path)}
                className={`block text-left text-4xl md:text-5xl font-serif font-bold transition-all duration-300 group flex items-center gap-4 ${
                  isActive(link.path) ? 'text-secondary translate-x-2' : 'text-white hover:text-slate-300'
                }`}
                style={{ 
                  transitionDelay: `${100 + (idx * 50)}ms`,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateX(0)' : 'translateX(-20px)'
                }}
              >
                <span className="relative">
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 bg-secondary rounded-full"></span>
                  )}
                </span>
                <ArrowRight className={`opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${isActive(link.path) ? 'hidden' : 'block'}`} size={28} strokeWidth={1.5} />
              </button>
            ))}

            <button
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-4 text-left text-2xl md:text-3xl font-serif font-bold text-slate-500 hover:text-white transition-all duration-300 mt-8"
                style={{ 
                  transitionDelay: `${100 + (navLinks.length * 50)}ms`,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateX(0)' : 'translateX(-20px)'
                }}
            >
                <span className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-colors">
                  <X size={20} />
                </span>
                <span>Close</span>
            </button>
          </div>

          <div 
            className="mt-12 pt-12 border-t border-slate-800/50 grid gap-8 transition-all duration-700 delay-300"
            style={{ 
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <button 
              onClick={() => handleNavigation('/contact')}
              className="bg-white text-slate-900 w-full py-4 rounded-xl text-lg font-bold hover:bg-secondary hover:text-white transition-all duration-300 shadow-lg shadow-black/20"
            >
              Start Your Project
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="shrink-0 text-secondary" />
                <p className="text-sm">Main Studio,<br/>{CONTACT_INFO.ADDRESS_LINE_2}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="shrink-0 text-secondary" />
                <p className="text-sm">{CONTACT_INFO.PHONE_DISPLAY}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;