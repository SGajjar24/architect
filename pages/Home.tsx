import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, Activity, Compass, Shield, LayoutTemplate, 
  HardHat, MoveRight, BrainCircuit, Sparkles, ArrowDown, PenTool,
  CheckCircle2, ExternalLink, Building, Award, MapPin
} from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import Card3D from '../components/Card3D';
import { IMAGES, SERVICES_LIST } from '../constants';
import { ALL_VERIFIED_PROJECTS } from '../data/projectsData';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        if (scrolled < 1000) {
          heroRef.current.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredProjects = ALL_VERIFIED_PROJECTS.slice(0, 4);

  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-stone-50">
      
      {/* 1. HERO SECTION - Cinematic & Full Screen */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Parallax Background */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none overflow-hidden">
           <div 
             ref={heroRef}
             className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
           >
             <img 
                src={IMAGES.HERO_ARCH} 
                alt="Luxury Architecture Vastu" 
                className="w-full h-full object-cover opacity-50 mix-blend-overlay animate-hero-zoom"
                loading="eager"
             />
           </div>
           
           {/* Ambient Glows */}
           <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
           <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/70 to-slate-950/90" />
           <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white via-white/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white flex flex-col items-center">
          <Reveal variant="fade-up" delay={100}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md mb-8 hover:bg-amber-500/20 transition-colors cursor-default">
              <Sparkles size={14} className="text-amber-400" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-200">
                48+ RERA-Verified Architectural Developments
              </span>
            </div>
          </Reveal>
          
          <Reveal variant="zoom" delay={300}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-[1.05] text-balance">
              Ancient Wisdom.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
                Statutory Precision.
              </span>
            </h1>
          </Reveal>
          
          <Reveal variant="fade-up" delay={500}>
            <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed text-balance">
              VastuCraft AI Studio blends the sacred geometry of <span className="text-amber-300 font-medium">Vastu Shastra</span> with the rigorous precision of <span className="text-sky-400 font-medium">statutory RERA compliance & AI monitoring</span>. Led by Ar. Vidhi S. Gajjar (CA/2018/103740) & Swetang Gajjar.
            </p>
          </Reveal>
          
          <Reveal variant="fade-up" delay={700}>
            <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
              <Button 
                variant="white"
                size="lg" 
                className="font-bold px-8 shadow-[0_0_25px_rgba(212,175,55,0.3)] bg-amber-600 hover:bg-amber-500 text-white border-0"
                onClick={() => navigate('/contact')}
              >
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white/30 hover:bg-white/10 backdrop-blur-md px-8 group" 
                onClick={() => navigate('/portfolio')}
              >
                Explore 48 Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Scroll Cue */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce cursor-pointer z-10 hover:text-white transition-colors"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth'})}
        >
          <ArrowDown size={28} strokeWidth={1.5} />
        </div>
      </section>

      {/* 2. STATUTORY TRUST INDICATORS */}
      <section className="bg-white border-b border-stone-200/70 py-12 relative z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: "RERA Registered Projects", value: "48+", sub: "100% Traceable" },
             { label: "Architect of Record License", value: "CA/2018/103740", sub: "Council of Architecture" },
             { label: "Cities across Gujarat", value: "6 Major", sub: "Ahmedabad, Gandhinagar, Surat..." },
             { label: "Professional Experience", value: "8+ Years", sub: "Senior Architect & Lead" }
           ].map((stat, i) => (
             <Reveal key={i} delay={i * 100} variant="fade-up">
               <div className="text-center p-4 rounded-xl hover:bg-stone-50 transition-colors">
                 <div className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 mb-1 font-mono tracking-tight">{stat.value}</div>
                 <div className="text-xs font-bold tracking-widest uppercase text-amber-700">{stat.label}</div>
                 <div className="text-[11px] text-slate-400 mt-0.5">{stat.sub}</div>
               </div>
             </Reveal>
           ))}
        </div>
      </section>

      {/* 3. VALUE PROPOSITION */}
      <section className="py-24 bg-stone-50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-16">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="max-w-2xl">
                <span className="text-amber-700 font-bold tracking-widest text-xs uppercase mb-2 block">The VastuCraft Methodology</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                  Design for the Soul.<br/>Build with Statutory Rigor.
                </h2>
              </div>
              <p className="text-stone-600 max-w-md pb-2 text-balance">
                We bridge sacred Vedic spatial orientation with statutory RERA Form 1 compliance and AI-driven site automation for high-value real estate.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Statutory RERA Mastery",
                subtitle: "48+ Projects Certified",
                text: "Ar. Vidhi S. Gajjar brings 8+ years as Architect of Record for premier developers (Shilp, Shaligram, Swati, Goyal & Co., Ratnaakar). Every project is designed to navigate bylaws and municipal certifications smoothly.",
                icon: <Shield className="w-8 h-8 text-amber-700" />
              },
              {
                title: "AI-Grade Precision",
                subtitle: "Smart Site Monitoring",
                text: "Swetang Gajjar applies Computer Vision and Edge AI for real-time site safety, crack and defect analysis, and structural monitoring, cutting construction deviations and rework costs.",
                icon: <Activity className="w-8 h-8 text-sky-500" />
              },
              {
                title: "Vastu Harmony",
                subtitle: "Energy Aligned Spaces",
                text: "We optimize solar orientation, wind corridors, magnetic grid lines, and spatial zoning to create residences and corporate headquarters that feel inherently balanced and prosperous.",
                icon: <Compass className="w-8 h-8 text-amber-600" />
              }
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 150} className="h-full">
                <div className="p-8 bg-white rounded-2xl shadow-sm border border-stone-200/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
                      <div className="group-hover:text-white transition-colors">{item.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-slate-900">{item.title}</h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-4 block">{item.subtitle}</span>
                    <p className="text-stone-600 leading-relaxed text-sm">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES SHOWCASE */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
             <div className="flex justify-between items-end mb-16">
               <div>
                  <span className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-2 block">Our Capabilities</span>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold">End-to-End Architectural Solutions</h2>
               </div>
               <Button variant="outline" className="hidden md:flex text-white border-white/20 hover:bg-white hover:text-slate-900" onClick={() => navigate('/services')}>
                 All Services
               </Button>
             </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.slice(0, 6).map((service, idx) => (
              <Reveal key={idx} delay={idx * 100} width="100%">
                <div 
                  className="group relative bg-slate-800/40 border border-white/10 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 h-full cursor-pointer overflow-hidden backdrop-blur-sm"
                  onClick={() => navigate('/services')}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 text-amber-400 opacity-80 group-hover:opacity-100 transition-opacity">
                       {service.icon === 'Building' && <LayoutTemplate size={32} />}
                       {service.icon === 'Sofa' && <Sparkles size={32} />}
                       {service.icon === 'Cpu' && <BrainCircuit size={32} />}
                       {service.icon === 'HardHat' && <HardHat size={32} />}
                       {service.icon === 'Compass' && <Compass size={32} />}
                       {service.icon === 'Frame' && <PenTool size={32} />}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-amber-300 transition-colors">{service.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">{service.desc}</p>
                    
                    <div className="flex items-center text-xs font-bold uppercase tracking-widest text-amber-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Explore Service <MoveRight className="ml-2 w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED PORTFOLIO - 3D Tilt Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                 <span className="text-amber-700 font-bold text-xs uppercase tracking-widest mb-2 block">Statutory Portfolio Highlights</span>
                 <h2 className="text-4xl font-serif font-bold text-slate-900">Selected Landmark Projects</h2>
              </div>
              <Button 
                variant="outline" 
                onClick={() => navigate('/portfolio')}
                className="self-start md:self-auto flex items-center gap-2 text-slate-900 border-slate-300 hover:bg-slate-900 hover:text-white"
              >
                Explore All 48 Projects <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.id} delay={i * 120}>
                <Card3D
                  maxTilt={6}
                  scale={1.02}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 flex flex-col group cursor-pointer"
                  onClick={() => navigate('/portfolio')}
                >
                  <div className="relative overflow-hidden bg-slate-900 h-72 w-full">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="bg-slate-900/80 backdrop-blur-md text-amber-300 border border-white/10 text-xs font-bold px-3 py-1 rounded-full uppercase">
                        {project.category}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-emerald-950/80 backdrop-blur-md text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        RERA Verified
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-xs flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        {project.city} &bull; {project.location.split(',')[0]}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold text-slate-500">
                        License: CA/2018/103740
                      </span>
                      <span className="text-xs font-bold text-amber-700 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        View Project &rarr;
                      </span>
                    </div>
                  </div>
                </Card3D>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_50%)]" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-widest mb-6">
              <Award className="w-4 h-4" />
              Trusted by Premier Developers Across Gujarat
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-6 leading-tight">
              Ready to Design Your Next Landmark?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light">
              Connect with Ar. Vidhi S. Gajjar & Swetang Gajjar for bespoke architectural planning, Vastu harmonization, and AI-enabled construction monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="white"
                size="lg"
                className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 shadow-lg border-0"
                onClick={() => navigate('/contact')}
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10 px-8"
                onClick={() => navigate('/portfolio')}
              >
                View 48 Projects Register
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;