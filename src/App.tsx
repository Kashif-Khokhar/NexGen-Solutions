import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Consultation from './pages/Consultation'
import ScrollToTop from './components/ScrollToTop'
import NotFound from './pages/NotFound'
import './index.css'

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen bg-dark text-neutral-200 overflow-x-hidden relative">
        <div className="fixed inset-0 bg-mesh opacity-60 pointer-events-none"></div>
        <Sidebar onCollapse={(collapsed) => setIsSidebarCollapsed(collapsed)} />

        {/* Main Content Area */}
        <div className={`flex-grow flex flex-col transition-all duration-300 relative z-10 ${isSidebarCollapsed ? 'md:ml-20' : 'md:ml-72'}`}>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
