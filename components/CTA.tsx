
import React from 'react';
import { CheckCircle } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-blue-600 rounded-[2rem] p-8 md:p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative">
        {/* Background blobs */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-xl text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Unlock unlimited downloads</h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed">
            Get access to 10M+ premium assets, exclusive fonts, and pro editing tools with Pix_Pick Pro.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-200" />
              <span>Premium Licenses</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-200" />
              <span>Priority Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-200" />
              <span>No Attribution</span>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-extrabold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform">
            View Pricing Plans
          </button>
          <p className="text-blue-200 text-center mt-4 text-sm">Starts from just $9.99/mo</p>
        </div>
      </div>
    </section>
  );
};
