import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { About } from './components/About';
import { GetInvolved } from './components/GetInvolved';
import { Team } from './components/Team';
import { Sponsor } from './components/Sponsor';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppRoutes() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="pt-8">
            <Home
              onGetInvolvedClick={() => navigate('/get-involved')}
              onAboutClick={() => navigate('/about')}
            />
          </div>
        }
      />
      <Route
        path="/about"
        element={
          <div className="pt-16">
            <About
              onGetInvolvedClick={() => navigate('/get-involved')}
              onContactClick={() => navigate('/contact')}
            />
          </div>
        }
      />
      <Route path="/get-involved" element={<div className="pt-16"><GetInvolved /></div>} />
      <Route path="/team" element={<div className="pt-16"><Team /></div>} />
      <Route path="/sponsor" element={<div className="pt-16"><Sponsor /></div>} />
      <Route path="/contact" element={<div className="pt-16"><Contact /></div>} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#050d1a]">
        <div className="tac-grid-overlay" aria-hidden="true" />
        <Navigation />
        <ScrollToTop />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
