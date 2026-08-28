import React, { useState } from 'react';
import Reveal from '../components/Reveal';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  ShieldCheck 
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential Tower / Villa',
    city: 'Ahmedabad',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Project Commission & Inquiry
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            Initiate an Architectural Dialogue.
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-3 font-light leading-relaxed">
            Direct collaboration with Ar. Vidhi S. Gajjar for architectural master planning, luxury residential developments, commercial corporate hubs, and statutory RERA certifications across Gujarat.
          </p>
        </Reveal>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-2xl">
                
                {submitted ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white">Inquiry Transmitted</h3>
                    <p className="text-sm text-slate-400 max-w-md mx-auto">
                      Thank you for contacting Studio Vidhi Gajjar. Our architectural team will review your project requirements and connect within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono font-semibold text-slate-200"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="contactName" className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                          Full Name *
                        </label>
                        <input
                          id="contactName"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Vikram Patel"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="contactEmail" className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                          Email Address *
                        </label>
                        <input
                          id="contactEmail"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. name@domain.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="contactPhone" className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                          Contact Number *
                        </label>
                        <input
                          id="contactPhone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="contactProjectType" className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                          Development Typology
                        </label>
                        <select
                          id="contactProjectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                        >
                          <option>Residential Tower / High-Rise</option>
                          <option>Luxury Villa / Plotted Scheme</option>
                          <option>Commercial Office Headquarters</option>
                          <option>Retail Mall & Mixed Development</option>
                          <option>Statutory RERA Form 1 Compliance</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contactCity" className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                        Project Territory / City
                      </label>
                      <select
                        id="contactCity"
                        name="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        <option>Ahmedabad</option>
                        <option>Gandhinagar</option>
                        <option>Palanpur / Banaskantha</option>
                        <option>Surendranagar</option>
                        <option>Mehsana</option>
                        <option>Surat</option>
                        <option>Other Region in Gujarat</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contactMessage" className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                        Project Scope & Requirements
                      </label>
                      <textarea
                        id="contactMessage"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Provide details on site plot size, total FSI/built-up area, proposed stage, and architectural scope..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold text-xs font-mono uppercase tracking-widest transition-all shadow-xl shadow-amber-950 flex items-center justify-center gap-2"
                    >
                      <span>Transmit Commission Request</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}

              </div>
            </Reveal>
          </div>

          {/* Right Column: Studio Coordinates & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={150}>
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl space-y-6">
                <h3 className="text-xl font-serif font-bold text-white">Studio Coordinates</h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Ahmedabad Practice</div>
                      <div className="text-slate-400 text-xs mt-0.5">Science City Road / Ambawadi, Ahmedabad, Gujarat 380060</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Electronic Inquiries</div>
                      <div className="text-slate-400 text-xs mt-0.5">contact@studiovidhigajjar.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Direct Line</div>
                      <div className="text-slate-400 text-xs mt-0.5">+91 9104518311 / +91 9429021118</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-3">
                  <div className="text-xs font-mono font-bold uppercase text-amber-400 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    Statutory Licensing Authority
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-mono">
                    COA Registration: <b>CA/2018/103740</b><br />
                    Certifying Architect of Record for 48+ GujRERA statutory projects across Gujarat.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;