import React from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Card3D from '../components/Card3D';
import { 
  Award, 
  GraduationCap, 
  Building2, 
  CheckCircle2, 
  Linkedin, 
  Mail, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  MapPin, 
  Calendar 
} from 'lucide-react';

export const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Studio Leadership & Credentials
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-tight max-w-4xl">
            Architectural Leadership Grounded in Experience.
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl mt-4 font-light leading-relaxed">
            Studio Vidhi Gajjar brings together statutory architectural governance and cutting-edge computational intelligence to design, execute, and certify landmark developments across Gujarat.
          </p>
        </Reveal>
      </div>

      {/* LEADERSHIP MONOGRAPHS */}
      <div className="max-w-7xl mx-auto px-6 space-y-20 mb-24">
        
        {/* Monograph 1: Ar. Vidhi S. Gajjar */}
        <Reveal>
          <div className="p-8 sm:p-14 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5">
              <Card3D maxTilt={6} scale={1.02} className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-950">
                <div className="relative aspect-[4/5] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                    alt="Ar. Vidhi Satishbhai Gajjar"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/90 text-slate-950 text-xs font-mono font-bold mb-2">
                      <Award className="w-3.5 h-3.5" />
                      COA: CA/2018/103740
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      Ar. Vidhi S. Gajjar
                    </h3>
                    <p className="text-xs text-amber-300 font-mono mt-0.5">
                      Principal Architect & Certifying Architect of Record
                    </p>
                  </div>
                </div>
              </Card3D>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                  Principal Profile
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">
                  Ar. Vidhi Satishbhai Gajjar
                </h2>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  B.Arch (First Class with Distinction), Anant National University &bull; COA Registration: CA/2018/103740
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                With extensive professional practice as Senior Architect and Certifying Architect of Record, Ar. Vidhi S. Gajjar directs architectural master planning, technical GDCR compliance, and statutory execution for over <b>48+ RERA-registered developments</b> across Gujarat.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-xs font-mono font-bold text-amber-300 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4" />
                    Academic Foundation
                  </div>
                  <div className="text-xs text-slate-300">
                    B.Arch (2013–2018) &bull; First Class with Distinction, Anant National University, Ahmedabad.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-xs font-mono font-bold text-sky-300 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" />
                    Institutional Partners
                  </div>
                  <div className="text-xs text-slate-300">
                    Shilp Group, Shaligram, Swati Procon, Goyal & Co., Vishwanath Builders, Ratnaakar.
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                  Core Professional Specializations:
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "RERA Form 1 Statutory Certifications",
                    "High-Density Residential Towers",
                    "Corporate Headquarters Planning",
                    "GDCR Municipal Sanctions",
                    "Interdisciplinary Structural Coordination",
                    "Luxury Villa & Plotted Layouts"
                  ].map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-sans">
                      &bull; {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/vidhi-gajjar-68038b285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-mono font-semibold transition-all border border-white/10"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

          </div>
        </Reveal>

        {/* Monograph 2: Swetang Gajjar */}
        <Reveal>
          <div className="p-8 sm:p-14 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 lg:order-last">
              <Card3D maxTilt={6} scale={1.02} className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-950">
                <div className="relative aspect-[4/5] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800"
                    alt="Swetang Gajjar"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/90 text-slate-950 text-xs font-mono font-bold mb-2">
                      <Cpu className="w-3.5 h-3.5" />
                      AI & Automation Lead
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      Swetang Gajjar
                    </h3>
                    <p className="text-xs text-sky-300 font-mono mt-0.5">
                      Senior Software Engineer & AI Systems Lead
                    </p>
                  </div>
                </div>
              </Card3D>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
                  Technology Leadership
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">
                  Swetang Gajjar
                </h2>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  Senior Software Engineer &bull; Computational AI & Automation Specialist
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Swetang Gajjar leads computational technology, automated site intelligence, and digital twin monitoring. Bringing deep engineering expertise across industrial automation, computer vision, and machine learning, he pioneers AI-assisted on-site safety compliance, structural defect detection, and intelligent building systems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-xs font-mono font-bold text-sky-300 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4" />
                    Computer Vision & IoT
                  </div>
                  <div className="text-xs text-slate-300">
                    Edge AI models for real-time PPE detection, site progress analysis, and smart automation.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-xs font-mono font-bold text-amber-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    Full-Stack Architecture
                  </div>
                  <div className="text-xs text-slate-300">
                    High-performance cloud architectures (React 19, TypeScript, Python, Node.js).
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                  Technical Core Competencies:
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AI/ML Model Development (Vision Transformers, PyTorch)",
                    "Industrial Automation & Edge IoT",
                    "Computer Vision Defect Detection",
                    "Cloud Cost & Performance Optimization",
                    "Full-Stack Web Systems (React 19, TypeScript)"
                  ].map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-sans">
                      &bull; {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href="https://github.com/SGajjar24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-mono font-semibold transition-all border border-white/10"
                >
                  <span>GitHub (@SGajjar24)</span>
                </a>
              </div>
            </div>

          </div>
        </Reveal>

      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <Reveal>
          <h2 className="text-3xl font-serif font-bold text-white">
            Engage with Studio Vidhi Gajjar
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Discuss new residential, commercial, or statutory RERA architectural assignments directly with our leadership team.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs font-mono uppercase tracking-widest transition-all shadow-lg"
          >
            Contact the Studio &rarr;
          </button>
        </Reveal>
      </div>

    </div>
  );
};

export default About;