import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, ArrowUpRight } from 'lucide-react';

interface DeveloperItem {
  name: string;
  category: string;
  projectCount: number;
  featured: string;
}

const PREMIER_DEVELOPERS: DeveloperItem[] = [
  { name: 'Shilp Group', category: 'High-Rise Residential & Commercial', projectCount: 8, featured: 'Shilp Residency, Serene, Business Gateway' },
  { name: 'Shaligram Group', category: 'Luxury Residential & High-Street Retail', projectCount: 5, featured: 'Shaligram Arcade, Lakeview' },
  { name: 'Swati Procon', category: 'Modern Urban Living & High-Density', projectCount: 4, featured: 'Swati Clover, Symphony' },
  { name: 'Goyal & Co. / Riviera', category: 'Master-Planned Communities', projectCount: 6, featured: 'Riviera Prestige, Rivera Greens' },
  { name: 'Vishwanath Builders', category: 'Contemporary High-Rise Living', projectCount: 4, featured: 'Sarathya West, North' },
  { name: 'Ratnaakar Group', category: 'Grade-A Commercial Infrastructure', projectCount: 4, featured: 'Ratnaakar Verte, Atelier' },
  { name: 'S9 Group', category: 'Commercial Retail Hubs & Mixed Use', projectCount: 5, featured: 'S9 Imperial, Landmark, Sarvoday' },
  { name: 'Sahajanand Group', category: 'Residential & Urban Townships', projectCount: 4, featured: 'Sahajanand S+, Swarg' },
  { name: 'Status Group', category: 'Boutique Commercial Hubs', projectCount: 3, featured: 'Status Elegance, Elysium' },
];

export const DeveloperMarquee: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-14 bg-slate-950/90 border-y border-white/5 overflow-hidden select-none">
      {/* Background Subtle Gradient & Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />

      {/* Header Label */}
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-slate-400 text-[11px] font-mono font-medium uppercase tracking-widest">
          <Building2 className="w-3.5 h-3.5 text-amber-400" />
          <span>Institutional Developer Collaborations Across Gujarat</span>
        </div>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 items-center gap-6 animate-marquee hover:[animation-play-state:paused]">
          {[...PREMIER_DEVELOPERS, ...PREMIER_DEVELOPERS].map((dev, idx) => (
            <div
              key={`${dev.name}-${idx}`}
              onClick={() => navigate(`/portfolio?developer=${encodeURIComponent(dev.name)}`)}
              className="group cursor-pointer flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-amber-500/40 backdrop-blur-md transition-all duration-300 shrink-0 shadow-lg hover:shadow-amber-500/5 hover:-translate-y-0.5"
            >
              {/* Monogram Badge */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20 flex items-center justify-center text-amber-300 font-serif font-bold text-sm tracking-wider group-hover:scale-105 group-hover:border-amber-400/50 group-hover:text-amber-200 transition-all">
                {dev.name.substring(0, 2).toUpperCase()}
              </div>

              {/* Developer Info */}
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-white text-sm tracking-tight group-hover:text-amber-300 transition-colors">
                    {dev.name}
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-amber-400 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                </div>
                <span className="text-[11px] text-slate-400 font-sans line-clamp-1">
                  {dev.category}
                </span>
              </div>

              {/* Project Count Badge */}
              <div className="ml-2 px-2.5 py-1 rounded-full bg-slate-900 border border-white/10 text-[10px] font-mono text-amber-400/90 group-hover:border-amber-500/30">
                {dev.projectCount}+ Projects
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperMarquee;
