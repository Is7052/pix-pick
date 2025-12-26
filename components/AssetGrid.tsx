
import React from 'react';
import { POPULAR_ASSETS } from '../data';
import { Eye, Download, Star } from 'lucide-react';

interface AssetGridProps {
  onPreview: (imageUrl: string, title: string) => void;
}

export const AssetGrid: React.FC<AssetGridProps> = ({ onPreview }) => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <h2 className="text-3xl font-bold text-gray-900">Popular on Pix_Pick</h2>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 transition-colors text-sm">Latest</button>
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium shadow-sm text-sm">Trending</button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {POPULAR_ASSETS.map((asset) => (
            <div key={asset.id} className="group relative flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-xl">
              {/* Thumbnail Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={asset.thumbnail} 
                  alt={asset.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Badges */}
                <div className="absolute top-2 left-2 md:top-3 md:left-3 flex gap-2">
                  <span className={`px-2 py-0.5 md:px-2.5 md:py-1 rounded-md text-[9px] md:text-[10px] font-bold uppercase tracking-wider ${
                    asset.type === 'Free' ? 'bg-green-500/90 text-white' : 'bg-yellow-500/90 text-white flex items-center gap-1'
                  }`}>
                    {asset.type === 'Premium' && <Star className="w-2.5 h-2.5 md:w-3 h-3 fill-current" />}
                    {asset.type}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 md:gap-3">
                  <button 
                    onClick={() => onPreview(asset.thumbnail, asset.title)}
                    className="p-2 md:p-3 bg-white rounded-full text-gray-900 hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg"
                  >
                    <Eye className="w-4 h-4 md:w-5 h-5" />
                  </button>
                  <button className="p-2 md:p-3 bg-white rounded-full text-gray-900 hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 shadow-lg">
                    <Download className="w-4 h-4 md:w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-3 md:p-4">
                <h3 className="font-semibold text-gray-800 text-xs md:text-sm lg:text-base truncate group-hover:text-blue-600 transition-colors">
                  {asset.title}
                </h3>
                <p className="text-gray-400 text-[10px] md:text-xs mt-1">{asset.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <button className="w-full md:w-auto px-10 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
            Explore more assets
          </button>
        </div>
      </div>
    </section>
  );
};
