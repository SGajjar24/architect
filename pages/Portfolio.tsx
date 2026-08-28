import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ALL_VERIFIED_PROJECTS, PROJECT_STATISTICS } from '../data/projectsData';
import { Project } from '../types';
import Reveal from '../components/Reveal';
import Card3D from '../components/Card3D';
import ThreeCityMap3D from '../components/ThreeCityMap3D';
import ProjectModal from '../components/ProjectModal';
import { useStudio } from '../context/StudioContext';
import { 
  Search, 
  LayoutGrid, 
  Table as TableIcon, 
  ExternalLink, 
  ShieldCheck, 
  MapPin, 
  Building, 
  Award, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Navigation,
  X
} from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const developerParam = searchParams.get('developer') || '';

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDeveloper, setSelectedDeveloper] = useState<string>(developerParam);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isBlueprintMode } = useStudio();

  useEffect(() => {
    if (developerParam) {
      setSelectedDeveloper(developerParam);
      window.scrollTo({ top: 350, behavior: 'smooth' });
    }
  }, [developerParam]);

  const categories = ['All', 'Residential', 'Commercial', 'Mixed Development'];

  // Multi-dimensional filtering logic
  const filteredProjects = useMemo(() => {
    return ALL_VERIFIED_PROJECTS.filter((project) => {
      const matchesCategory = 
        activeCategory === 'All' || 
        project.category.toLowerCase() === activeCategory.toLowerCase() ||
        (project.typology && project.typology.toLowerCase().includes(activeCategory.toLowerCase()));

      const matchesCity = 
        selectedCity === 'All' || 
        project.city.toLowerCase().includes(selectedCity.toLowerCase());

      const matchesDeveloper = 
        !selectedDeveloper ||
        (project.developer && project.developer.toLowerCase().includes(selectedDeveloper.toLowerCase())) ||
        (project.developerEntity && project.developerEntity.toLowerCase().includes(selectedDeveloper.toLowerCase()));

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.location.toLowerCase().includes(q) ||
        project.city.toLowerCase().includes(q) ||
        (project.developer && project.developer.toLowerCase().includes(q)) ||
        (project.developerEntity && project.developerEntity.toLowerCase().includes(q)) ||
        (project.engineerName && project.engineerName.toLowerCase().includes(q)) ||
        (project.typology && project.typology.toLowerCase().includes(q));

      return matchesCategory && matchesCity && matchesDeveloper && matchesSearch;
    });
  }, [activeCategory, selectedCity, selectedDeveloper, searchQuery]);

  return (
    <div className={`min-h-screen pt-28 pb-20 ${isBlueprintMode ? 'bg-slate-950 text-cyan-50' : 'bg-slate-950 text-slate-100'}`}>
      
      {/* Portfolio Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Statutory Architecture Register
              </div>
              <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
                48 Traceable Developments
              </h1>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-3 font-light leading-relaxed">
                Comprehensive catalogue of architectural designs, statutory RERA Form 1 certifications, and master layouts certified by Ar. Vidhi S. Gajjar (<span className="font-mono text-amber-300">CA/2018/103740</span>).
              </p>
            </div>

            {/* Quick Metrics Badge */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 shrink-0">
              <div className="text-center px-3 border-r border-white/10">
                <div className="text-2xl font-serif font-bold text-amber-300 font-mono">48</div>
                <div className="text-[10px] font-mono uppercase text-slate-400">Total Sites</div>
              </div>
              <div className="text-center px-3 border-r border-white/10">
                <div className="text-2xl font-serif font-bold text-sky-400 font-mono">6</div>
                <div className="text-[10px] font-mono uppercase text-slate-400">Cities</div>
              </div>
              <div className="text-center px-3">
                <div className="text-2xl font-serif font-bold text-emerald-400 font-mono">100%</div>
                <div className="text-[10px] font-mono uppercase text-slate-400">Verified</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* 3D HOLOGRAPHIC GUJARAT CITY CLUSTER MAP */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <Reveal variant="fade-up">
          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 uppercase font-bold text-amber-400">
                <Navigation className="w-3.5 h-3.5" />
                Interactive 3D Geographic Node Explorer
              </span>
              <span>Click a city beacon to filter projects</span>
            </div>
          </div>
          
          <ThreeCityMap3D
            selectedCity={selectedCity}
            onSelectCity={(city) => setSelectedCity(city)}
          />
        </Reveal>
      </div>

      {/* EXPLORER TOOLBAR & FILTERS */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
          
          {/* Search Bar & View Mode Switcher */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Instant Fuzzy Search */}
            <div className="relative flex-grow max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                id="projectSearch"
                name="projectSearch"
                type="text"
                aria-label="Search architectural projects by name, developer, or location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by project name, developer (Shilp, Shaligram, Swati, Goyal), or locality..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-xs sm:text-sm font-sans text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white bg-white/10 px-2 py-0.5 rounded-full"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Grid ⟷ Table Toggle */}
            <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-xl border border-white/10 shrink-0 self-start md:self-auto">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                3D Spatial Grid
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                  viewMode === 'table'
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <TableIcon className="w-3.5 h-3.5" />
                Statutory Ledger
              </button>
            </div>
          </div>

          {/* Typology Filter Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mr-1 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                Typology:
              </span>
              {categories.map((cat) => {
                const count = cat === 'All' 
                  ? ALL_VERIFIED_PROJECTS.length 
                  : ALL_VERIFIED_PROJECTS.filter(p => p.category.toLowerCase() === cat.toLowerCase() || (p.typology && p.typology.toLowerCase().includes(cat.toLowerCase()))).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                      activeCategory === cat
                        ? 'bg-amber-600 text-white shadow-md border border-amber-400/50'
                        : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                    }`}
                  >
                    {cat} <span className="opacity-70 ml-1">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Results Count & Reset */}
            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              {selectedDeveloper && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
                  <span>Client: <strong>{selectedDeveloper}</strong></span>
                  <button 
                    onClick={() => { setSelectedDeveloper(''); setSearchParams({}); }}
                    className="p-0.5 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
              <span>Showing <strong className="text-white font-bold">{filteredProjects.length}</strong> of 48 statutory sites</span>
              {(activeCategory !== 'All' || selectedCity !== 'All' || searchQuery !== '' || selectedDeveloper !== '') && (
                <button
                  onClick={() => {
                    setActiveCategory('All');
                    setSelectedCity('All');
                    setSearchQuery('');
                    setSelectedDeveloper('');
                    setSearchParams({});
                  }}
                  className="text-amber-400 hover:text-amber-300 underline uppercase tracking-wider text-[11px] ml-2"
                >
                  Reset All
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS DISPLAY AREA */}
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-slate-900/40 rounded-2xl border border-dashed border-white/10">
            <Building className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-serif font-bold text-white">No developments found</h3>
            <p className="text-xs font-mono text-slate-400 mt-1">Try resetting search keywords or city filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
                setSelectedCity('All');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-mono uppercase font-semibold"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* MODE 1: 3D Spatial Grid Showcase */}
        {viewMode === 'grid' && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <Reveal key={project.id} delay={Math.min(idx * 50, 350)}>
                <Card3D
                  maxTilt={8}
                  scale={1.02}
                  className="bg-slate-900/60 rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/40 shadow-xl flex flex-col h-full group"
                >
                  {/* Card Media Header */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                    {/* Top Status Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="bg-slate-950/80 backdrop-blur-md text-amber-300 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase border border-white/10">
                        {project.category}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-emerald-950/80 backdrop-blur-md text-emerald-300 text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border border-emerald-500/30">
                        <CheckCircle2 className="w-3 h-3" />
                        RERA
                      </span>
                    </div>

                    {/* Bottom Title on Cover */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-xs flex items-center gap-1 mt-0.5 font-mono">
                        <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                        {project.city} &bull; {project.location.split(',')[0]}
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-white/5">
                        <span>Architect of Record</span>
                        <span className="font-bold text-amber-300">CA/2018/103740</span>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-mono font-semibold text-slate-300 hover:text-amber-300 flex items-center gap-1 transition-colors"
                      >
                        Details & Specs &rarr;
                      </button>

                      <a
                        href={project.verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-mono font-semibold transition-colors"
                        title="View direct public record or statutory Form 1 certificate"
                      >
                        <span>Verify Proof</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </Card3D>
              </Reveal>
            ))}
          </div>
        )}

        {/* MODE 2: Statutory Ledger Table */}
        {viewMode === 'table' && filteredProjects.length > 0 && (
          <div className="bg-slate-900/70 rounded-2xl shadow-2xl border border-white/10 overflow-hidden backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-950 text-amber-400 uppercase text-[10px] tracking-wider border-b border-white/10">
                  <tr>
                    <th className="py-4 px-4 font-bold">#</th>
                    <th className="py-4 px-4 font-bold">Project Name</th>
                    <th className="py-4 px-4 font-bold">Developer / Promoter</th>
                    <th className="py-4 px-4 font-bold">City / Region</th>
                    <th className="py-4 px-4 font-bold">Typology</th>
                    <th className="py-4 px-4 font-bold">COA Registration</th>
                    <th className="py-4 px-4 font-bold">Milestone Stage</th>
                    <th className="py-4 px-4 font-bold text-right">Statutory Proof</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredProjects.map((p, i) => (
                    <tr key={p.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 text-slate-500">{i + 1}</td>
                      <td className="py-3.5 px-4 font-bold text-white font-sans text-sm">
                        <button
                          onClick={() => setSelectedProject(p)}
                          className="hover:text-amber-300 text-left font-bold"
                        >
                          {p.title}
                        </button>
                        <div className="text-[11px] font-mono font-normal text-slate-400">{p.location}</div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-300 font-sans">
                        <button 
                          onClick={() => setSelectedDeveloper(p.developer || '')}
                          className="hover:text-amber-300 text-left"
                          title="Filter by this developer"
                        >
                          {p.developerEntity || p.developer}
                        </button>
                      </td>
                      <td className="py-3.5 px-4 text-slate-300">{p.city}</td>
                      <td className="py-3.5 px-4">
                        <span className="px-2.5 py-1 rounded-full text-[10px] bg-white/5 text-amber-300 border border-white/5">
                          {p.category}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-300 font-bold">CA/2018/103740</td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 text-emerald-400">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {p.constructionStage || 'RERA Active'}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <a
                          href={p.verificationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-[11px] font-mono font-semibold transition-all shadow-md"
                        >
                          <span>Open Record</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Project Deep-Dive Modal Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Portfolio;