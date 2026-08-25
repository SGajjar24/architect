import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div 
      className={`fixed bottom-24 right-6 z-40 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="p-3 bg-white text-slate-900 rounded-full shadow-lg border border-slate-200 hover:bg-slate-100 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all hover:-translate-y-1 group"
        aria-label="Back to top"
      >
        <ArrowUp size={20} className="group-hover:animate-bounce" />
      </button>
    </div>
  );
};

export default BackToTopButton;