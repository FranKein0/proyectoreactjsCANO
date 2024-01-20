import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner.jsx';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext.jsx';
import CartView from './components/CartView/CartView.jsx';
import CheckOut from './components/CheckOut/CheckOut.jsx';

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <header>
          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListConteiner/>} />
            <Route path='/productos/:categoryId' element={<ItemListConteiner />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/item/:itemId' element={<ItemDetailConteiner />} />
            <Route path="/cart" element={<CartView />} />
          </Routes>

        </header>
      </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;


