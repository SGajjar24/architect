import React, { useState, useEffect, useRef } from 'react';
import { useStudio } from '../context/StudioContext';
import { 
  Building2, 
  Layers, 
  Compass, 
  Cpu, 
  Play, 
  Pause, 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  Maximize2
} from 'lucide-react';

interface StoryChapter {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  location: string;
  imageUrl: string;
  metrics: string;
  icon: React.ReactNode;
}

const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: 'residential',
    number: '01',
    category: 'High-Density Residential Architecture',
    title: 'Skyward Living & Spatial Harmony',
    subtitle: 'Sculpted towers engineered with cross-ventilation, expansive cantilevered terraces, and Vastu-aligned residential typologies.',
    location: 'Shilaj & Shela Urban Corridor, Ahmedabad',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1920',
    metrics: '48+ RERA Authorized Sites • 22+ Storey Towers',
    icon: <Building2 className="w-4 h-4 text-amber-400" />
  },
  {
    id: 'commercial',
    number: '02',
    category: 'Corporate Hubs & Grade-A Facades',
    title: 'Monolithic Tectonics & Glass Envelopes',
    subtitle: 'High-impact corporate headquarters with double-height atriums, energy-efficient Low-E curtain walls, and seamless vehicular circulation.',
    location: 'Science City & Ambli Corporate Corridor',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920',
    metrics: 'Double-Height Atriums • Grade-A Commercial Assets',
    icon: <Layers className="w-4 h-4 text-sky-400" />
  },
  {
    id: 'master-planning',
    number: '03',
    category: 'Regional Master Planning & Land Sanctions',
    title: 'Urban Fabric & Statutory Precision',
    subtitle: 'Large-scale plotted developments and master layouts designed for optimal FSI utilization, GDCR compliance, and sustainable density.',
    location: 'Gandhinagar, Sanand & North Gujarat',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920',
    metrics: '100% Statutory Clearance • Zero-Deficiency Track Record',
    icon: <Compass className="w-4 h-4 text-emerald-400" />
  },
  {
    id: 'computational-ai',
    number: '04',
    category: 'Computational Intelligence & Site AI',
    title: 'Computer Vision & Defect Monitoring',
    subtitle: 'Pioneering AI-driven automated on-site safety compliance, edge vision defect detection, and intelligent building lifecycle analytics.',
    location: 'Site Safety AI Directed by Swetang Gajjar',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1920',
    metrics: 'Real-Time Edge Computer Vision • Predictive Quality Audits',
    icon: <Cpu className="w-4 h-4 text-purple-400" />
  }
];

export const HeroCinematicReel: React.FC = () => {
  const { isBlueprintMode } = useStudio();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeStory = STORY_CHAPTERS[currentIdx];

  // Auto-advancing film reel
  useEffect(() => {
    if (!isPlaying) return;

    const interval = 50; // Update progress every 50ms
    const totalDuration = 6000; // 6 seconds per slide
    const step = (interval / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIdx((c) => (c + 1) % STORY_CHAPTERS.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, currentIdx]);

  const handleSelectChapter = (index: number) => {
    setCurrentIdx(index);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentIdx((c) => (c + 1) % STORY_CHAPTERS.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIdx((c) => (c - 1 + STORY_CHAPTERS.length) % STORY_CHAPTERS.length);
    setProgress(0);
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden select-none bg-slate-950">
      {/* 1. BACKGROUND CINEMATIC VISUAL REEL WITH SLOW KEN-BURNS MOTION */}
      {STORY_CHAPTERS.map((story, idx) => {
        const isActive = idx === currentIdx;
        return (
          <div
            key={story.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
            }`}
          >
            {/* High-Resolution Architectural Visual with Smooth Cinema Pan */}
            <div
              className={`w-full h-full transform transition-transform duration-[8000ms] ease-out ${
                isActive ? 'scale-105 translate-x-1 translate-y-1' : 'scale-100 translate-x-0 translate-y-0'
              } ${isBlueprintMode ? 'filter grayscale contrast-200 invert-[0.2] brightness-50' : ''}`}
            >
              <img
                src={story.imageUrl}
                alt={story.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Cyan blueprint tint when in Blueprint mode */}
            {isBlueprintMode && (
              <div className="absolute inset-0 bg-sky-950/70 mix-blend-color" />
            )}
          </div>
        );
      })}

      {/* 2. ATMOSPHERIC VIGNETTE & CINEMATIC GRADIENTS */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-slate-950/90 pointer-events-none" />

      {/* Subtle Architectural Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      {/* 3. TECHNICAL HUD & STORY CHAPTER CONTROLS (BOTTOM BAR) */}
      <div className="absolute bottom-6 left-0 right-0 z-20 hidden sm:block pointer-events-auto">
        <div className="max-w-7xl mx-auto px-6 flex items-end justify-between">
          {/* Left: Active Story HUD Caption */}
          <div className="max-w-md p-4 rounded-2xl bg-slate-950/70 border border-white/10 backdrop-blur-xl space-y-1 shadow-2xl">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-300">
                ARCH-REEL // CHAPTER {activeStory.number} &bull; {activeStory.category}
              </span>
            </div>
            <div className="text-xs font-serif font-bold text-white tracking-tight">
              {activeStory.title}
            </div>
            <div className="text-[11px] text-slate-400 font-sans line-clamp-1">
              {activeStory.location}
            </div>
          </div>

          {/* Right: Chapter Switcher & Play/Pause Controls */}
          <div className="flex items-center gap-2 p-2 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-xl shadow-2xl">
            {/* Chapter Buttons */}
            <div className="flex items-center gap-1">
              {STORY_CHAPTERS.map((story, i) => {
                const isSelected = i === currentIdx;
                return (
                  <button
                    key={story.id}
                    onClick={() => handleSelectChapter(i)}
                    className={`relative px-3 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
                      isSelected
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                        : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span>{story.number}</span>
                    <span className="hidden md:inline text-[11px]">{story.id.split('-')[0].toUpperCase()}</span>
                    
                    {/* Progress fill line on active chapter button */}
                    {isSelected && isPlaying && (
                      <div 
                        className="absolute bottom-0 left-0 h-0.5 bg-amber-400 rounded-full transition-all duration-75"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="h-4 w-px bg-white/10 mx-1" />

            {/* Prev / Next & Play / Pause */}
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                aria-label="Previous Chapter"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause Story Reel" : "Play Story Reel"}
                className="p-2 rounded-lg text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 transition-colors"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={handleNext}
                aria-label="Next Chapter"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-Friendly Chapter Progress Bar on Top */}
      <div className="absolute top-24 left-0 right-0 z-20 sm:hidden">
        <div className="max-w-7xl mx-auto px-6 flex gap-1.5">
          {STORY_CHAPTERS.map((_, i) => (
            <div 
              key={i} 
              className="flex-1 h-1 rounded-full bg-white/20 overflow-hidden"
            >
              <div 
                className={`h-full bg-amber-400 transition-all ${
                  i === currentIdx ? 'duration-75' : i < currentIdx ? 'w-full' : 'w-0'
                }`}
                style={{ width: i === currentIdx ? `${progress}%` : i < currentIdx ? '100%' : '0%' }}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HeroCinematicReel;
