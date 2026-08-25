import React, { useState, useMemo } from 'react';
import { ALL_VERIFIED_PROJECTS, PROJECT_STATISTICS } from '../data/projectsData';
import { Project } from '../types';
import Reveal from '../components/Reveal';
import Card3D from '../components/Card3D';
import ArchitecturalCanvas3D from '../components/ArchitecturalCanvas3D';
import ProjectModal from '../components/ProjectModal';
import { 
  Search, 
  LayoutGrid, 
  Table as TableIcon, 
  ExternalLink, 
  ShieldCheck, 
  MapPin, 
  Building, 
  Award, 
  Filter, 
  CheckCircle2, 
  Layers,
  Sparkles
} from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Residential', 'Commercial', 'Mixed Development'];
  const cities = ['All', 'Ahmedabad', 'Gandhinagar', 'Palanpur', 'Surendranagar', 'Mehsana', 'Surat'];

  // Multi-criteria filter
  const filteredProjects = useMemo(() => {
    return ALL_VERIFIED_PROJECTS.filter((project) => {
      const matchesCategory = 
        activeCategory === 'All' || 
        project.category.toLowerCase() === activeCategory.toLowerCase() ||
        (project.typology && project.typology.toLowerCase().includes(activeCategory.toLowerCase()));

      const matchesCity = 
        selectedCity === 'All' || 
        project.city.toLowerCase().includes(selectedCity.toLowerCase());

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.location.toLowerCase().includes(q) ||
        project.city.toLowerCase().includes(q) ||
        (project.developer && project.developer.toLowerCase().includes(q)) ||
        (project.typology && project.typology.toLowerCase().includes(q));

      return matchesCategory && matchesCity && matchesSearch;
    });
  }, [activeCategory, selectedCity, searchQuery]);

  return (
    <div className="bg-stone-50 min-h-screen text-slate-900 selection:bg-amber-700 selection:text-white">
      
      {/* 3D Hero Section */}
      <section className="relative min-h-[520px] flex items-center justify-center overflow-hidden bg-slate-950 pt-28 pb-20">
        
        {/* Interactive 3D Wireframe & Particle Canvas */}
        <ArchitecturalCanvas3D theme="dark" speed={1.2} />
        
        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-sky-500/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-slate-950/80 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <Reveal variant="zoom">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              Statutory 48-Project Architectural Register
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
              Architecture Built on <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent">
                Indisputable Integrity
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
              Every project designed, planned, and certified under Council of Architecture registration{' '}
              <span className="text-amber-400 font-mono font-bold">CA/2018/103740</span> by Ar. Vidhi S. Gajjar.
              Verified against statutory GujRERA filings and developer records across Gujarat.
            </p>

            {/* Glassmorphic Metrics HUD */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left">
                <div className="flex items-center justify-between text-amber-400 mb-1">
                  <Building className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Total Port</span>
                </div>
                <div className="text-3xl font-serif font-bold text-white">48+</div>
                <div className="text-xs text-slate-400 mt-0.5">RERA Registered Projects</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left">
                <div className="flex items-center justify-between text-emerald-400 mb-1">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Traceable</span>
                </div>
                <div className="text-3xl font-serif font-bold text-white">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">Public Record Verified</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left">
                <div className="flex items-center justify-between text-sky-400 mb-1">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Spread</span>
                </div>
                <div className="text-3xl font-serif font-bold text-white">6</div>
                <div className="text-xs text-slate-400 mt-0.5">Cities across Gujarat</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left">
                <div className="flex items-center justify-between text-amber-300 mb-1">
                  <Award className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">License</span>
                </div>
                <div className="text-lg font-mono font-bold text-white truncate">CA/2018/103740</div>
                <div className="text-xs text-slate-400 mt-1">Council of Architecture</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Explorer Body */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Controls Toolbar */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 mb-10 space-y-6">
          
          {/* Top Row: Search & View Toggle */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-grow max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by project name, developer (Shilp, Shaligram, Swati, Goyal), or locality..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 bg-slate-200 px-2 py-0.5 rounded-full"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dual View Switcher */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl shrink-0 self-start md:self-auto">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                3D Visual Grid
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'table'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <TableIcon className="w-3.5 h-3.5" />
                Statutory Ledger
              </button>
            </div>
          </div>

          {/* Bottom Row: Typology & City Filters */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pt-4 border-t border-slate-100">
            
            {/* Typology Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" />
                Type:
              </span>
              {categories.map((cat) => {
                const count = cat === 'All' 
                  ? ALL_VERIFIED_PROJECTS.length 
                  : ALL_VERIFIED_PROJECTS.filter(p => p.category.toLowerCase() === cat.toLowerCase() || (p.typology && p.typology.toLowerCase().includes(cat.toLowerCase()))).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all focus:outline-none ${
                      activeCategory === cat
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/60'
                    }`}
                  >
                    {cat} <span className="opacity-70 ml-1">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* City Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                City:
              </span>
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedCity === city
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/60'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter Bar */}
        <div className="flex items-center justify-between mb-8 px-2">
          <div className="text-xs sm:text-sm text-slate-500 font-medium">
            Showing <span className="font-bold text-slate-900">{filteredProjects.length}</span> of {ALL_VERIFIED_PROJECTS.length} verified statutory developments
          </div>
          {(searchQuery || activeCategory !== 'All' || selectedCity !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
                setSelectedCity('All');
              }}
              className="text-xs text-amber-700 hover:underline font-semibold"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
            <Building className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-serif font-bold text-slate-800">No matching projects found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
              Try adjusting your search terms or clearing the selected city/typology filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
                setSelectedCity('All');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-amber-700 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* MODE 1: 3D Visual Grid View */}
        {viewMode === 'grid' && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <Reveal key={project.id} delay={Math.min(idx * 60, 400)}>
                <Card3D 
                  maxTilt={8} 
                  scale={1.02} 
                  glareOpacity={0.2}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 border border-slate-100 flex flex-col h-full group"
                >
                  {/* Card Media Header */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="bg-slate-900/80 backdrop-blur-md text-amber-300 border border-white/10 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-emerald-950/80 backdrop-blur-md text-emerald-300 border border-emerald-500/30 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        RERA
                      </span>
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-xs flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                        {project.city} &bull; {project.location.split(',')[0]}
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                        <span>Architect of Record</span>
                        <span className="font-mono font-bold text-slate-800">CA/2018/103740</span>
                      </div>
                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-semibold text-slate-900 hover:text-amber-700 flex items-center gap-1 transition-colors"
                      >
                        Details & Specs &rarr;
                      </button>

                      <a
                        href={project.verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 text-[11px] font-semibold transition-colors"
                        title="View direct public record or statutory Form 1 certificate"
                      >
                        <span>Verify Record</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </Card3D>
              </Reveal>
            ))}
          </div>
        )}

        {/* MODE 2: Statutory Ledger Table View */}
        {viewMode === 'table' && filteredProjects.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white uppercase text-[11px] font-mono tracking-wider">
                  <tr>
                    <th className="py-4 px-4 font-semibold">#</th>
                    <th className="py-4 px-4 font-semibold">Project Name</th>
                    <th className="py-4 px-4 font-semibold">City / Region</th>
                    <th className="py-4 px-4 font-semibold">Typology</th>
                    <th className="py-4 px-4 font-semibold">COA License</th>
                    <th className="py-4 px-4 font-semibold">Status / Stage</th>
                    <th className="py-4 px-4 font-semibold text-right">Statutory Proof Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans">
                  {filteredProjects.map((p, i) => (
                    <tr key={p.id} className="hover:bg-amber-50/50 transition-colors">
                      <td className="py-3.5 px-4 text-slate-400 font-mono">{i + 1}</td>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        <button
                          onClick={() => setSelectedProject(p)}
                          className="hover:text-amber-700 text-left font-bold"
                        >
                          {p.title}
                        </button>
                        <div className="text-[11px] font-normal text-slate-500">{p.location}</div>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-700">{p.city}</td>
                      <td className="py-3.5 px-4">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700">
                          {p.category}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-mono text-xs text-slate-600">
                        CA/2018/103740
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          {p.constructionStage || 'RERA Active'}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <a
                          href={p.verificationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-amber-700 text-xs font-medium transition-all shadow-sm"
                        >
                          <span>Statutory Link</span>
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

      {/* Project Deep-Dive Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default Portfolio;