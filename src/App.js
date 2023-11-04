import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import Product from './components/Product/Product';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import TermsOfService from './components/TermsOfService/TermsOfService'
import Careers from './components/Careers/Careers'
import BusinessPractices from './components/BusinessPractices/BusinessPractices'

function App() {
  return (
    <BrowserRouter>
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
