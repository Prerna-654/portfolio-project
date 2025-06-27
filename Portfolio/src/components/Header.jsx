import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      {/* ✅ Wrap everything inside this .container */}
      <div className="container">
        <div className="logo">MyPortfolio</div>

        {/* Toggle button for mobile */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Navigation menu */}
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#why" onClick={() => setIsOpen(false)}>Why Us</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
      
    </header>
  );
};

export default Header;
