import React from "react";
// import Products from "./components/products/Products";
// import Navbar from "./components/navbar/Navbar";
import {commerce} from './lib/commerce';
import {Products,Navbar} from './components';
import { useEffect, useState } from 'react';

function App() {
  const [products,setProducts] = useState([]);

  const fetchProducts = async ()=>{
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  useEffect(()=>{
    fetchProducts();
  },[]);

  console.log(products);


  return (
    <div className="App">
      <Navbar/>
      <Products products ={products}/>
    </div>
  );
}

export default App;
