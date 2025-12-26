
import React from 'react';
import { X, Download, Share2, Heart } from 'lucide-react';

interface PreviewModalProps {
  imageUrl: string;
  title: string;
  onClose: () => void;
}

export const PreviewModal: React.FC<PreviewModalProps> = ({ imageUrl, title, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in zoom-in duration-300">
        {/* Close Button Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full md:hidden"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Area */}
        <div className="flex-grow bg-gray-100 flex items-center justify-center overflow-hidden p-4">
          <img 
            src={imageUrl} 
            alt={title} 
            className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Info Sidebar */}
        <div className="w-full md:w-[350px] bg-white p-6 md:p-8 flex flex-col">
          <div className="hidden md:flex justify-end mb-6">
            <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-500 text-sm mb-8">Premium asset optimized for web and print. Resolution: 4000x3000px.</p>

          <div className="space-y-4 mt-auto">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-100">
              <Download className="w-5 h-5" />
              Download Asset
            </button>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-all">
                <Heart className="w-4 h-4" />
                Favorite
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-all">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">License Information</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Royalty-free license. Can be used for any commercial or personal purpose. No attribution required for Premium users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
