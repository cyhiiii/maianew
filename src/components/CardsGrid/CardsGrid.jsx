import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './CardsGrid.scss';

const CardsGrid = ({ cards, title, subtitle }) => {
  return (
    <section className="cards-grid">
      <div className="container">
        {(title || subtitle) && (
          <header className="cards-grid__header">
            {subtitle && <p className="category">{subtitle}</p>}
            {title && <h2 className="cards-grid__title">{title}</h2>}
          </header>
        )}
        
        <div className="cards-grid__layout">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

CardsGrid.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  subtitle: PropTypes.string
};

CardsGrid.defaultProps = {
  cards: []
};

export default CardsGrid;
