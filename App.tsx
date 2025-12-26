
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { AssetGrid } from './components/AssetGrid';
import { FeaturedCollections } from './components/FeaturedCollections';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Pricing } from './components/Pricing';
import { CategoryDetails } from './components/CategoryDetails';
import { CollectionDetails } from './components/CollectionDetails';
import { PreviewModal } from './components/PreviewModal';
import { View, User } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedCollection, setSelectedCollection] = useState<string>('');
  const [previewAsset, setPreviewAsset] = useState<{ url: string; title: string } | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleNavigate = (view: View, payload?: string) => {
    if (view === 'category' && payload) {
      setSelectedCategory(payload);
    }
    if (view === 'collection' && payload) {
      setSelectedCollection(payload);
    }
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const handleLogin = (userData: User) => {
    setIsAuthenticated(true);
    setUser(userData);
    handleNavigate('home');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    handleNavigate('home');
  };

  const openPreview = (url: string, title: string) => {
    setPreviewAsset({ url, title });
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closePreview = () => {
    setPreviewAsset(null);
    document.body.style.overflow = 'auto';
  };

  const renderContent = () => {
    switch (currentView) {
      case 'login':
        return <Login onNavigate={handleNavigate} onLogin={handleLogin} />;
      case 'register':
        return <Register onNavigate={handleNavigate} onRegister={handleLogin} />;
      case 'pricing':
        return <Pricing onBack={() => handleNavigate('home')} />;
      case 'category':
        return <CategoryDetails 
          categoryName={selectedCategory} 
          onBack={() => handleNavigate('home')} 
          onPreview={openPreview} 
        />;
      case 'collection':
        return <CollectionDetails 
          collectionTitle={selectedCollection} 
          onBack={() => handleNavigate('home')} 
          onPreview={openPreview}
        />;
      case 'home':
      default:
        return (
          <>
            <Hero onSearch={(query) => handleNavigate('category', query)} />
            <CategorySection onSelectCategory={(cat) => handleNavigate('category', cat)} />
            <AssetGrid onPreview={openPreview} />
            <FeaturedCollections onExplore={(coll) => handleNavigate('collection', coll)} />
            {!isAuthenticated && (
              <div className="pb-20">
                <CTA />
              </div>
            )}
            {isAuthenticated && (
              <div className="bg-blue-50 py-16 text-center">
                <div className="max-w-4xl mx-auto px-4">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome back, {user?.name}!</h2>
                  <p className="text-gray-600 mb-8">Ready to start your next big project? Browse our latest premium additions.</p>
                  <button onClick={() => handleNavigate('pricing')} className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all">
                    Upgrade Subscription
                  </button>
                </div>
              </div>
            )}
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar 
        onNavigate={handleNavigate} 
        currentView={currentView} 
        isAuthenticated={isAuthenticated} 
        user={user} 
        onLogout={handleLogout}
      />
      
      <main className="flex-grow transition-all duration-300">
        {renderContent()}
      </main>

      {previewAsset && (
        <PreviewModal 
          imageUrl={previewAsset.url} 
          title={previewAsset.title} 
          onClose={closePreview} 
        />
      )}

      <Footer />
    </div>
  );
};

export default App;
