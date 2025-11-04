import React, { useState, useEffect } from 'react';
import './Header.scss';
import MenuOverlay from '../MenuOverlay/MenuOverlay';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 60) {
        console.log('Collapsing header at scroll position:', scrollPosition);
        setIsCollapsed(true);
      } else {
        console.log('Expanding header at scroll position:', scrollPosition);
        setIsCollapsed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${isCollapsed ? 'is-collapsed' : ''}`}>
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
          <span className="menu-label">Menu</span>
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
        </div>
        
        <div className="header-center">
          <a href="/" className="logo">MAIA</a>
        </div>
        
        <div className="header-right">
          <a href="#" className="lang">English</a>
          <button className="btn btn-primary">Consult</button>
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
          <li><a href="#collections">Collections</a></li>
          <li><a href="#process">The Process</a></li>
          <li><a href="#materials">Materials</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#consult">Consultation</a></li>
        </ul>
      </nav>

      {/* Two-column site menu overlay */}
      <MenuOverlay isOpen={menuOpen} onClose={closeMenu} />
    </>
  );
};

export default Header;
