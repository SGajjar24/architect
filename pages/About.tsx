import React from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { 
  Building2, 
  GraduationCap, 
  ShieldCheck, 
  Cpu, 
  Award, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  Layers, 
  FileCheck,
  Linkedin
} from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

export const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      
      {/* 1. EDITORIAL HEADER & MANIFESTO */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Studio Monograph & Leadership
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-tight max-w-4xl">
            Where Spatial Artistry Meets Statutory Precision.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mt-4 font-light leading-relaxed">
            Studio Vidhi Gajjar operates at the intersection of contemporary architectural design, rigorous statutory governance, and intelligent site automation across 48+ master-planned developments in Gujarat.
          </p>
        </Reveal>
      </div>

      {/* 2. LEADERSHIP ARCHITECTURAL MONOGRAPHS */}
      <div className="max-w-7xl mx-auto px-6 space-y-16 mb-24">
        
        {/* Monograph 1: Ar. Vidhi Satishbhai Gajjar */}
        <Reveal>
          <div className="p-8 sm:p-14 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Visual Column / Studio Architectural Silhouette */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-950">
                <img
                  src="/images/vidhi_portrait.jpg"
                  alt="Ar. Vidhi Satishbhai Gajjar - Principal Architect"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/90 text-slate-950 text-xs font-mono font-bold mb-2">
                    <Award className="w-3.5 h-3.5" />
                    COA Certified Architect
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    Ar. Vidhi Satishbhai Gajjar
                  </h3>
                  <p className="text-xs text-amber-300 font-mono mt-0.5">
                    Principal Architect & Certifying Architect of Record
                  </p>
                </div>
              </div>

              {/* Verified Credentials Quick Bar */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-400 font-mono">
                  <span>COA Registration</span>
                  <span className="text-amber-300 font-bold">CA/2018/103740</span>
                </div>
                <div className="flex items-center justify-between text-slate-400 font-mono">
                  <span>Academic Honors</span>
                  <span className="text-white">First Class with Distinction</span>
                </div>
                <div className="flex items-center justify-between text-slate-400 font-mono">
                  <span>Alma Mater</span>
                  <span className="text-white">Anant National University</span>
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                  Principal Architect Monograph
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">
                  Ar. Vidhi Satishbhai Gajjar
                </h2>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  B.Arch (Distinction), Council of Architecture &bull; Senior Architect of Record
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                With extensive professional practice directing master planning and statutory governance, Ar. Vidhi S. Gajjar serves as Principal of Studio Vidhi Gajjar and Senior Architect of Record. She has architecturally planned, certified, and managed GDCR statutory compliance for over <b>48+ RERA-registered developments</b> across Ahmedabad, Gandhinagar, Surat, Sanand, Palanpur, and Mehsana.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Her design ethos balances climatic responsiveness under Gujarat’s intensive solar environment with efficient structural grids, optimized FSI utilization, and bespoke residential and commercial typologies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-xs font-mono font-bold text-amber-300 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4" />
                    Statutory Authority
                  </div>
                  <div className="text-xs text-slate-300">
                    Form 1 Certifications, GDCR Municipal Sanctions, and Zero-Deficiency RERA Approvals.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-xs font-mono font-bold text-sky-300 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" />
                    Major Collaborations
                  </div>
                  <div className="text-xs text-slate-300">
                    Shilp Group, Shaligram, Swati Procon, Goyal & Co. / Riviera, Vishwanath Builders, Ratnaakar.
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                  Core Practice Specializations:
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "RERA Form 1 Statutory Certifications",
                    "High-Density Residential Towers",
                    "Corporate Headquarters & Facades",
                    "GDCR Municipal Sanctions",
                    "Climatic Passive Shading & Vastu",
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

        {/* Monograph 2: Swetang Gajjar (AI & Automation) */}
        <Reveal>
          <div className="p-8 sm:p-14 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Visual Column / Computational Intelligence Visual */}
            <div className="lg:col-span-5 lg:order-last space-y-4">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-950">
                <img
                  src="/images/swetang_portrait.jpg"
                  alt="Swetang Gajjar - Computational Intelligence & AI Systems"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/90 text-slate-950 text-xs font-mono font-bold mb-2">
                    <Cpu className="w-3.5 h-3.5" />
                    AI & Computational Systems
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    Swetang Gajjar
                  </h3>
                  <p className="text-xs text-sky-300 font-mono mt-0.5">
                    Co-Founder & AI Systems Lead
                  </p>
                </div>
              </div>

              {/* Tech Stack Indicator */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-400 font-mono">
                  <span>Specialization</span>
                  <span className="text-sky-300 font-bold">Computer Vision & IoT</span>
                </div>
                <div className="flex items-center justify-between text-slate-400 font-mono">
                  <span>Engineering Scope</span>
                  <span className="text-white">Site Safety & Defect AI</span>
                </div>
                <div className="flex items-center justify-between text-slate-400 font-mono">
                  <span>Systems Stack</span>
                  <span className="text-white">Python, PyTorch, React, Cloud</span>
                </div>
              </div>
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
                    Full-Stack Cloud Systems
                  </div>
                  <div className="text-xs text-slate-300">
                    High-performance cloud architectures (React, TypeScript, Python, Node.js).
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
                    "Cloud Infrastructure Optimization",
                    "Full-Stack Web Systems (React, TypeScript)"
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

      {/* 3. STUDIO PILLARS OF PRACTICE */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <Reveal>
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-md space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-amber-400 font-mono text-xs uppercase tracking-widest">
                Our Practice Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Four Pillars of Studio Vidhi Gajjar
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Compass className="w-6 h-6 text-amber-400" />,
                  title: "Spatial Harmony",
                  desc: "Designing spaces that respect human scale, natural light orientation, and passive climatic ventilation."
                },
                {
                  icon: <Building2 className="w-6 h-6 text-sky-400" />,
                  title: "Statutory Governance",
                  desc: "100% rigorous compliance with GujRERA and GDCR municipal norms, ensuring zero project friction."
                },
                {
                  icon: <Layers className="w-6 h-6 text-emerald-400" />,
                  title: "Tectonic Honesty",
                  desc: "Uncompromising materiality: monolithic concrete, high-performance Low-E glass, and bronze patinas."
                },
                {
                  icon: <Cpu className="w-6 h-6 text-purple-400" />,
                  title: "Computational Edge",
                  desc: "Integrating edge computer vision for automated on-site safety audits and structural defect detection."
                }
              ].map((pillar, pIdx) => (
                <div key={pIdx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                  <div className="p-3 rounded-xl bg-white/5 w-fit">
                    {pillar.icon}
                  </div>
                  <h3 className="font-serif font-bold text-white text-base">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* 4. BOTTOM COMMISSION CTA */}
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <Reveal>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-950/30 via-slate-900 to-amber-950/30 border border-amber-500/30 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Initiate a Commission Dialogue
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              Discuss new high-density residential towers, commercial headquarters, or statutory master planning assignments directly with our leadership.
            </p>
            <div className="flex justify-center pt-2">
              <MagneticButton
                onClick={() => navigate('/contact')}
                className="px-8 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs font-mono uppercase tracking-widest shadow-lg"
                strength={15}
              >
                Connect with the Studio &rarr;
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>

    </div>
  );
};

export default About;