import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, ShieldCheck, MapPin, Building2, Calendar, Award } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-100 animate-fade-in-up">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-sm transition-all focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Header with Parallax Aspect */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1 bg-emerald-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                {project.linkStatus || 'RERA Statutory'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-slate-300 text-sm flex items-center gap-1.5 mt-1">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              {project.location}
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Statutory Credential Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
            <div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">COA License</div>
              <div className="text-xs sm:text-sm font-mono font-bold text-slate-900 flex items-center justify-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                CA/2018/103740
              </div>
            </div>
            <div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">City / Region</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900">{project.city}</div>
            </div>
            <div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Stage</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900">{project.constructionStage || 'RERA Active'}</div>
            </div>
            <div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">RERA Target</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900">{project.gujreraTarget || 'Certified'}</div>
            </div>
          </div>

          {/* Architectural Scope Description */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-amber-600" />
              Architectural & Statutory Scope
            </h3>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Verification Callout Box */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-semibold text-slate-900 text-sm flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                Statutory Proof & Form 1 Verification
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                Verified against Council of Architecture record & official GujRERA filing.
              </div>
            </div>
            <a
              href={project.verificationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-amber-700 text-xs sm:text-sm font-medium transition-all shadow-md shrink-0 focus:outline-none"
            >
              <span>View Statutory Record</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Ar. Vidhi S. Gajjar &bull; Senior Architect of Record
          </span>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
