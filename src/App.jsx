import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner.jsx';


function App() {
  return (
    <>
    <header>
      <NavBar /> {/* Renderiza el NavBar */}
      <ItemListConteiner greeting= "productos" />
    </header>
    </>
  );
}

export default App;

