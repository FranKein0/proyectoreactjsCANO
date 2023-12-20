import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner.jsx';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListConteiner/>} />
            <Route path='/productos/:category' element={<ItemListConteiner />} />
            <Route path='/item/:itemId' element={<ItemDetailConteiner />} />
          </Routes>

        </header>
      </BrowserRouter>
    </>
  );
}

export default App;


