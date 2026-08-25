import React, { useEffect, useRef, useState } from 'react';

type RevealVariant = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: "fit-content" | "100%";
  variant?: RevealVariant;
  threshold?: number;
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className = '', 
  delay = 0, 
  width = "100%", 
  variant = 'fade-up',
  threshold = 0.15 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getTransform = () => {
    if (!isVisible) {
      switch (variant) {
        case 'fade-up': return 'translateY(40px)';
        case 'slide-left': return 'translateX(-40px)';
        case 'slide-right': return 'translateX(40px)';
        case 'zoom': return 'scale(0.95)';
        default: return 'translateY(0)';
      }
    }
    return 'translate(0) scale(1)';
  };

  const getOpacity = () => isVisible ? 1 : 0;

  return (
    <div
      ref={ref}
      style={{ width }}
      className={className}
    >
      <div 
        style={{ 
          transitionDuration: '1000ms',
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          transitionDelay: `${delay}ms`,
          transform: getTransform(),
          opacity: getOpacity(),
        }}
        className="will-change-transform will-change-opacity"
      >
        {children}
      </div>
    </div>
  );
};

export default Reveal;