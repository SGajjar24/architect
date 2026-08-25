import React from 'react';
import { useStudio } from '../context/StudioContext';

export const BlueprintOverlay: React.FC = () => {
  const { isBlueprintMode } = useStudio();

  if (!isBlueprintMode) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden select-none">
      {/* Blueprint Grid Lines */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Major 160px Grid Line Accents */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(14, 165, 233, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(14, 165, 233, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '160px 160px'
        }}
      />

      {/* Top Left Drafting Annotation */}
      <div className="absolute top-24 left-6 font-mono text-[10px] text-cyan-400/70 tracking-widest uppercase bg-slate-950/80 px-3 py-1.5 rounded-lg border border-cyan-500/30 backdrop-blur-md">
        <span>ARCH-CAD // DRAWING MODE: ACTIVE</span>
        <span className="ml-2 text-cyan-300">SCALE 1:100</span>
      </div>

      {/* Top Right Coordinate Crosshair */}
      <div className="absolute top-24 right-6 font-mono text-[10px] text-cyan-400/70 tracking-widest uppercase bg-slate-950/80 px-3 py-1.5 rounded-lg border border-cyan-500/30 backdrop-blur-md">
        <span>AHMEDABAD: 23.0225° N, 72.5714° E</span>
        <span className="ml-2 text-amber-300">CA/2018/103740</span>
      </div>

      {/* Bottom Crosshairs */}
      <div className="absolute bottom-6 left-6 font-mono text-[9px] text-cyan-500/50">
        +---+ STATUTORY RERA FORM 1 VERIFICATION PROTOCOL +---+
      </div>
    </div>
  );
};

export default BlueprintOverlay;
