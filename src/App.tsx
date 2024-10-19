import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import { Palette } from 'lucide-react';

const PantoneColorGrid = lazy(() => import('./components/PantoneColorGrid'));
const Blog = lazy(() => import('./components/Blog'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));

function App() {
  const { t } = useTranslation();
  const [isNavSticky, setIsNavSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavSticky(true);
      } else {
        setIsNavSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <nav className={`bg-white shadow-md ${isNavSticky ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Palette className="mr-2" size={24} />
                <Link to="/" className="text-xl font-bold">{t('pantoneColorsChart')}</Link>
              </div>
              <div className="flex space-x-4 items-center">
                <Link to="/" className="text-gray-800 hover:text-blue-500">{t('home')}</Link>
                <Link to="/blog" className="text-gray-800 hover:text-blue-500">{t('blog')}</Link>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </nav>

        <main className={`flex-grow container mx-auto p-4 ${isNavSticky ? 'mt-16' : ''}`}>
          <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
            <Routes>
              <Route path="/" element={<PantoneColorGrid />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Routes>
          </Suspense>
        </main>

        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h2 className="text-lg font-semibold mb-3">{t('aboutUs')}</h2>
                <p className="text-gray-400">{t('aboutUsDescription')}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-3">{t('quickLinks')}</h2>
                <ul className="text-gray-400 space-y-2">
                  <li><Link to="/" className="hover:text-white">{t('home')}</Link></li>
                  <li><Link to="/blog" className="hover:text-white">{t('blog')}</Link></li>
                  <li><Link to="/privacy" className="hover:text-white">{t('privacyPolicy')}</Link></li>
                  <li><Link to="/terms" className="hover:text-white">{t('termsOfService')}</Link></li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-3">{t('contactUs')}</h2>
                <p className="text-gray-400">{t('email')}: info@pantonecolors.net</p>
              </div>
            </div>
            <div className="mt-6 border-t border-gray-700 pt-6 text-center text-gray-400">
              <p>{t('copyright')}</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;