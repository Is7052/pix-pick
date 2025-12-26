
import React from 'react';
import { Eye, Download, Star, ArrowLeft } from 'lucide-react';
import { Asset } from '../types';

interface CollectionDetailsProps {
  collectionTitle: string;
  onBack: () => void;
  onPreview: (imageUrl: string, title: string) => void;
}

export const CollectionDetails: React.FC<CollectionDetailsProps> = ({ collectionTitle, onBack, onPreview }) => {
  // Generate 20 mock assets for the selected collection
  const mockAssets: Asset[] = Array.from({ length: 20 }, (_, i) => ({
    id: `coll-asset-${i}`,
    title: `${collectionTitle} Item ${i + 1}`,
    type: i % 4 === 0 ? 'Premium' : 'Free',
    thumbnail: `https://picsum.photos/seed/collection-${collectionTitle.toLowerCase().replace(/\s/g, '-')}-${i}/800/600`,
    category: 'Collection Asset',
  }));

  return (
    <div className="pt-32 pb-24 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors font-medium mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2 block">Curated Collection</span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{collectionTitle}</h1>
              <p className="text-gray-500 max-w-2xl">A premium selection of hand-picked resources designed to elevate your professional projects. Download all 20 assets now.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all text-sm">
                Download All (ZIP)
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {mockAssets.map((asset) => (
            <div key={asset.id} className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={asset.thumbnail} 
                  alt={asset.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                <div className="absolute top-2 left-2 md:top-3 md:left-3 flex gap-2">
                  <span className={`px-2 py-0.5 md:px-2.5 md:py-1 rounded-lg text-[9px] md:text-[10px] font-bold uppercase tracking-wider ${
                    asset.type === 'Free' ? 'bg-green-500/90 text-white' : 'bg-yellow-500/90 text-white flex items-center gap-1'
                  }`}>
                    {asset.type === 'Premium' && <Star className="w-2.5 h-2.5 md:w-3 h-3 fill-current" />}
                    {asset.type}
                  </span>
                </div>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 md:gap-3">
                  <button 
                    onClick={() => onPreview(asset.thumbnail, asset.title)}
                    className="p-2 md:p-3 bg-white rounded-full text-gray-900 hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                  >
                    <Eye className="w-4 h-4 md:w-5 h-5" />
                  </button>
                  <button className="p-2 md:p-3 bg-white rounded-full text-gray-900 hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 shadow-lg">
                    <Download className="w-4 h-4 md:w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-3 md:p-4">
                <h3 className="font-semibold text-gray-800 text-xs md:text-sm truncate group-hover:text-blue-600 transition-colors">
                  {asset.title}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-gray-400 text-[10px] md:text-xs">Curated Selection</span>
                  <button className="text-gray-400 hover:text-blue-600">
                    <Star className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
