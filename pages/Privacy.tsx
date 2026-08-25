import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
      <h1 className="text-4xl font-serif font-bold text-slate-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none">
        <p className="text-slate-600 mb-6">Last Updated: March 2024</p>
        
        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Information We Collect</h2>
        <p className="text-slate-600 mb-4">
          We collect information you provide directly to us when you fill out our contact form, request a quote, or communicate with us. This includes your name, email address, phone number, and project details.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Use of Information</h2>
        <p className="text-slate-600 mb-4">
          We use the information solely to:
        </p>
        <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
          <li>Respond to your inquiries and provide architectural services.</li>
          <li>Schedule consultations for Vastu or AI monitoring services.</li>
          <li>Send administrative information, such as updates, security alerts, and support messages.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Data Protection</h2>
        <p className="text-slate-600 mb-4">
          We implement appropriate technical and organizational measures to protect the security of your personal information. Your data is never sold to third parties.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Contact Us</h2>
        <p className="text-slate-600 mb-4">
          If you have any questions about this Privacy Policy, please contact us at hello@vastucraftai.com.
        </p>
      </div>
    </div>
  );
};

export default Privacy;