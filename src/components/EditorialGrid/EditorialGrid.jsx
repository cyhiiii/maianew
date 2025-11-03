import PropTypes from 'prop-types';
import './EditorialGrid.scss';

const EditorialGrid = ({ items }) => {
  return (
    <section className="editorial-grid">
      <div className="container">
        <div className="editorial-grid__layout">
          {items.map((item, index) => (
            <article key={index} className="editorial-grid__item">
              <figure className="editorial-grid__figure">
                <img 
                  src={item.imageSrc || `https://via.placeholder.com/800x1000?text=Editorial+${index + 1}`}
                  alt={item.imageAlt || `Editorial image ${index + 1}`}
                  srcSet={item.imageSrcSet}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 60vw"
                  className="editorial-grid__img"
                  loading="lazy"
                />
                {item.caption && (
                  <figcaption className="editorial-grid__caption">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
              
              {(item.title || item.description || item.link) && (
                <div className="editorial-grid__content">
                  {item.category && <p className="category">{item.category}</p>}
                  {item.title && <h2 className="editorial-grid__title">{item.title}</h2>}
                  {item.description && <p className="editorial-grid__description">{item.description}</p>}
                  {item.link && (
                    <a href={item.link.href || "#"} className="link-underline">
                      {item.link.text || "Discover more"}
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

EditorialGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
    imageSrcSet: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    caption: PropTypes.string,
    link: PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string
    })
  }))
};

EditorialGrid.defaultProps = {
  items: []
};

export default EditorialGrid;
