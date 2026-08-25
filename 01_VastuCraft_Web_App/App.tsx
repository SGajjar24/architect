import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AIConstruction from './pages/AIConstruction';
import Vastu from './pages/Vastu';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import VastuChatWidget from './components/VastuChatWidget';
import ScrollToTop from './components/ScrollToTop';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
  return (
    <MemoryRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-slate-900 antialiased selection:bg-secondary selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ai-construction" element={<AIConstruction />} />
            <Route path="/vastu" element={<Vastu />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
        <BackToTopButton />
        <VastuChatWidget />
      </div>
    </MemoryRouter>
  );
};

export default App;