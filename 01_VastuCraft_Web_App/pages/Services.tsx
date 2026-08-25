import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, Sofa, Frame, Cpu, HardHat, Compass, Check, ArrowRight, PenTool } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { IMAGES } from '../constants';

const Services: React.FC = () => {
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

  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
          <div 
            ref={heroRef}
            className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform" 
          >
             <img 
               src={IMAGES.PROJECT_1} 
               alt="Services Background" 
               className="w-full h-full object-cover opacity-30 animate-hero-zoom"
             />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/40" />
          
          {/* Smoother Bottom Fade to Next Section (Stone-50) - Extended Height */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-stone-50 via-stone-50/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20">
          <Reveal variant="fade-up">
            <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">End-to-End Solutions</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Our Expertise</h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              We don't just draft plans; we orchestrate the entire lifecycle of a building using Vastu principles for the soul and AI technology for the structure.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 space-y-32 pb-24 pt-12">
        
        {/* Architecture */}
        <div id="architecture" className="scroll-mt-32">
          <Reveal width="100%">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="md:w-1/3 relative">
                <div className="absolute top-0 left-0 w-20 h-20 bg-secondary/10 rounded-full blur-2xl"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-secondary group hover:shadow-xl hover:bg-stone-50 transition-all duration-300">
                    <Building size={48} className="mb-6 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Architecture</h3>
                    <p className="text-xs font-bold uppercase text-stone-400 tracking-wider">RERA Compliant</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Regulations Met. <br/>Aesthetics Mastered.</h2>
                <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                  Led by Ar. Vidhi Gajjar, our architectural practice focuses on creating spaces that are legally robust and visually stunning. As an Architect of Record for major projects, Vidhi ensures your designs breeze through RERA and municipal approvals.
                </p>
                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
                  {['Massing & Zoning', 'Statutory Approvals', 'RERA Documentation', 'Site Coordination'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-slate-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="h-px bg-stone-200 w-full" />

        {/* Interior Design */}
        <div id="interiors" className="scroll-mt-32">
          <Reveal width="100%">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="md:w-1/3 relative">
                <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-secondary group hover:shadow-xl hover:bg-stone-50 transition-all duration-300">
                  <Sofa size={48} className="mb-6 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Interiors</h3>
                  <p className="text-xs font-bold uppercase text-stone-400 tracking-wider">Soulful Living</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Curated for Calm.</h2>
                <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                  We believe interiors should be a sanctuary. Our design philosophy merges modern minimalism with the warmth of Indian textures, ensuring every corner adheres to Vastu placement for furniture and lighting.
                </p>
                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
                  {['Space Planning', 'Material Selection', 'Lighting Design', 'Custom Furniture'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-slate-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="h-px bg-stone-200 w-full" />

        {/* Exterior & Facade */}
        <div id="exterior" className="scroll-mt-32">
          <Reveal width="100%">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="md:w-1/3 relative">
                <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-secondary group hover:shadow-xl hover:bg-stone-50 transition-all duration-300">
                  <PenTool size={48} className="mb-6 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Facade Design</h3>
                  <p className="text-xs font-bold uppercase text-stone-400 tracking-wider">First Impressions</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Identity & Protection.</h2>
                <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                  The skin of your building defines its character and performance. We design facades that are not only visually striking but also optimize thermal comfort and weather resistance.
                </p>
                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
                  {['Elevation Concepts', 'Cladding Selection', 'Landscape Integration', 'Weather Protection'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-slate-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="h-px bg-stone-200 w-full" />

        {/* AI Transformation */}
        <div id="ai-tech" className="scroll-mt-32">
          <Reveal width="100%">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="md:w-1/3 relative">
                <div className="relative bg-slate-900 p-8 rounded-2xl shadow-xl text-accent border border-slate-800 group hover:shadow-2xl hover:bg-slate-800 transition-all duration-300">
                  <Cpu size={48} className="mb-6 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">AI & Tech</h3>
                  <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">Industrial Grade</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">The Smart Site Revolution.</h2>
                <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                  Leveraging Swetang Gajjar's background in industrial automation, we bring factory-level precision to the construction site. No more guesswork—just data.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-4">
                    <div className="mt-1 bg-blue-50 p-2 rounded-lg text-accent"><HardHat size={20} /></div>
                    <div>
                      <h4 className="font-bold text-slate-900">Safety Compliance</h4>
                      <p className="text-stone-600 text-sm">Computer vision detects PPE violations instantly.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 bg-blue-50 p-2 rounded-lg text-accent"><Frame size={20} /></div>
                    <div>
                      <h4 className="font-bold text-slate-900">Quality Control</h4>
                      <p className="text-stone-600 text-sm">AI analysis of masonry and plastering against BIM models.</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" onClick={() => navigate('/ai-construction')}>
                  See How It Works
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="h-px bg-stone-200 w-full" />

        {/* Construction */}
        <div id="construction" className="scroll-mt-32">
          <Reveal width="100%">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="md:w-1/3 relative">
                <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-secondary group hover:shadow-xl hover:bg-stone-50 transition-all duration-300">
                  <HardHat size={48} className="mb-6 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Construction</h3>
                  <p className="text-xs font-bold uppercase text-stone-400 tracking-wider">Turnkey Execution</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Built to Last.</h2>
                <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                  We bridge the gap between design and reality. Our turnkey construction services ensure that what is drawn on paper is executed with precision on site, managing vendors, materials, and timelines.
                </p>
                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
                  {['Vendor Management', 'Quality Assurance', 'Timeline Tracking', 'Bill Verification'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-slate-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="h-px bg-stone-200 w-full" />

        {/* Vastu Consulting */}
        <div id="vastu" className="scroll-mt-32">
          <Reveal width="100%">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="md:w-1/3 relative">
                <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-secondary group hover:shadow-xl hover:bg-stone-50 transition-all duration-300">
                  <Compass size={48} className="mb-6 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Vastu Consulting</h3>
                  <p className="text-xs font-bold uppercase text-stone-400 tracking-wider">Geometric Harmony</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Science of Alignment.</h2>
                <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                  We decode Vastu Shastra not as superstition, but as the science of alignment—optimizing your home for solar paths, wind direction, and magnetic fields to ensure well-being.
                </p>
                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
                  {['Site Selection', 'Floor Plan Analysis', 'Remedial Vastu', 'Astro-Architecture'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-slate-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" onClick={() => navigate('/vastu')}>
                  Explore Vastu Principles <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </div>
  );
};

export default Services;