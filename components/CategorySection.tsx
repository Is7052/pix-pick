
import React from 'react';
import { CATEGORIES } from '../data';
import * as LucideIcons from 'lucide-react';

interface CategorySectionProps {
  onSelectCategory: (category: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ onSelectCategory }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse by Category</h2>
          <p className="text-gray-500">Find exactly what you need with our organized collections.</p>
        </div>
        <button onClick={() => onSelectCategory('All Assets')} className="text-blue-600 font-semibold hover:underline hidden md:block">
          View all categories →
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {CATEGORIES.map((cat) => {
          const IconComponent = (LucideIcons as any)[cat.icon];
          return (
            <div 
              key={cat.id} 
              onClick={() => onSelectCategory(cat.name)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 shadow-sm group-hover:shadow-xl transition-all duration-300">
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  {IconComponent && <IconComponent className="w-5 h-5" />}
                  <span className="font-bold text-lg">{cat.name}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
