import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'; // Import the useLocation hook
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Product from './components/Product/Product';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './components/TermsOfService/TermsOfService';
import Careers from './components/Careers/Careers';
import BusinessPractices from './components/BusinessPractices/BusinessPractices';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Include the ScrollToTop component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/termsOfService" element={<TermsOfService />} />
        <Route path="/businessPractices" element={<BusinessPractices />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
