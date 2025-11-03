import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SeasonalExperiences.scss';

const SeasonalExperiences = ({ title, description, experiences }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="seasonal-experiences">
      <div className="seasonal-experiences__content">
        <div className="seasonal-experiences__hero">
          <div className="seasonal-experiences__text-block">
            <h2 className="seasonal-experiences__title">{title}</h2>
            <p className="seasonal-experiences__description">{description}</p>
          </div>

          <div className="seasonal-experiences__carousel">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className={`seasonal-experiences__card ${index === experiences.length - 1 ? 'seasonal-experiences__card--partial' : ''}`}
              >
                <img 
                  src={experience.imageSrc} 
                  alt={experience.imageAlt}
                  className="seasonal-experiences__card-image"
                  loading="lazy"
                />
                <div className="seasonal-experiences__card-content">
                  <p className="seasonal-experiences__card-category">{experience.category}</p>
                  <h3 className="seasonal-experiences__card-title">{experience.title}</h3>
                  <p className="seasonal-experiences__card-description">{experience.description}</p>
                  <a href={experience.link} className="seasonal-experiences__card-link">
                    Discover more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="seasonal-experiences__pagination">
          {experiences.map((_, index) => (
            <button
              key={index}
              className={`seasonal-experiences__pagination-dot ${index === activeIndex ? 'seasonal-experiences__pagination-dot--active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to experience ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

SeasonalExperiences.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  })).isRequired
};

export default SeasonalExperiences;
