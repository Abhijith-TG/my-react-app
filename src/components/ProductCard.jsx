import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const cardStyle = {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    height: '100%',
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = 'translateY(-5px)';
    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = 'none';
  };
//hi
  return (
    <Card
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="mb-4 d-flex flex-column"
    >
      <Card.Img variant="top" src={product.image} />
      <Card.Body className="d-flex flex-column justify-content-between" style={{ flex: 1 }}>
        <Card.Title>{product.title}</Card.Title>

       
        <Card.Text className="text-muted" style={{ fontSize: '16px', fontWeight: 'bold' }}>
          ${product.price.toFixed(2)}
        </Card.Text>

        <Button variant="primary" className="mt-auto" disabled={product.stock <= 0}>
          {product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </Card.Body>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
