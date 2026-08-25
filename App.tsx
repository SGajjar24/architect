import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { StudioProvider } from './context/StudioContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlueprintOverlay from './components/BlueprintOverlay';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Practice from './pages/Practice';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ScrollToTop from './components/ScrollToTop';
import BackToTopButton from './components/BackToTopButton';

export const App: React.FC = () => {
  return (
    <StudioProvider>
      <BrowserRouter>
        <ScrollToTop />
        <BlueprintOverlay />
        <div className="flex flex-col min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-amber-600 selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              {/* Fallbacks for backward compatibility */}
              <Route path="/services" element={<Navigate to="/practice" replace />} />
              <Route path="/ai-construction" element={<Navigate to="/practice" replace />} />
              <Route path="/vastu" element={<Navigate to="/practice" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <BackToTopButton />
        </div>
      </BrowserRouter>
    </StudioProvider>
  );
};

export default App;