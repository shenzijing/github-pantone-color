import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PantoneColorGrid from './components/PantoneColorGrid';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import LanguageSwitcher from './components/LanguageSwitcher';
import { Palette } from 'lucide-react';

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Palette className="mr-2" size={24} />
                <Link to="/" className="text-xl font-bold">{t('pantoneColors')}</Link>
              </div>
              <div className="flex space-x-4 items-center">
                <Link to="/" className="text-gray-800 hover:text-blue-500">{t('home')}</Link>
                <Link to="/blog" className="text-gray-800 hover:text-blue-500">{t('blog')}</Link>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow container mx-auto p-8">
          <Routes>
            <Route path="/" element={<PantoneColorGrid />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-lg font-semibold mb-2">{t('aboutUs')}</h2>
                <p className="text-gray-400">{t('aboutUsDescription')}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">{t('quickLinks')}</h2>
                <ul className="text-gray-400">
                  <li><Link to="/" className="hover:text-white">{t('home')}</Link></li>
                  <li><Link to="/blog" className="hover:text-white">{t('blog')}</Link></li>
                  <li><Link to="/privacy" className="hover:text-white">{t('privacyPolicy')}</Link></li>
                  <li><Link to="/terms" className="hover:text-white">{t('termsOfService')}</Link></li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">{t('contactUs')}</h2>
                <p className="text-gray-400">{t('email')}: info@pantonecolors.net</p>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
              <p>{t('copyright')}</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;