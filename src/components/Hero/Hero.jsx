import PropTypes from 'prop-types';
import './Hero.scss';

const Hero = ({ 
  videoSrc,
  posterSrc,
  imageSrc, 
  imageAlt
}) => {
  return (
    <section className="hero">
      <figure className="hero__figure">
        {videoSrc ? (
          <video 
            className="hero__video"
            autoPlay
            loop
            muted
            playsInline
            poster={posterSrc}
            controls={false}
            preload="auto"
            aria-label="Cinematic ambient background video"
          >
            <source src={videoSrc} type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <img 
              src={imageSrc || posterSrc} 
              alt={imageAlt}
              className="hero__img"
            />
          </video>
        ) : (
          <img 
            src={imageSrc || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&q=80"} 
            alt={imageAlt}
            className="hero__img"
            loading="eager"
          />
        )}
      </figure>
    </section>
  );
};

Hero.propTypes = {
  videoSrc: PropTypes.string,
  posterSrc: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string
};

Hero.defaultProps = {
  imageAlt: "Serene cinematic landscape at golden hour",
  imageSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&q=80"
};

export default Hero;
