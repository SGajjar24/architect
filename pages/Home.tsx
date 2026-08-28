import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudio } from '../context/StudioContext';
import HeroCinematicReel from '../components/HeroCinematicReel';
import Card3D from '../components/Card3D';
import Reveal from '../components/Reveal';
import { ALL_VERIFIED_PROJECTS } from '../data/projectsData';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  Building2, 
  MapPin, 
  Award, 
  Sparkles, 
  Compass, 
  CheckCircle2, 
  Layers, 
  Grid 
} from 'lucide-react';

import { Partners } from '../components/Partners';
import { MagneticButton } from '../components/MagneticButton';
import { DeveloperMarquee } from '../components/DeveloperMarquee';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { isBlueprintMode } = useStudio();
  const flagshipProjects = ALL_VERIFIED_PROJECTS.slice(0, 4);

  return (
    <div className={`min-h-screen ${isBlueprintMode ? 'bg-slate-950 text-cyan-50' : 'bg-slate-950 text-slate-100'}`}>
      
      {/* 1. HERO SECTION WITH CINEMATIC ARCHITECTURAL FILM REEL */}
      <section className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden pt-20">
        
        {/* Fullscreen Architectural Story Cinematic Reel */}
        <HeroCinematicReel />

        {/* Ambient Vignette & Text Readability Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-slate-950/90 to-transparent pointer-events-none" />

        {/* Hero Copy Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pointer-events-none flex flex-col items-center">
          <Reveal variant="fade-up" delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-widest mb-6 backdrop-blur-md pointer-events-auto">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Contemporary Practice &bull; Statutory Master Planning</span>
            </div>
          </Reveal>

          <Reveal variant="zoom" delay={250}>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-balance mb-6">
              Sculpting Space.<br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent">
                Certifying Landmarks.
              </span>
            </h1>
          </Reveal>

          <Reveal variant="fade-up" delay={400}>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 text-balance">
              An architectural practice uniting contemporary spatial design, statutory GujRERA certification, and high-density urban planning across 48+ developments.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={550}>
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

      {/* 2. STATUTORY TRUST METRICS HUD */}
      <section className="relative z-10 bg-slate-950 border-y border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "RERA Registered Developments", value: "48+", sub: "100% Publicly Traceable" },
            { label: "Statutory Approvals", value: "100%", sub: "Zero-Deficiency Track Record" },
            { label: "Regional Urban Reach", value: "6 Cities", sub: "Ahmedabad, Gandhinagar, Surat..." },
            { label: "Master Planned Footprint", value: "48 Sites", sub: "High-Rise & Commercial Hubs" }
          ].map((stat, i) => (
            <Reveal key={i} delay={i * 100} variant="fade-up">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all text-center">
                <div className="text-2xl sm:text-4xl font-serif font-bold text-white mb-1 font-mono tracking-tight text-amber-300">
                  {stat.value}
                </div>
                <div className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">{stat.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. INFINITE DEVELOPER LOGO MARQUEE SCROLLER */}
      <DeveloperMarquee />

      {/* 3. 3D PERSPECTIVE FEATURED PROJECTS SHOWCASE */}
      <section className="py-28 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-amber-400 font-mono text-xs uppercase tracking-widest mb-2 block">
                  Curated Statutory Portfolio
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                  Landmarks in Execution
                </h2>
              </div>

              <button
                onClick={() => navigate('/portfolio')}
                className="self-start md:self-auto flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-amber-300 hover:text-amber-200 transition-colors uppercase"
              >
                <span>View Full 48-Project Registry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>

          {/* 3D Perspective Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {flagshipProjects.map((project, idx) => (
              <Reveal key={project.id} delay={idx * 120}>
                <Card3D
                  maxTilt={8}
                  scale={1.02}
                  className="bg-slate-900/60 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col group cursor-pointer"
                  onClick={() => navigate('/portfolio')}
                >
                  <div className="relative h-72 w-full overflow-hidden bg-slate-950">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="bg-slate-950/80 backdrop-blur-md text-amber-300 text-[11px] font-mono font-bold px-3 py-1 rounded-full uppercase border border-amber-500/20">
                        {project.category}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-emerald-950/80 backdrop-blur-md text-emerald-300 text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border border-emerald-500/30">
                        <CheckCircle2 className="w-3 h-3" />
                        RERA Verified
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-xs flex items-center gap-1 mt-1 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        {project.city} &bull; {project.location.split(',')[0]}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-500">COA: CA/2018/103740</span>
                      <span className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Explore Details <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Card3D>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRACTICE METHODOLOGY & PHILOSOPHY */}
      <section className="py-28 bg-slate-900/40 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1 space-y-6">
                <span className="text-amber-400 font-mono text-xs uppercase tracking-widest block">
                  Studio Methodology
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
                  Design Grounded in Statutory Rigor.
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We balance visionary spatial aesthetics with the rigorous regulatory compliance required by modern institutional real estate developments across Gujarat.
                </p>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Statutory Approvals & Form 1",
                    desc: "Full architectural certification, municipal GDCR compliance, and GujRERA project registration oversight.",
                    icon: <ShieldCheck className="w-6 h-6 text-amber-400" />
                  },
                  {
                    title: "High-Density Residential Towers",
                    desc: "Optimized spatial layouts, structural grids, aerodynamic wind corridors, and luxury apartment planning.",
                    icon: <Building2 className="w-6 h-6 text-sky-400" />
                  },
                  {
                    title: "Corporate Headquarters & Retail",
                    desc: "Flagship commercial massing, glass curtain wall elevations, vehicular circulation, and atrium design.",
                    icon: <Layers className="w-6 h-6 text-indigo-400" />
                  },
                  {
                    title: "AI Site Monitoring Integration",
                    desc: "Partnered with smart automation systems for computer-vision quality checks and on-site compliance.",
                    icon: <Sparkles className="w-6 h-6 text-amber-300" />
                  }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-500/20 transition-all space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEW PARTNERS SECTION */}
      <Partners />

      {/* 5. CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-center relative overflow-hidden border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-300 text-xs font-mono font-semibold uppercase tracking-widest">
              <Award className="w-4 h-4" />
              Trusted by Top Institutional Developers
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              Commission Your Next Architectural Landmark
            </h2>

            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Consult with Ar. Vidhi S. Gajjar for statutory RERA architectural planning, master layouts, and bespoke luxury residential & commercial projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-amber-950"
              >
                Schedule Architectural Consultation
              </button>
              <button
                onClick={() => navigate('/portfolio')}
                className="px-8 py-3.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-white/10 font-mono text-xs uppercase tracking-widest"
              >
                Inspect 48 Statutory Records
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;