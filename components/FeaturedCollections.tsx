
import React from 'react';
import { COLLECTIONS } from '../data';

interface FeaturedCollectionsProps {
  onExplore: (collectionTitle: string) => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({ onExplore }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Collections</h2>
        <p className="text-gray-500">Curated sets hand-picked by our editors for your inspiration.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {COLLECTIONS.map((item) => (
          <div key={item.id} className="group relative h-[250px] md:h-[300px] rounded-3xl overflow-hidden shadow-lg cursor-pointer">
            <img 
              src={item.image} 
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            <div className="relative h-full flex flex-col justify-center p-8 md:p-12 text-white max-w-[70%]">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 transform group-hover:-translate-y-1 transition-transform">{item.title}</h3>
              <p className="text-gray-200 text-sm md:text-base line-clamp-2 mb-6 transform group-hover:-translate-y-1 transition-transform delay-75">{item.description}</p>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onExplore(item.title);
                }}
                className="w-fit bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-600 hover:text-white transition-all"
              >
                Explore Collection
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
