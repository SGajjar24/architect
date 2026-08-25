import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import Logo from './Logo';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleServiceClick = (hash: string) => {
    navigate(`/services#${hash}`);
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col mb-4">
              <Logo variant="light" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 mt-4">
              Where Vastu-perfect design meets AI-powered construction. Led by Ar. Vidhi Gajjar & Swetang Gajjar.
            </p>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 bg-transparent border-0 cursor-pointer"><Instagram size={20} /></a>
              <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 bg-transparent border-0 cursor-pointer"><Linkedin size={20} /></a>
              <a href={SOCIAL_LINKS.TWITTER} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 bg-transparent border-0 cursor-pointer"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button onClick={() => navigate('/about')} className="hover:text-amber-500 bg-transparent border-0 p-0 cursor-pointer text-left">About Us</button></li>
              <li><button onClick={() => navigate('/services')} className="hover:text-amber-500 bg-transparent border-0 p-0 cursor-pointer text-left">Services</button></li>
              <li><button onClick={() => navigate('/portfolio')} className="hover:text-amber-500 bg-transparent border-0 p-0 cursor-pointer text-left">Portfolio</button></li>
              <li><button onClick={() => navigate('/blog')} className="hover:text-amber-500 bg-transparent border-0 p-0 cursor-pointer text-left">Blog</button></li>
              <li><button onClick={() => navigate('/contact')} className="hover:text-amber-500 bg-transparent border-0 p-0 cursor-pointer text-left">Contact</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button onClick={() => handleServiceClick('architecture')} className="hover:text-amber-500 bg-transparent border-0 p-0 cursor-pointer text-left">Architecture</button></li>
              <li><button onClick={() => handleServiceClick('interiors')} className="hover:text-amber-500 bg-transparent border-0 p-0 cursor-pointer text-left">Interior Design</button></li>
              <li><button onClick={() => handleServiceClick('vastu')} className="hover:text-amber-500 bg-transparent border-0 p-0 cursor-pointer text-left">Vastu Consulting</button></li>
              <li><button onClick={() => handleServiceClick('ai-tech')} className="hover:text-amber-500 bg-transparent border-0 p-0 cursor-pointer text-left">AI Construction Monitoring</button></li>
              <li><button onClick={() => handleServiceClick('exterior')} className="hover:text-amber-500 bg-transparent border-0 p-0 cursor-pointer text-left">Facade Design</button></li>
              <li><button onClick={() => handleServiceClick('construction')} className="hover:text-amber-500 bg-transparent border-0 p-0 cursor-pointer text-left">Turnkey Construction</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Contact</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <span>Offices in Ahmedabad<br/>and Gandhinagar</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 shrink-0" />
                <span>{CONTACT_INFO.PHONE_DISPLAY}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500 shrink-0" />
                <span>{CONTACT_INFO.EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} VastuCraft AI Studio. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <button onClick={() => navigate('/privacy')} className="hover:text-white bg-transparent border-0 cursor-pointer">Privacy Policy</button>
            <button onClick={() => navigate('/terms')} className="hover:text-white bg-transparent border-0 cursor-pointer">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;