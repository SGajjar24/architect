import React, { useState, useRef, useEffect } from 'react';
import { Layers, Sparkles } from 'lucide-react';

interface DrawingComparisonSliderProps {
  renderImage: string;
  title: string;
  className?: string;
}

export const DrawingComparisonSlider: React.FC<DrawingComparisonSliderProps> = ({
  renderImage,
  title,
  className = ''
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  useEffect(() => {
    const handleGlobalEnd = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalEnd);
    window.addEventListener('touchend', handleGlobalEnd);
    return () => {
      window.removeEventListener('mouseup', handleGlobalEnd);
      window.removeEventListener('touchend', handleGlobalEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className={`relative select-none overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl touch-none ${className}`}
      style={{ cursor: isDragging ? 'ew-resize' : 'default' }}
    >
      {/* 1. BOTTOM LAYER: PHOTOREALISTIC RENDER */}
      <div className="relative h-80 w-full overflow-hidden">
        <img
          src={renderImage}
          alt={`${title} Render`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        
        {/* Render Label */}
        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-amber-300 backdrop-blur-md border border-amber-500/30">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>Executed Render</span>
        </div>
      </div>

      {/* 2. TOP LAYER: CAD SCHEMATIC BLUEPRINT (CLIPPED) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div className="relative h-full w-full bg-slate-950">
          {/* Blueprint styled render with blue monochrome filter & CAD grid */}
          <img
            src={renderImage}
            alt={`${title} CAD Schematic`}
            className="h-full w-full object-cover filter grayscale contrast-150 brightness-75 invert-[0.15]"
            loading="lazy"
          />
          {/* Cyan blueprint tint overlay */}
          <div className="absolute inset-0 bg-sky-950/60 mix-blend-color" />
          {/* Technical blueprint grid overlay */}
          <div 
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(56, 189, 248, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.3) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />
          {/* Crosshairs & Technical HUD text */}
          <div className="absolute top-3 left-4 text-[10px] font-mono font-bold text-sky-400/80 uppercase tracking-widest pointer-events-none">
            ARCH-CAD // DRAWING SCHEMATIC &bull; 1:100
          </div>

          {/* Schematic Label */}
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-sky-950/90 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-sky-300 backdrop-blur-md border border-sky-500/40">
            <Layers className="w-3 h-3 text-sky-400" />
            <span>CAD Schematic</span>
          </div>
        </div>
      </div>

      {/* 3. INTERACTIVE SLIDER DIVIDER BAR */}
      <div
        className="absolute top-0 bottom-0 z-20 w-px bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.6)] cursor-ew-resize flex items-center justify-center group hover:bg-amber-300 transition-colors"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* Sleek Architect Drag Handle */}
        <div className="absolute flex h-14 w-1.5 flex-col items-center justify-center gap-1 rounded-full bg-amber-400/20 backdrop-blur-md border border-amber-400/50 shadow-2xl group-hover:scale-y-110 group-hover:bg-amber-400/40 transition-all">
          <div className="h-1.5 w-0.5 rounded-full bg-amber-200"></div>
          <div className="h-1.5 w-0.5 rounded-full bg-amber-200"></div>
          <div className="h-1.5 w-0.5 rounded-full bg-amber-200"></div>
        </div>
      </div>
    </div>
  );
};

export default DrawingComparisonSlider;
