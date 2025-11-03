import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ 
  imageSrc, 
  imageAlt,
  imageSrcSet,
  category,
  title,
  excerpt,
  link
}) => {
  return (
    <article className="card">
      <figure className="card__figure">
        <img 
          src={imageSrc || "https://via.placeholder.com/600x400?text=Card+Image"}
          alt={imageAlt}
          srcSet={imageSrcSet}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="card__img"
          loading="lazy"
        />
      </figure>
      
      <div className="card__content">
        {category && <p className="category card__category">{category}</p>}
        {title && <h3 className="card__title">{title}</h3>}
        {excerpt && <p className="card__excerpt">{excerpt}</p>}
        {link && (
          <a href={link.href || "#"} className="link-underline card__link">
            {link.text || "Discover more"}
          </a>
        )}
      </div>
    </article>
  );
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  imageSrcSet: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  link: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string
  })
};

Card.defaultProps = {
  imageAlt: "Card image"
};

export default Card;
