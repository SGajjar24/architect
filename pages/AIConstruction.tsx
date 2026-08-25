import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Cpu, Activity, ShieldCheck, BarChart3, Users } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { IMAGES } from '../constants';

const AIConstruction: React.FC = () => {
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

  const handleContactClick = () => {
    navigate('/contact', { state: { service: 'AI Construction Monitoring' } });
  };

  return (
    <div className="w-full bg-slate-50">
      {/* AI Hero */}
      <section className="relative h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
          {/* Parallax Background */}
          <div 
            ref={heroRef}
            className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform" 
          >
            <img 
              src={IMAGES.HERO_AI} 
              alt="AI Background" 
              className="w-full h-full object-cover opacity-40 animate-hero-zoom" 
            />
          </div>
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/60 to-slate-900/80" />
          
          {/* Smoother Bottom Fade to Next Section (White) - Extended Height */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center pt-20">
          <Reveal variant="fade-up">
            <div className="inline-block px-4 py-1.5 border border-accent/30 bg-accent/10 backdrop-blur-md rounded-full text-accent text-sm font-bold tracking-wider uppercase mb-6">
              Powered by Advanced AI & Computer Vision
            </div>
          </Reveal>
          
          <Reveal variant="zoom" delay={200}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight leading-tight">
              From Smart Factories to <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                Smart Buildings
              </span>
            </h1>
          </Reveal>

          <Reveal variant="fade-up" delay={400}>
            <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-light">
              We adapt industrial-grade AI and IoT technology to monitor your construction quality, safety, and timeline in real-time.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={600}>
            <Button size="lg" className="bg-accent hover:bg-blue-600 border-none shadow-[0_0_30px_rgba(14,165,233,0.3)] px-8" onClick={handleContactClick}>
              Request an AI Demo
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal variant="slide-right">
              <div>
                 <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Computer Vision on Site</h2>
                 <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                   Traditional site visits miss details. Our AI models analyze video feeds from site cameras to detect defects, verify material usage, and ensure workers are wearing safety gear (PPE).
                 </p>
                 
                 <div className="space-y-6">
                   {[
                     { icon: <ShieldCheck className="text-green-500" />, title: "Safety Compliance", desc: "Auto-detect missing helmets or vests." },
                     { icon: <Activity className="text-red-500" />, title: "Defect Detection", desc: "Identify masonry cracks or uneven plastering instantly." },
                     { icon: <Camera className="text-blue-500" />, title: "Progress Tracking", desc: "Compare daily footage against BIM models." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                       <div className="mt-1 bg-slate-50 p-3 rounded-full h-fit border border-slate-100">{item.icon}</div>
                       <div>
                         <h4 className="font-bold text-slate-900">{item.title}</h4>
                         <p className="text-slate-500 text-sm">{item.desc}</p>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>
            </Reveal>
            
            {/* Visual Representation */}
            <Reveal variant="slide-left" delay={200}>
              <div className="relative bg-slate-100 rounded-xl p-8 border border-slate-200">
                 <div className="absolute top-4 right-4 animate-pulse">
                   <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                 </div>
                 <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" alt="Tech Analysis" className="rounded-lg shadow-lg mb-4 grayscale hover:grayscale-0 transition-all duration-500" />
                 <div className="bg-slate-900 text-green-400 font-mono text-xs p-4 rounded-lg overflow-hidden border border-slate-700">
                   <p>{`> Analyzing stream: CAMERA_04`}</p>
                   <p>{`> PPE Check: PASS`}</p>
                   <p>{`> Material Est: CEMENT_BAGS = 45`}</p>
                   <p className="animate-pulse">{`> Status: MONITORING ACTIVE`}</p>
                 </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cost & Cloud */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Cost & Performance Optimization</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Swetang's expertise in AWS/Azure helps developers reduce operational cloud costs by up to 40%.
              </p>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "IoT Integration", icon: <Cpu size={32} />, desc: "Connect temperature, humidity, and occupancy sensors for long-term building health." },
              { title: "Digital Twin", icon: <BarChart3 size={32} />, desc: "A live digital replica of your building to predict maintenance needs." },
              { title: "Smart Dashboards", icon: <Activity size={32} />, desc: "Real-time analytics for developers to track multiple sites." },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:bg-blue-50 transition-colors group h-full border border-slate-100 hover:border-blue-100">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-serif">{card.title}</h3>
                  <p className="text-slate-500">{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-white border-t border-slate-200">
         <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="flex flex-col items-center text-center mb-16">
                <div className="bg-slate-100 p-4 rounded-full mb-6 text-slate-700">
                   <Users className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Engagement Models</h2>
                <p className="text-slate-600 max-w-2xl text-lg">Flexible solutions whether you are building a single villa or a township.</p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               <Reveal delay={100} className="h-full">
                 <div className="p-8 border border-slate-200 rounded-2xl hover:border-accent transition-colors h-full flex flex-col">
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">For Homeowners</h3>
                    <span className="inline-block w-fit bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded mb-6">Lightweight Monitoring</span>
                    <p className="text-slate-600 mb-8 flex-1">
                       Perfect for individual bungalow or villa projects. We deploy portable sensors and conduct periodic AI drone scans to ensure your contractor is delivering on promises.
                    </p>
                    <Button variant="outline" fullWidth onClick={handleContactClick}>
                      Get Homeowner Kit
                    </Button>
                 </div>
               </Reveal>
               
               <Reveal delay={200} className="h-full">
                 <div className="p-8 border border-slate-200 rounded-2xl hover:border-accent transition-colors bg-slate-50 h-full flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full"></div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">For Developers</h3>
                    <span className="inline-block w-fit bg-accent text-white text-xs font-bold px-2 py-1 rounded mb-6">Site-Wide System</span>
                    <p className="text-slate-600 mb-8 flex-1">
                       Full-scale deployment for high-rises and townships. Includes permanent CCTV analysis, labor tracking, inventory management, and a centralized cloud dashboard.
                    </p>
                    <Button variant="primary" fullWidth onClick={handleContactClick} className="bg-slate-900 hover:bg-slate-800">
                      Schedule Developer Demo
                    </Button>
                 </div>
               </Reveal>
            </div>
         </div>
      </section>
    </div>
  );
};

export default AIConstruction;