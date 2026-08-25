import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
      <h1 className="text-4xl font-serif font-bold text-slate-900 mb-8">Terms of Service</h1>
      <div className="prose prose-slate max-w-none">
        <p className="text-slate-600 mb-6">Last Updated: March 2024</p>
        
        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="text-slate-600 mb-4">
          By accessing and using the VastuCraft AI Studio website, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Use of Services</h2>
        <p className="text-slate-600 mb-4">
          Our architectural, Vastu, and AI monitoring services are subject to separate professional contracts signed upon engagement. The content on this website is for informational purposes only.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Intellectual Property</h2>
        <p className="text-slate-600 mb-4">
          All content included on this site, such as text, graphics, logos, images, and software, is the property of VastuCraft AI Studio or its content suppliers and protected by international copyright laws.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Limitation of Liability</h2>
        <p className="text-slate-600 mb-4">
          VastuCraft AI Studio shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use our website or services.
        </p>
      </div>
    </div>
  );
};

export default Terms;