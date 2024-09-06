import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Phone from './pages/Phone';
import Wearables from './pages/Wearables';
import Electronics from './pages/Electronics';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<Phone />} />
        <Route path="/wearables" element={<Wearables />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
