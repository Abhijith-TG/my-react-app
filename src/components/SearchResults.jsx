import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import ProductCard from './ProductCard';

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = new URLSearchParams(useLocation().search).get('query');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products. Please try again later.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (query) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [products, query]);

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status" className="mx-auto d-block">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : error ? (
        <Alert variant="danger" className="mx-auto d-block">
          {error}
        </Alert>
      ) : (
        <div>
          {filteredProducts.length > 0 ? (
            <Row className="g-4">
              {filteredProducts.map((product) => (
                <Col
                  key={product.id}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                  className="d-flex justify-content-center"
                >
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          ) : (
            <div>No products found for your search.</div>
          )}
        </div>
      )}
    </div>
  );
};
//hi
export default SearchResults;
