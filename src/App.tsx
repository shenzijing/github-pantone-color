import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PantoneColorGrid from './components/PantoneColorGrid'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PantoneColorGrid />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </Router>
  )
}

export default App