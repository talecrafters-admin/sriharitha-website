import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ContractManufacturing from './pages/ContractManufacturing';
import Products from './pages/Products';
import CategoryPage from './pages/CategoryPage';
import Avasya from './pages/Avasya';
import Quality from './pages/Quality';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contract-manufacturing" element={<ContractManufacturing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<CategoryPage />} />
          <Route path="/avasya" element={<Avasya />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
