import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PantoneColorGrid from './components/PantoneColorGrid';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { Palette } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Palette className="mr-2" size={24} />
                <Link to="/" className="text-xl font-bold">Pantone Colors</Link>
              </div>
              <div className="flex space-x-4">
                <Link to="/" className="text-gray-800 hover:text-blue-500">Home</Link>
                <Link to="/blog" className="text-gray-800 hover:text-blue-500">Blog</Link>
                <Link to="/privacy" className="text-gray-800 hover:text-blue-500">Privacy Policy</Link>
                <Link to="/terms" className="text-gray-800 hover:text-blue-500">Terms of Service</Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow container mx-auto p-8">
          <Routes>
            <Route path="/" element={<PantoneColorGrid />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-lg font-semibold mb-2">About Us</h3>
                <p className="text-gray-400">We are not an official Pantone dealer, nor are we affiliated with or endorsed by Pantone. This site is not officially approved by Pantone. We offer a wide selection of industry and government color standards for reference purposes.</p>
              </div>
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                <ul className="text-gray-400">
                  <li><Link to="/" className="hover:text-white">Home</Link></li>
                  <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                  <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                <p className="text-gray-400">Email: info@pantonecolors.net</p>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Color Chart. All rights reserved. This site is not affiliated with or endorsed by Pantone.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
