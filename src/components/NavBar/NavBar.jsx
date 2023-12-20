import React from 'react';
import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link } from 'react-router-dom';

const links = [
  {
      label: "Productos",
      href: "/",
  },
  {
      label: "NVIDIA",
      href: "/productos/nvidia",
  },
  {
      label: "AMD",
      href: "/productos/amd",
  }
];

const NavBar = () => {
  return (
    <header className='header'>
        <div className='container'>
          <Link to="/">
            <img src="/logo.png" alt="logopagina" />
          </Link>
          <nav className="navbar">
          {links.map((link) => (
                        <Link key={link.href} to={link.href} className="navbar__link">
                            {link.label}
                        </Link>
                    ))}
          </nav>
        <CartWidget/>
      </div>
    </header>
    
  );
};

export default NavBar;
