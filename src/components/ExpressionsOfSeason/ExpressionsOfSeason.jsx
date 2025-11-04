import React from 'react';
import PropTypes from 'prop-types';
import './ExpressionsOfSeason.scss';

const ExpressionsOfSeason = ({ title, cards }) => {
  return (
    <section className="expressions-season">
      <div className="expressions-season__container">
        <h2 className="expressions-season__title">{title}</h2>
        
        <div className="expressions-season__grid">
          {cards.map((card, index) => (
            <article key={index} className="expressions-season__card">
              <div className="expressions-season__card-image">
                {card.videoSrc ? (
                  <video 
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={card.posterSrc}
                    controls={false}
                    preload="auto"
                    style={card.imagePosition ? { objectPosition: card.imagePosition } : {}}
                  >
                    <source src={card.videoSrc} type="video/mp4" />
                    {card.posterSrc && (
                      <img 
                        src={card.posterSrc} 
                        alt={card.imageAlt}
                        style={card.imagePosition ? { objectPosition: card.imagePosition } : {}}
                      />
                    )}
                  </video>
                ) : (
                  <img 
                    src={card.imageSrc} 
                    alt={card.imageAlt}
                    style={card.imagePosition ? { objectPosition: card.imagePosition } : {}}
                    loading="lazy"
                  />
                )}
              </div>
              <div className="expressions-season__card-meta">
                <p className="expressions-season__card-subheading">{card.subheading}</p>
                <h3 className="expressions-season__card-heading">{card.heading}</h3>
                <p className="expressions-season__card-description">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

ExpressionsOfSeason.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({
    videoSrc: PropTypes.string,
    posterSrc: PropTypes.string,
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string.isRequired,
    imagePosition: PropTypes.string,
    subheading: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};

export default ExpressionsOfSeason;
