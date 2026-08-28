import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  ShieldCheck, 
  MapPin, 
  Building2, 
  Award, 
  Copy, 
  Check, 
  Layers, 
  Compass, 
  Sparkles, 
  FileText,
  CheckCircle2
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

type TabType = 'overview' | 'plans' | 'engineering' | 'statutory';

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setActiveTab('overview');
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

  const specs = project.specifications;
  const floorPlans = project.floorPlans || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-xl transition-opacity duration-300 animate-fade-in"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl shadow-2xl overflow-hidden z-10 border border-white/10 animate-fade-in-up text-slate-100 flex flex-col max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-800 text-white backdrop-blur-md transition-all border border-white/10 focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Header */}
        <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-slate-950 shrink-0">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-600 text-white text-[11px] font-mono font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1 bg-emerald-950/90 text-emerald-300 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border border-emerald-500/30 backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5" />
                {project.linkStatus || 'RERA Statutory'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm flex items-center gap-1.5 mt-0.5 font-mono">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              {project.location} &bull; {project.city}
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-6 border-b border-white/10 bg-slate-950/60 overflow-x-auto no-scrollbar shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'overview'
                ? 'text-amber-400 border-amber-500 bg-white/[0.02]'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            Overview & Scope
          </button>
          <button
            onClick={() => setActiveTab('plans')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'plans'
                ? 'text-amber-400 border-amber-500 bg-white/[0.02]'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Floor Plans & Units ({floorPlans.length})
          </button>
          <button
            onClick={() => setActiveTab('engineering')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'engineering'
                ? 'text-amber-400 border-amber-500 bg-white/[0.02]'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            Engineering & Vastu
          </button>
          <button
            onClick={() => setActiveTab('statutory')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'statutory'
                ? 'text-amber-400 border-amber-500 bg-white/[0.02]'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            RERA Verification
          </button>
        </div>

        {/* Scrollable Tab Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-grow">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
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
                  <div className="text-xs sm:text-sm font-semibold text-white truncate px-1">{project.developerEntity || project.developer || 'Institutional Developer'}</div>
                </div>
              </div>

              {/* Engineering & Developer Stakeholders Ledger */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs font-mono">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase text-slate-400 block font-bold">Structural Engineer of Record</span>
                  <div className="text-slate-200 font-semibold flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>{project.engineerName || 'Senior Consulting Structural Engineer'}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase text-slate-400 block font-bold">Developer Contact & Location</span>
                  <div className="text-slate-200 font-semibold flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span className="truncate">{project.exactAddress || project.location}</span>
                  </div>
                </div>
              </div>

              {/* Architectural Scope Description */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Architectural & Spatial Planning Scope
                </h3>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                  {project.description}
                </p>
              </div>

              {/* Scale Metrics */}
              {specs && (
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">Project Scale & Metrics</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    <div className="flex justify-between p-2.5 rounded-lg bg-slate-950/60 border border-white/5">
                      <span className="text-slate-400">Vertical Envelope:</span>
                      <span className="text-white font-semibold">{specs.totalFloors || 'Multi-Storey'}</span>
                    </div>
                    <div className="flex justify-between p-2.5 rounded-lg bg-slate-950/60 border border-white/5">
                      <span className="text-slate-400">Total Capacity:</span>
                      <span className="text-white font-semibold">{specs.totalUnits || 'High Density'}</span>
                    </div>
                    <div className="flex justify-between p-2.5 rounded-lg bg-slate-950/60 border border-white/5">
                      <span className="text-slate-400">Plot Scope:</span>
                      <span className="text-white font-semibold">{specs.plotArea || 'Statutory Plot'}</span>
                    </div>
                    <div className="flex justify-between p-2.5 rounded-lg bg-slate-950/60 border border-white/5">
                      <span className="text-slate-400">Built-Up Area:</span>
                      <span className="text-white font-semibold">{specs.builtUpArea || 'Approved FSI'}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Unit Typologies */}
              {specs?.unitMix && (
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">Configured Unit Typologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {specs.unitMix.map((unit, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-xl bg-slate-950 border border-white/10 text-xs font-mono text-amber-200">
                        {unit}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: FLOOR PLANS */}
          {activeTab === 'plans' && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Architectural Floor Plans & Spatial Blueprints
                </h3>
                <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md">
                  CoA Approved Layouts
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {floorPlans.map((plan, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-amber-500/40 transition-all space-y-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-serif font-bold text-white text-sm">{plan.title}</h4>
                      <span className="text-[10px] font-mono font-bold bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20 shrink-0">
                        {plan.type}
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 shrink-0" />
                      {plan.area}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {plan.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: ENGINEERING & VASTU */}
          {activeTab === 'engineering' && (
            <div className="space-y-6 animate-fade-in">
              {/* Structural Frame */}
              {specs?.structuralSystem && (
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    Structural Engineering Framework
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {specs.structuralSystem}
                  </p>
                </div>
              )}

              {/* Vastu Highlights */}
              {specs?.vastuHighlights && (
                <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/20 space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                    <Compass className="w-4 h-4" />
                    Vastu Shastra & Directional Energy Alignment
                  </h4>
                  <ul className="space-y-2">
                    {specs.vastuHighlights.map((v, i) => (
                      <li key={i} className="text-xs text-slate-200 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Amenities */}
              {specs?.amenitiesList && (
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-3">Integrated Amenities & Green Systems</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {specs.amenitiesList.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300 font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: STATUTORY VERIFICATION */}
          {activeTab === 'statutory' && (
            <div className="space-y-6 animate-fade-in">
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

              {/* Verification Callout Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/40 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-white text-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    Statutory Proof & Form 1 Verification
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {project.verificationLink === 'https://gujrera.gujarat.gov.in/' 
                      ? 'Verify architect details using GujRERA Advanced Search with the RERA ID.'
                      : 'Certified under Council of Architecture license CA/2018/103740.'}
                  </div>
                </div>
                <a
                  href={project.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-lg shrink-0 focus:outline-none"
                >
                  <span>{project.verificationLink === 'https://gujrera.gujarat.gov.in/' ? 'Search GujRERA Portal' : 'Verify Official Record'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Statutory Credentials Ledger */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 text-xs font-mono space-y-2">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Architect of Record:</span>
                  <span className="text-white font-bold">Ar. Vidhi Satishbhai Gajjar</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">CoA Registration:</span>
                  <span className="text-amber-300 font-bold">CA/2018/103740</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Consulting Engineer:</span>
                  <span className="text-slate-200">{project.engineerName || 'Senior Consulting Structural Engineer'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Developer Entity:</span>
                  <span className="text-slate-200">{project.developerEntity || project.developer}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Verification Link Status:</span>
                  <span className="text-emerald-400">{project.linkStatus || 'Live Project Portal'}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Jurisdiction Authority:</span>
                  <span className="text-white">{project.city} (AUDA / GUDA / SUDA)</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-white/5 flex items-center justify-between font-mono text-xs text-slate-400 shrink-0">
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

