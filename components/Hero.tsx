
import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const tags = ['Images', 'Vectors', 'Icons', 'Illustrations', 'Backgrounds'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          High-quality images, vectors & icons for everyone
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Download free and premium design assets for your projects from our curated library.
        </p>

        <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto mb-8 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur opacity-25 group-focus-within:opacity-50 transition duration-300"></div>
          <div className="relative flex items-center bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="pl-6 text-gray-400">
              <Search className="w-6 h-6" />
            </div>
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search images, vectors, icons..."
              className="w-full py-5 px-4 text-lg outline-none text-gray-700 placeholder:text-gray-400"
            />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 font-bold transition-all text-lg hidden sm:block">
              Search
            </button>
          </div>
        </form>

        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag) => (
            <button 
              key={tag}
              onClick={() => onSearch(tag)}
              className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-all text-sm font-medium shadow-sm"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
    </section>
  );
};
