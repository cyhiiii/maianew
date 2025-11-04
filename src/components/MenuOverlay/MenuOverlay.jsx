import React, { useEffect, useRef } from 'react';
import './MenuOverlay.scss';

const MenuOverlay = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Store the previously focused element
      const previouslyFocused = document.activeElement;
      
      // Focus first focusable element
      if (firstFocusableRef.current) {
        firstFocusableRef.current.focus();
      }

      // Handle escape key
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      // Focus trap
      const handleTab = (e) => {
        if (e.key === 'Tab') {
          const focusableElements = overlayRef.current?.querySelectorAll(
            'a[href], button:not([disabled]), [tabindex="0"]'
          );
          const firstElement = focusableElements?.[0];
          const lastElement = focusableElements?.[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleTab);
      document.body.style.overflow = 'hidden';

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.removeEventListener('keydown', handleTab);
        document.body.style.overflow = '';
        // Restore focus to previously focused element
        previouslyFocused?.focus();
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const menuItems = [
    { label: 'Collections', hasSubmenu: true },
    { label: 'The Process', hasSubmenu: false },
    { label: 'Materials', hasSubmenu: true },
    { label: 'Portfolio', hasSubmenu: false },
    { label: 'About', hasSubmenu: false },
    { label: 'Consultation', hasSubmenu: false },
  ];

  const regions = [
    'Asia Pacific',
    'Middle East & Africa',
    'Europe',
    'Americas',
  ];

  return (
    <div className="menu-overlay" role="dialog" aria-modal="true" ref={overlayRef}>
      {/* Scrim background */}
      <div className="menu-scrim" onClick={onClose} aria-hidden="true"></div>

      {/* Panels container */}
      <div className="menu-panels">
        {/* Left panel - Main menu */}
        <div className="left-panel">
          <div className="menu-logo">MAIA</div>
          
          <ul className="menu-list" role="menu">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item" role="none">
                <a 
                  href={`#${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="menu-link"
                  role="menuitem"
                  tabIndex="0"
                  ref={index === 0 ? firstFocusableRef : null}
                  aria-haspopup={item.hasSubmenu}
                >
                  {item.label}
                </a>
                {item.hasSubmenu && (
                  <span className="chev" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18">
                      <path 
                        d="M9 6l6 6-6 6" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        fill="none"
                      />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right panel - Destinations/Actions */}
        <div className="right-panel">
          <button 
            className="close" 
            onClick={onClose}
            aria-label="Close panel"
            ref={lastFocusableRef}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path 
                d="M6 6l12 12M6 18L18 6" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
