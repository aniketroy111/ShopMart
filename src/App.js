import React from "react";
// import Products from "./components/products/Products";
// import Navbar from "./components/navbar/Navbar";
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components';
import { useEffect, useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }
  const fetchCart = async () => {
    const cart = await commerce?.cart.retrieve();
    setCart(cart);
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart?.add(productId, quantity);
    setCart(item.cart);
  }


  useEffect(() => {
    fetchCart();
    fetchProducts();
  }, []);
 
  console.log(cart);
  return (
    <BrowserRouter>
      <div>
        <Navbar cart={cart} />
        <Routes>
          <Route exact path="/" element={<Products products={products} onAddToCart={handleAddToCart} />} />
          <Route exact path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
