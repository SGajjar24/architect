import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark'; // 'light' for dark backgrounds (White text), 'dark' for light backgrounds (Dark text)
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  // ==============================================================================
  // CUSTOMIZATION GUIDE:
  // ==============================================================================
  // To use an IMAGE LOGO:
  // 1. Uncomment the <img> block below.
  // 2. Comment out the "Text / Icon Logo" block.
  // 3. Place your logo file (e.g., logo.png) in the /public folder.
  // ==============================================================================

  /* 
  // --- OPTION 1: IMAGE LOGO ---
  return (
    <img 
      src={variant === 'light' ? '/logo-white.png' : '/logo-dark.png'} 
      alt="VastuCraft Logo" 
      className={`h-10 w-auto object-contain ${className}`} 
    />
  );
  */

  // --- OPTION 2: TEXT / ICON LOGO (Current) ---
  
  // Dynamic styles based on variant
  const boxClass = variant === 'light' 
    ? 'bg-white/10 text-white border border-white/10 backdrop-blur-sm group-hover:bg-white group-hover:text-slate-900' 
    : 'bg-slate-900 text-white group-hover:bg-secondary';

  const textClass = variant === 'light' ? 'text-white' : 'text-slate-900';
  const subTextClass = variant === 'light' ? 'text-stone-300' : 'text-secondary';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon Box */}
      <div className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 shadow-lg ${boxClass}`}>
        <span className="font-serif font-bold text-lg">V</span>
      </div>
      
      {/* Text */}
      <div className="flex flex-col items-start leading-none">
        <span className={`font-serif font-bold text-xl tracking-tight transition-colors duration-300 ${textClass}`}>
          VastuCraft
        </span>
        <span className={`text-[10px] font-bold tracking-[0.2em] uppercase mt-1 transition-colors duration-300 ${subTextClass}`}>
          AI Studio
        </span>
      </div>
    </div>
  );
};

export default Logo;