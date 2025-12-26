
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-600">Pix_Pick</h3>
            <p className="text-gray-500 leading-relaxed">
              Leading marketplace for premium design assets. We help creators build amazing things by providing high-quality tools and resources.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-50 text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all rounded-lg"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-gray-50 text-gray-400 hover:text-pink-600 hover:bg-pink-50 transition-all rounded-lg"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-gray-50 text-gray-400 hover:text-blue-400 hover:bg-blue-50 transition-all rounded-lg"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-gray-50 text-gray-400 hover:text-blue-800 hover:bg-blue-50 transition-all rounded-lg"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-widest">Company</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Sell your content</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-widest">Support</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">API for Developers</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Brand Guidelines</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contributor Portal</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-widest">Legal</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Copyright Information</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">License Agreement</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 Pix_Pick. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Made with ❤️ for Creators</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
