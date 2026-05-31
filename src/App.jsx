import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Institute from './pages/institute'
import InternationalPartnersPage from './pages/internationalpage'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import Loader from './components/loader'
import Courses from './components/courses'
import Profile from './pages/profiles'

import InsightsPage from './pages/insightspage'
import ArticlePage from './pages/articlepage'
import VideosPage from './pages/media'

import TermsOfUse from './pages/termsofuse'
import Privacy from './pages/privacy'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/institute" element={<Institute />} />
        <Route path="/international" element={<InternationalPartnersPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />

        {/* Insights Page */}
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/:slug" element={<ArticlePage />} />

        {/* Loader Page */}
        <Route path="/loader" element={<Loader />} />

        {/* Courses Page */}
        <Route path="/institute/courses" element={<Courses />} />

        {/* Media */}
        <Route path="/media" element={<VideosPage />} />

        {/* Profile */}
        <Route path="/profile" element={<Profile />} />

        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  )
}

export default App
