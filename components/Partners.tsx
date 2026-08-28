import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ALL_VERIFIED_PROJECTS } from '../data/projectsData';
import { 
  Building2, 
  MapPin, 
  ArrowRight, 
  Search, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Award,
  Filter,
  CheckCircle2
} from 'lucide-react';
import Reveal from './Reveal';

interface DeveloperProfile {
  name: string;
  legalEntity?: string;
  projectCount: number;
  cities: string[];
  categories: string[];
  projects: { id: string; title: string; category: string }[];
}

export const Partners: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCity, setSelectedCity] = useState<string>('All');

  // Aggregate rich developer ecosystem data
  const developerProfiles = useMemo<DeveloperProfile[]>(() => {
    const map = new Map<string, DeveloperProfile>();

    ALL_VERIFIED_PROJECTS.forEach(project => {
      const devName = project.developer || 'Institutional Developer';
      if (!map.has(devName)) {
        map.set(devName, {
          name: devName,
          legalEntity: project.developerEntity || devName,
          projectCount: 0,
          cities: [],
          categories: [],
          projects: []
        });
      }

      const prof = map.get(devName)!;
      prof.projectCount += 1;
      if (project.city && !prof.cities.includes(project.city)) {
        prof.cities.push(project.city);
      }
      if (project.category && !prof.categories.includes(project.category)) {
        prof.categories.push(project.category);
      }
      prof.projects.push({
        id: project.id,
        title: project.title,
        category: project.category
      });
    });

    return Array.from(map.values()).sort((a, b) => b.projectCount - a.projectCount || a.name.localeCompare(b.name));
  }, []);

  // Unique lists for filtering
  const allCities = useMemo(() => {
    const set = new Set<string>();
    developerProfiles.forEach(d => d.cities.forEach(c => set.add(c)));
    return ['All', ...Array.from(set).sort()];
  }, [developerProfiles]);

  const categories = ['All', 'Residential', 'Commercial', 'Mixed Development'];

  // Filtered developers
  const filteredDevelopers = useMemo(() => {
    return developerProfiles.filter(dev => {
      const matchesCategory = 
        activeCategory === 'All' || 
        dev.categories.includes(activeCategory);

      const matchesCity = 
        selectedCity === 'All' || 
        dev.cities.includes(selectedCity);

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        dev.name.toLowerCase().includes(q) ||
        (dev.legalEntity && dev.legalEntity.toLowerCase().includes(q)) ||
        dev.cities.some(c => c.toLowerCase().includes(q)) ||
        dev.projects.some(p => p.title.toLowerCase().includes(q));

      return matchesCategory && matchesCity && matchesSearch;
    });
  }, [developerProfiles, activeCategory, selectedCity, searchQuery]);

  const getInitials = (name: string) => {
    return name
      .replace(/LLP|Llp|Ltd|Pvt|Group|Corp|Associates|Infra|Realty|Developers/gi, '')
      .trim()
      .split(' ')
      .filter(w => w.length > 0)
      .map(w => w[0])
      .join('')
      .substring(0, 2)
      .toUpperCase() || 'VG';
  };

  const handleDeveloperClick = (devName: string) => {
    navigate(`/portfolio?developer=${encodeURIComponent(devName)}`);
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/5">
      {/* Ambient background grid and glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b1a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b1a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Institutional Client Ecosystem
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              Partnering with Gujarat's Leading Promoters
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              Ar. Vidhi Satishbhai Gajjar serves as the Architect of Record and Certifying Consultant for {developerProfiles.length}+ top real estate developers across Ahmedabad, Gandhinagar, Surat, and North Gujarat.
            </p>
          </div>
        </Reveal>

        {/* Aggregate Trust HUD */}
        <Reveal variant="fade-up">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md mb-12 text-center">
            <div>
              <div className="text-2xl sm:text-4xl font-serif font-bold text-amber-300 font-mono">
                {developerProfiles.length}+
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mt-1">
                Developer Partners
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-serif font-bold text-sky-400 font-mono">
                48
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mt-1">
                RERA Certified Sites
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-serif font-bold text-emerald-400 font-mono">
                100%
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mt-1">
                Form 1 Approvals
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-serif font-bold text-indigo-400 font-mono">
                6 Cities
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mt-1">
                Regional Coverage
              </div>
            </div>
          </div>
        </Reveal>

        {/* Filter Toolbar */}
        <Reveal variant="fade-up" delay={100}>
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl mb-10 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              
              {/* Search input */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="developer-search"
                  name="developerSearch"
                  aria-label="Search developer, project, or city"
                  type="text"
                  placeholder="Search developer, project, city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950/80 border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
              </div>

              {/* Category pills */}
              <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                      activeCategory === cat
                        ? 'bg-amber-600 text-white shadow-md'
                        : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* City selector */}
              <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
                <span className="text-[11px] font-mono uppercase text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Region:
                </span>
                <select
                  id="city-filter"
                  name="cityFilter"
                  aria-label="Filter by region or city"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="px-3 py-1.5 rounded-xl bg-slate-950 border border-white/10 text-xs font-mono text-slate-200 focus:outline-none focus:border-amber-500"
                >
                  {allCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

            </div>
          </div>
        </Reveal>

        {/* Developer Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDevelopers.map((dev, idx) => (
            <Reveal key={dev.name} delay={(idx % 6) * 50}>
              <div 
                onClick={() => handleDeveloperClick(dev.name)}
                className="group relative p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between cursor-pointer overflow-hidden backdrop-blur-sm"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/0 group-hover:bg-amber-500/5 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top card bar: Logo Monogram & Project Count */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700 group-hover:border-amber-500/40 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 shrink-0">
                      <span className="font-serif font-bold text-lg text-amber-300 tracking-wider">
                        {getInitials(dev.name)}
                      </span>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono font-semibold">
                        <CheckCircle2 className="w-3 h-3" />
                        {dev.projectCount} {dev.projectCount === 1 ? 'Site' : 'Sites'} Certified
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 mt-1">
                        CoA CA/2018/103740
                      </span>
                    </div>
                  </div>

                  {/* Developer Name & Legal Entity */}
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                    {dev.name}
                  </h3>
                  {dev.legalEntity && dev.legalEntity !== dev.name && (
                    <p className="text-[11px] font-mono text-slate-400 truncate mt-0.5">
                      {dev.legalEntity}
                    </p>
                  )}

                  {/* Operating Cities & Categories */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-3">
                    {dev.cities.map(c => (
                      <span key={c} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-950/80 border border-white/5 text-[10px] font-mono text-slate-300">
                        <MapPin className="w-2.5 h-2.5 text-amber-400" />
                        {c}
                      </span>
                    ))}
                    {dev.categories.map(cat => (
                      <span key={cat} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-slate-400">
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Featured Projects Preview Pills */}
                  <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                      Certified Developments:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {dev.projects.slice(0, 3).map(p => (
                        <span key={p.id} className="text-[11px] font-mono text-amber-200/90 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20 truncate max-w-full">
                          &bull; {p.title}
                        </span>
                      ))}
                      {dev.projects.length > 3 && (
                        <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5">
                          +{dev.projects.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-amber-400 group-hover:text-amber-300">
                  <span className="font-semibold uppercase tracking-wider">Explore Register</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Empty state */}
        {filteredDevelopers.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-white/5">
            <Building2 className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h4 className="text-base font-serif font-semibold text-white">No Developers Found</h4>
            <p className="text-xs text-slate-400 mt-1">Try resetting your search query or category filters.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); setSelectedCity('All'); }}
              className="mt-4 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-slate-200 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Partners;
