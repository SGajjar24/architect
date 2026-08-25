import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { X, ExternalLink, ShieldCheck, MapPin, Building2, Award, Copy, Check } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyRera = () => {
    if (project.reraNumber) {
      navigator.clipboard.writeText(project.reraNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-xl transition-opacity duration-300 animate-fade-in"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-slate-900 rounded-3xl shadow-2xl overflow-hidden z-10 border border-white/10 animate-fade-in-up text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-800 text-white backdrop-blur-md transition-all border border-white/10 focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Header */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-600 text-white text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1 bg-emerald-950/90 text-emerald-300 text-xs font-mono font-semibold px-3 py-1 rounded-full border border-emerald-500/30 backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5" />
                {project.linkStatus || 'RERA Statutory'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm flex items-center gap-1.5 mt-1 font-mono">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              {project.location} &bull; {project.city}
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Statutory Credential Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-950/80 border border-white/5 text-center">
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400 mb-1">COA License</div>
              <div className="text-xs sm:text-sm font-mono font-bold text-amber-300 flex items-center justify-center gap-1">
                <Award className="w-3.5 h-3.5" />
                CA/2018/103740
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400 mb-1">City / Region</div>
              <div className="text-xs sm:text-sm font-semibold text-white">{project.city}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400 mb-1">Stage</div>
              <div className="text-xs sm:text-sm font-semibold text-emerald-400">{project.constructionStage || 'Under Construction'}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400 mb-1">Developer</div>
              <div className="text-xs sm:text-sm font-semibold text-white truncate px-1">{project.developer || 'Institutional Developer'}</div>
            </div>
          </div>

          {/* RERA Number Bar with One-Click Copy */}
          {project.reraNumber && (
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Official Gujarat RERA Registration No:</span>
                <span className="font-bold text-white tracking-wider break-all">{project.reraNumber}</span>
              </div>
              <button
                onClick={handleCopyRera}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 text-xs transition-colors shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied ID!' : 'Copy RERA ID'}</span>
              </button>
            </div>
          )}

          {/* Architectural Scope Description */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Architectural & Statutory Scope
            </h3>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              {project.description}
            </p>
          </div>

          {/* Verification Callout Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/40 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-bold text-white text-sm flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Statutory Proof & Form 1 Verification
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Certified under Council of Architecture license <b>CA/2018/103740</b>.
              </div>
            </div>
            <a
              href={project.verificationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-lg shrink-0 focus:outline-none"
            >
              <span>Verify Official Record</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-white/5 flex items-center justify-between font-mono text-xs text-slate-400">
          <span>Ar. Vidhi S. Gajjar &bull; Senior Architect of Record</span>
          <button
            onClick={onClose}
            className="font-bold text-amber-400 hover:text-amber-300"
          >
            [Close Window]
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
