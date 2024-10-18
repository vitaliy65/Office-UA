import React from 'react';
import './styles/App.css';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Footer from './components/Footer'; 
import { Routes, Route } from 'react-router-dom';
import ProductListingPage from './components/ProductListingPage';
import ProductDetails from './components/ProductDetails';

// Імпортуємо масив продуктів
import products from './data/products';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductListingPage products={products} />} />
          <Route path="/products/:id" element={<ProductDetails products={products} />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
