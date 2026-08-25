import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, MapPin, Mail, Phone, ExternalLink, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1 & 2: Studio Overview */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-serif font-bold text-lg text-amber-300">VG</span>
                </div>
              </div>
              <div>
                <div className="font-serif font-bold text-xl tracking-wider">STUDIO VIDHI GAJJAR</div>
                <div className="text-xs font-mono text-amber-400">ARCHITECT &bull; CA/2018/103740</div>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Contemporary architectural planning, high-density residential towers, flagship commercial headquarters, and statutory GujRERA certifications across Gujarat.
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-amber-300 font-semibold">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Statutory Authority & Registration</span>
              </div>
              <div className="text-slate-300 font-mono text-[11px]">
                Council of Architecture: <b>CA/2018/103740</b><br />
                Certifying Architect of Record: <b>48+ RERA Developments</b>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">Practice</h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><Link to="/portfolio" className="hover:text-white transition-colors">48 Projects Register</Link></li>
              <li><Link to="/practice" className="hover:text-white transition-colors">Architecture & Planning</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Ar. Vidhi S. Gajjar</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Swetang Gajjar (AI Lead)</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Commission Inquiry</Link></li>
            </ul>
          </div>

          {/* Column 4: Key Regions */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">Territories</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center justify-between">
                <span>Ahmedabad</span>
                <span className="font-mono text-slate-500">34 Projects</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Gandhinagar</span>
                <span className="font-mono text-slate-500">8 Projects</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Palanpur / Banaskantha</span>
                <span className="font-mono text-slate-500">3 Projects</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Surat, Surendranagar, Mehsana</span>
                <span className="font-mono text-slate-500">3 Projects</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Coordinates */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">Coordinates</h4>
            <div className="space-y-3 text-xs text-slate-400 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Science City Road / Ambawadi, Ahmedabad, Gujarat 380060</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>contact@studiovidhigajjar.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91 9104518311</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Studio Vidhi Gajjar. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>COA: CA/2018/103740</span>
            <span>&bull;</span>
            <Link to="/privacy" className="hover:text-slate-400">Statutory Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;