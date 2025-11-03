import React from 'react';
import PropTypes from 'prop-types';
import './WinterSun.scss';

const WinterSun = ({ preTitle, title, discoverLink, largeImage, smallImage }) => {
  return (
    <section className="winter-sun">
      <div className="winter-sun__content">
        <div className="winter-sun__text">
          <p className="winter-sun__pre-title">{preTitle}</p>
          <h2 className="winter-sun__title">{title}</h2>
          <a href={discoverLink} className="winter-sun__link">
            Discover more
          </a>
        </div>
        
        <div className="winter-sun__gallery">
          <img 
            src={largeImage.src} 
            alt={largeImage.alt}
            className="winter-sun__image winter-sun__image--large"
            loading="lazy"
          />
          <img 
            src={smallImage.src} 
            alt={smallImage.alt}
            className="winter-sun__image winter-sun__image--small"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

WinterSun.propTypes = {
  preTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  discoverLink: PropTypes.string,
  largeImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  smallImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired
};

WinterSun.defaultProps = {
  discoverLink: '#'
};

export default WinterSun;
