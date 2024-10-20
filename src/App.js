import React from 'react';
import './styles/App.css';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Footer from './components/Footer'; 
import { Routes, Route } from 'react-router-dom';
import ProductListingPage from './components/ProductListingPage';
import ProductDetails from './components/ProductDetails';
import { CartProvider } from './contexts/CartContext';
import CartPage from './components/CartPage';
import About from './components/About';
import products from './data/products';
import Contacts from './components/Contacts';
import Faq from './components/Faq';
import Checkout from './components/Checkout';
function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<ProductListingPage products={products} />} />
            <Route path="/products/:id" element={<ProductDetails products={products} />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
