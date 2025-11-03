import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="site-header">
        <div className="header-left">
          <button 
            className="hamburger" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <svg 
            className="search-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            aria-label="Search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <span className="menu-label">Menu</span>
        </div>
        
        <div className="header-center">
          <a href="/" className="logo">ĀMAN</a>
        </div>
        
        <div className="header-right">
          <a href="#" className="lang">English</a>
          <button className="btn btn-primary">Reserve</button>
        </div>
      </header>

      {/* Full-screen overlay navigation */}
      <nav className={`nav-overlay ${menuOpen ? 'nav-overlay--open' : ''}`}>
        <button 
          className="nav-close" 
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          ✕
        </button>
        <ul className="nav-menu">
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#experiences">Experiences</a></li>
          <li><a href="#stories">Stories</a></li>
          <li><a href="#wellness">Wellness</a></li>
          <li><a href="#dining">Dining</a></li>
          <li><a href="#reserve">Reserve</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
