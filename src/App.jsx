import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Institute from './pages/institute'
import GatewayConsulting from './pages/gateway'
import Partners from './pages/partners'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import Loader from './components/loader'

import InsightsPage from './pages/insightspage'
import ArticlePage from './pages/articlepage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/institute" element={<Institute />} />
        <Route path="/gateway" element={<GatewayConsulting />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />

        {/* Insights Page */}
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/:slug" element={<ArticlePage />} />

        {/* Loader Page */}
        <Route path="/loader" element={<Loader />} />
      </Routes>
    </>
  )
}

export default App
