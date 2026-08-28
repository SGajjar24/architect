import React from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Card3D from '../components/Card3D';
import { 
  Building2, 
  ShieldCheck, 
  Layers, 
  Compass, 
  Cpu, 
  Award, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';

export const Practice: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Studio Practice & Capabilities
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-tight max-w-4xl">
            Where Spatial Artistry Meets Regulatory Precision.
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl mt-4 font-light leading-relaxed">
            Studio Vidhi Gajjar operates at the intersection of contemporary architectural design and statutory real estate governance. Every project is developed to elevate living standards while meeting all municipal and GujRERA mandates.
          </p>
        </Reveal>
      </div>

      {/* Core Practice Pillars */}
      <div className="max-w-7xl mx-auto px-6 space-y-16 mb-24">
        {[
          {
            number: "01",
            title: "Statutory Approvals & RERA Form 1 Certification",
            subtitle: "48+ Projects Certified Across Gujarat",
            desc: "Led by Ar. Vidhi S. Gajjar (CA/2018/103740), we provide full certifying Architect of Record services. From initial GDCR zoning approvals to milestone completion certificates (Form 1) for stage-wise fund releases, we ensure seamless compliance with RERA regulations.",
            capabilities: ["Municipal Building Approvals & Sanctions", "RERA Form 1 Stage-wise Certifications", "GDCR & FSI Optimization Studies", "Fire, Structural & Environmental Clearances"],
            icon: <ShieldCheck className="w-8 h-8 text-amber-400" />
          },
          {
            number: "02",
            title: "High-Density Residential Towers & Luxury Villas",
            subtitle: "Human-Centric Living Environments",
            desc: "Designing residential communities that balance unit efficiency with spatial luxury. We design aerodynamic building envelopes, maximize natural daylight and ventilation, and integrate private landscaped sky-decks with structural efficiency.",
            capabilities: ["Multi-Tower Master Planning", "High-Density Residential Floorplates", "Luxury Villa & Plotted Layouts", "Vertical Amenity & Clubhouse Architecture"],
            icon: <Building2 className="w-8 h-8 text-sky-400" />
          },
          {
            number: "03",
            title: "Commercial Headquarters & Urban Retail Hubs",
            subtitle: "Civic Prominence & Corporate Identity",
            desc: "Creating high-impact corporate architectures with glass curtain walls, double-height atriums, optimized vehicular drop-offs, and flexible office floor layouts engineered for high asset valuation and footfall.",
            capabilities: ["Corporate Office Headquarters", "High-Street Retail & Mixed Development", "Curtain Wall & Facade Detailing", "Parking Circulation & Logistics Planning"],
            icon: <Layers className="w-8 h-8 text-indigo-400" />
          },
          {
            number: "04",
            title: "AI-Driven Site Quality & Defect Monitoring",
            subtitle: "Technology Directed by Swetang Gajjar",
            desc: "Pioneering the integration of computer-vision AI systems on construction sites. We monitor structural progress, automate PPE safety compliance, and detect surface cracks and deviations early.",
            capabilities: ["Computer Vision On-Site Safety Audits", "Drone-Assisted Progress Tracking", "Defect & Deviation Detection Models", "Smart Building IoT Automation"],
            icon: <Cpu className="w-8 h-8 text-emerald-400" />
          }
        ].map((pillar, i) => (
          <Reveal key={pillar.number} delay={i * 100}>
            <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-1">
                <span className="font-mono text-3xl font-bold text-amber-500/40">
                  {pillar.number}
                </span>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {pillar.title}
                </h2>
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-300">
                  {pillar.subtitle}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/60 border border-white/5 space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Scope & Deliverables
                </h3>
                <ul className="space-y-2.5">
                  {pillar.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-400 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </Reveal>
        ))}
      </div>

      {/* Materiality & Architectural Tectonics Showcase */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300 text-xs font-mono font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Tectonic Materiality
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              Honesty of Materials. Precision in Detailing.
            </h2>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Every development is sculpted with an honest palette of materials selected for longevity, climatic resilience across Gujarat's solar conditions, and sensory refinement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Fair-Face Cast Concrete",
                texture: "Tactile / Monolithic",
                colorCode: "#94A3B8 &bull; Slate Concrete",
                desc: "High-grade architectural concrete offering raw monolithic strength, natural thermal lag, and timeless tectonic presence.",
                tag: "Structural Core"
              },
              {
                title: "Low-E Double Glazing",
                texture: "Solar Shield / Reflective",
                colorCode: "#0EA5E9 &bull; Smoked Cyan Glass",
                desc: "High-performance acoustic and solar-control glass facades optimizing natural daylighting while reducing thermal cooling loads.",
                tag: "Envelope System"
              },
              {
                title: "Terracotta & Brise-Soleil",
                texture: "Warm Earth / Perforated",
                colorCode: "#C2410C &bull; Gujarat Clay",
                desc: "Climate-responsive louvers and modern perforated jaalis engineered for passive breeze induction and dynamic shadow play.",
                tag: "Climatic Screen"
              },
              {
                title: "Architectural Bronze & Steel",
                texture: "Precision Metal / Anodized",
                colorCode: "#D97706 &bull; Warm Bronze",
                desc: "Handcrafted entrance portals, structural canopies, and bespoke joinery with enduring patinas designed for tactile luxury.",
                tag: "Finishing Details"
              }
            ].map((mat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-amber-500/40 transition-all space-y-4 group backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                    {mat.tag}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">{mat.texture}</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                  {mat.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {mat.desc}
                </p>
                <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-slate-500" dangerouslySetInnerHTML={{ __html: mat.colorCode }} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Statutory Footer Callout */}
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <Reveal>
          <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/40 border border-amber-500/30 space-y-4">
            <Award className="w-8 h-8 text-amber-400 mx-auto" />
            <h2 className="text-2xl font-serif font-bold text-white">
              Institutional Partnerships & Inquiries
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              We collaborate with developers, private clients, and engineering consultants across Gujarat for new developments and statutory project certifications.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-lg"
            >
              Initiate Project Dialogue &rarr;
            </button>
          </div>
        </Reveal>
      </div>

    </div>
  );
};

export default Practice;
