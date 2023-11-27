import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.jsx';

const NavBar = () => {
  return (
    <header className='header'>
        <div className='container'>
          <a href="">
            <img src="" alt="" />
          </a>
        <nav className="navbar">
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Contacto</a>
        </nav>
        <CartWidget/>
      </div>
    </header>
    
  );
};

export default NavBar;