import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AssessmentPage from './pages/AssessmentPage';
import ContactPage from './pages/ContactPage';
import { ThemeProvider } from './contexts/ThemeContext';
import { TwentyFirstToolbar } from '@21st-extension/toolbar-react';
import { ReactPlugin } from '@21st-extension/react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <title>EstateWealthMY - Secure Your Legacy</title>
      <meta name="description" content="Professional estate planning services in Malaysia. Wills, Trusts, and Life Insurance Reviews to secure your family's future." />
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans text-primary-800 dark:text-primary-200">
          <Navigation />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/assessment" element={<AssessmentPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      <TwentyFirstToolbar
        config={{
          plugins: [ReactPlugin],
        }}
      />
    </ThemeProvider>
  );
}

export default App;
