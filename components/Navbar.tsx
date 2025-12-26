
import React, { useState, useEffect } from 'react';
import { Search, Menu, X, User as UserIcon, LogOut, Share2, Check } from 'lucide-react';
import { View, User } from '../types';

interface NavbarProps {
  onNavigate: (view: View, category?: string) => void;
  currentView: View;
  isAuthenticated: boolean;
  user: User | null;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView, isAuthenticated, user, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: View) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate('category', searchQuery.trim());
      setSearchQuery('');
      setIsSearchActive(false);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Pix_Pick - Premium Design Assets',
      text: 'Check out Pix_Pick for high-quality images, vectors, and icons!',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || currentView !== 'home' ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        <div className="flex-shrink-0">
          <button onClick={() => handleNavClick('home')} className="text-2xl font-bold tracking-tight text-blue-600 outline-none">
            Pix_Pick
          </button>
        </div>

        <form onSubmit={handleSearch} className={`hidden md:flex flex-grow max-w-2xl relative ${currentView !== 'home' && currentView !== 'category' ? 'invisible' : ''}`}>
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search images, vectors, icons..."
            className="w-full bg-gray-100 hover:bg-gray-200 focus:bg-white border-none rounded-full py-2.5 pl-12 pr-4 transition-all duration-200 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </form>

        <div className={`md:hidden flex-grow flex justify-end ${currentView !== 'home' && currentView !== 'category' ? 'hidden' : ''}`}>
           <button 
            onClick={() => setIsSearchActive(!isSearchActive)}
            className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
           >
             <Search className="w-6 h-6" />
           </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={handleShare}
            className="p-2 text-gray-500 hover:text-blue-600 transition-all relative group"
            title="Share App"
          >
            {copied ? <Check className="w-5 h-5 text-green-500" /> : <Share2 className="w-5 h-5" />}
            {copied && (
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded">Copied!</span>
            )}
          </button>

          <button 
            onClick={() => handleNavClick('pricing')}
            className={`font-medium transition-colors ${currentView === 'pricing' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          >
            Pricing
          </button>
          
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <UserIcon className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-gray-700">{user?.name.split(' ')[0]}</span>
              </div>
              <button 
                onClick={onLogout}
                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <>
              <button 
                onClick={() => handleNavClick('login')} 
                className={`font-medium transition-colors ${currentView === 'login' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              >
                Login
              </button>
              <button 
                onClick={() => handleNavClick('register')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-sm hover:shadow-md"
              >
                Register
              </button>
            </>
          )}
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={handleShare} className="p-2 text-gray-600">
            <Share2 className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {isSearchActive && (
        <div className="md:hidden px-4 pb-4 animate-in slide-in-from-top duration-300">
          <form onSubmit={handleSearch} className="relative">
            <input 
              type="text" 
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search assets..."
              className="w-full bg-white border border-gray-200 rounded-lg py-3 pl-12 pr-4 shadow-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </form>
        </div>
      )}

      <div className={`fixed inset-0 bg-white z-[60] transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <button onClick={() => handleNavClick('home')} className="text-2xl font-bold text-blue-600 outline-none">Pix_Pick</button>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-8 h-8 text-gray-600" />
            </button>
          </div>
          <div className="flex flex-col gap-6 text-xl">
            <button onClick={() => handleNavClick('home')} className="text-left font-medium text-gray-800 py-2 border-b border-gray-100">Home</button>
            <button onClick={() => handleNavClick('pricing')} className="text-left font-medium text-gray-800 py-2 border-b border-gray-100">Pricing</button>
            <button onClick={handleShare} className="text-left font-medium text-blue-600 py-2 border-b border-gray-100 flex items-center gap-2">
              <Share2 className="w-5 h-5" /> Share App
            </button>
            
            {isAuthenticated ? (
              <>
                <div className="py-2 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <UserIcon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900">{user?.name}</span>
                    <span className="text-sm text-gray-500">{user?.email}</span>
                  </div>
                </div>
                <button onClick={onLogout} className="text-left font-medium text-red-500 py-2 border-b border-gray-100">Logout</button>
              </>
            ) : (
              <>
                <button onClick={() => handleNavClick('login')} className="text-left font-medium text-gray-800 py-2 border-b border-gray-100">Login</button>
                <button onClick={() => handleNavClick('register')} className="mt-4 bg-blue-600 text-white text-center py-4 rounded-xl font-bold">Register</button>
              </>
            )}
          </div>
          <div className="mt-auto pt-10 text-center">
            <p className="text-gray-400 text-sm">© 2025 Pix_Pick Inc.</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
