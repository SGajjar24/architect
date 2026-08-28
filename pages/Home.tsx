import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudio } from '../context/StudioContext';
import HeroCinematicReel from '../components/HeroCinematicReel';
import Reveal from '../components/Reveal';
import { ALL_VERIFIED_PROJECTS } from '../data/projectsData';
import { 
  ArrowRight, 
  ArrowUpRight, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Building2,
  Compass,
  Layers,
  Award
} from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';
import { DeveloperMarquee } from '../components/DeveloperMarquee';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { isBlueprintMode } = useStudio();
  
  // Select 3 high-impact flagship developments for a clean, breathing showcase
  const flagshipProjects = ALL_VERIFIED_PROJECTS.slice(0, 3);

  return (
    <div className={`min-h-screen ${isBlueprintMode ? 'bg-slate-950 text-cyan-50' : 'bg-slate-950 text-slate-100'}`}>
      
      {/* 1. HERO SECTION WITH CINEMATIC ARCHITECTURAL FILM REEL */}
      <section className="relative h-screen min-h-[720px] max-h-[1080px] flex items-center justify-center overflow-hidden pt-20">
        
        {/* Fullscreen Architectural Story Cinematic Reel */}
        <HeroCinematicReel />

        {/* Ambient Vignette & Text Readability Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-slate-950/90 to-transparent pointer-events-none" />

        {/* Hero Copy Overlay */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pointer-events-none flex flex-col items-center">
          <Reveal variant="fade-up" delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-widest mb-6 backdrop-blur-md pointer-events-auto">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Contemporary Practice &bull; Statutory Master Planning</span>
            </div>
          </Reveal>

          <Reveal variant="zoom" delay={200}>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-balance mb-6">
              Sculpting Space.<br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent">
                Certifying Landmarks.
              </span>
            </h1>
          </Reveal>

          <Reveal variant="fade-up" delay={350}>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 text-balance">
              An architectural practice uniting contemporary spatial design, statutory GujRERA certification, and high-density urban planning across 48+ developments.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={450}>
            <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
              <MagneticButton
                onClick={() => navigate('/portfolio')}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold text-xs uppercase tracking-widest shadow-xl shadow-amber-900/30 w-full sm:w-auto"
                strength={20}
              >
                <span>Explore 48 Projects Register</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                onClick={() => navigate('/practice')}
                className="px-8 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 font-semibold text-xs uppercase tracking-widest backdrop-blur-md w-full sm:w-auto"
                strength={15}
              >
                Studio Philosophy
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. MINIMALIST METRIC STRIP (SLEEK & AIRY) */}
      <section className="relative z-10 bg-slate-950 border-y border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { label: "RERA Registered Developments", value: "48+", sub: "100% Publicly Traceable" },
              { label: "Statutory Clearance Record", value: "100%", sub: "Zero-Deficiency Approvals" },
              { label: "Regional Urban Reach", value: "6 Cities", sub: "Ahmedabad, Gandhinagar, Surat..." },
              { label: "Master Planned Footprint", value: "48 Sites", sub: "High-Rise & Commercial Hubs" }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center sm:items-start text-center sm:text-left py-2 px-4 lg:first:pl-0 lg:last:pr-0 border-l border-white/5 first:border-l-0"
              >
                <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-300 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 font-sans mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INFINITE DEVELOPER LOGO MARQUEE */}
      <DeveloperMarquee />

      {/* 4. CURATED SELECTED WORKS (3 FLAGSHIP DEVELOPMENTS) */}
      <section className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-amber-400 font-mono text-xs uppercase tracking-widest mb-2 block">
                  Curated Statutory Portfolio
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                  Featured Developments
                </h2>
              </div>

              <button
                onClick={() => navigate('/portfolio')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-amber-300 hover:text-amber-200 border border-white/10 text-xs font-mono uppercase tracking-wider transition-all self-start sm:self-auto"
              >
                <span>View Full 48 Projects Registry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>

          {/* Clean Editorial Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flagshipProjects.map((project, idx) => (
              <Reveal key={project.id} delay={idx * 150}>
                <div
                  onClick={() => navigate('/portfolio')}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-slate-900/40 border border-white/10 hover:border-amber-500/40 transition-all duration-500 flex flex-col shadow-xl hover:-translate-y-1.5"
                >
                  {/* Image Container with Zoom */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-950">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-slate-950/80 backdrop-blur-md text-amber-300 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase border border-amber-500/20">
                        {project.category}
                      </span>
                    </div>

                    {/* RERA Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 bg-emerald-950/80 backdrop-blur-md text-emerald-300 text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border border-emerald-500/30">
                        <CheckCircle2 className="w-3 h-3" />
                        RERA Verified
                      </span>
                    </div>

                    {/* Title and City */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-xs flex items-center gap-1 mt-1 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{project.city} &bull; {project.location.split(',')[0]}</span>
                      </p>
                    </div>
                  </div>

                  {/* Project Summary */}
                  <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-500 text-[11px]">Authorized Execution</span>
                      <span className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Inspect Record <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. TECTONIC STATEMENT & PHILOSOPHY MONOGRAPH */}
      <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950 border-t border-white/5 relative">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest mb-2">
              <Compass className="w-3.5 h-3.5" />
              Practice Philosophy
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              "Architecture is the orchestration of spatial geometry, natural illumination, and unyielding statutory rigor."
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed font-light pt-2">
              Every development led by Ar. Vidhi S. Gajjar is calibrated for Gujarat's regional climate, statutory GDCR zoning efficiency, and enduring structural beauty.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. CLEAN DIRECT COMMISSION CTA */}
      <section className="py-20 bg-slate-950 text-center relative overflow-hidden border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <Reveal>
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-950/30 via-slate-900 to-amber-950/30 border border-amber-500/30 space-y-4 shadow-2xl">
              <Award className="w-8 h-8 text-amber-400 mx-auto" />
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Commission Your Next Landmark
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                Consult with Ar. Vidhi S. Gajjar for statutory master planning, residential towers, commercial headquarters, and RERA certifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <MagneticButton
                  onClick={() => navigate('/contact')}
                  className="px-8 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs uppercase tracking-widest shadow-xl shadow-amber-950 w-full sm:w-auto"
                  strength={15}
                >
                  Initiate Project Dialogue &rarr;
                </MagneticButton>
                <MagneticButton
                  onClick={() => navigate('/portfolio')}
                  className="px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 font-mono text-xs uppercase tracking-widest w-full sm:w-auto"
                  strength={10}
                >
                  Explore 48 Projects
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
};

export default Home;