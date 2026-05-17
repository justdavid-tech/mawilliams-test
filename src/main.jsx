import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import ReadingProgress from './components/ReadingProgress.jsx'
import FloatingActions from './components/floatingactions.jsx'
import UpperHeader from "./components/upperheader";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UpperHeader />
      <ReadingProgress />
      <Navbar />
      <App />
      <Footer />
      <FloatingActions />
    </BrowserRouter>
  </StrictMode>
)
