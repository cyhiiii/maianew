import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = ({ logo, socialLabel, socialLinks, copyright }) => {
  return (
    <footer className="footer">
      <hr className="footer__divider" />
      
      <div className="footer__inner">
        <div className="footer__logo">{logo}</div>
        
        <div className="footer__social-block">
          <span className="footer__social-label">{socialLabel}</span>
          <div className="footer__icon-row">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                className="footer__icon-link"
                aria-label={social.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="footer__icon" dangerouslySetInnerHTML={{ __html: social.iconSvg }} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="footer__copyright">{copyright}</div>
      </div>
      
      <div className="footer__bottom-stripe"></div>
    </footer>
  );
};

Footer.propTypes = {
  logo: PropTypes.string.isRequired,
  socialLabel: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
    iconSvg: PropTypes.string.isRequired
  })).isRequired,
  copyright: PropTypes.string.isRequired
};

export default Footer;
