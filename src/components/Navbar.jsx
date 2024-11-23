import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputGroup, Container, Row, Col, Navbar, Nav, Spinner, Dropdown } from 'react-bootstrap';
import { BsSearch, BsCart, BsPerson } from 'react-icons/bs';

const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setFilteredProducts([]);
      setSearched(false);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
      setSearched(true);
    }
  };

  const handleCartClick = () => {
    console.log("Shopping Cart clicked");
  };

  const handleProfileClick = (eventKey) => {
    console.log(`${eventKey} clicked`);
  };

  return (
    <>
      <style>
        {`
          .navbar {
            background-color: #ffcc80 !important;
            padding: 10px 0;
          }

          .product-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            background-color: white;
            text-align: center;
            transition: transform 0.2s ease;
            display: flex;
            flex-direction: column;
            height: 380px;
          }

          .product-card:hover {
            transform: translateY(-10px);
          }

          .product-image {
            width: 100%;
            height: 180px;
            object-fit: contain;
            display: block;
            margin: 0 auto;
          }

          .product-body {
            padding: 16px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .product-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 12px;
          }

          .product-price {
            font-size: 16px;
            color: #ff5722;
            margin-bottom: 12px;
          }

          .product-card .btn {
            margin-top: auto;
          }

          .navbar .navbar-brand {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }

          .navbar .navbar-brand img {
            height: 80px;
            width: auto;
            margin-left: 10px;
          }

          .navbar .navbar-brand .store-name {
            font-size: 1.5rem;
            font-weight: bold;
            color: white;
            margin-right: 15px;
            font-style: italic;
          }

          .navbar .navbar-collapse {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }

          .navbar .navbar-nav {
            display: flex;
            align-items: center;
          }

          .navbar .navbar-nav .nav-link {
            color: white;
          }

          .input-group {
            width: 100%;
            max-width: 700px;
          }

          .input-group .form-control {
            border-radius: 50px;
            border: 2px solid grey;
          }

          .input-group .input-group-text {
            background-color: transparent;
            border-radius: 50px;
            border: 2px solid grey;
            cursor: pointer;
          }

          @media (max-width: 768px) {
            .navbar .navbar-brand {
              position: static;
              transform: none;
              text-align: center;
              margin: 0 auto;
            }

            .navbar .navbar-collapse {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 100%;
            }

            .navbar .navbar-nav {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 100%;
            }

            .navbar .navbar-nav .nav-link {
              padding: 8px 16px;
              text-align: center;
            }

            .input-group {
              max-width: 100%;
            }

            .navbar .navbar-toggler {
              margin-left: auto;
            }
          }

          @media (max-width: 576px) {
            .product-card {
              height: auto;
            }

            .product-image {
              height: 150px;
            }
          }
        `}
      </style>

      <Navbar bg="warning" expand="lg" style={{ backgroundColor: '#ffcc80' }}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between w-100">
            <div className="d-flex align-items-center">
              <InputGroup className="mb-2 w-100" style={{ maxWidth: '700px' }}>
                <FormControl
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <InputGroup.Text
                  style={{ cursor: 'pointer' }}
                  onClick={handleSearch}
                >
                  <BsSearch />
                </InputGroup.Text>
              </InputGroup>
            </div>

            <Navbar.Brand className="mx-auto">
              <div className="store-name">ZippyStore.com</div>
              <img src="/images/logo.png" alt="Logo" />
            </Navbar.Brand>

            <Nav className="ml-auto">
              <Nav.Link href="#cart" style={{ color: 'white', marginRight: '15px' }} onClick={handleCartClick}>
                <BsCart size={30} />
              </Nav.Link>

              <Dropdown align="end">
                <Dropdown.Toggle variant="link" id="profile-dropdown" style={{ color: 'white' }}>
                  <BsPerson size={30} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="account" onClick={() => handleProfileClick("Account")}>
                    Account
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="settings" onClick={() => handleProfileClick("Settings")}>
                    Settings
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="logout" onClick={() => handleProfileClick("Logout")}>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        {loading ? (
          <Spinner animation="border" role="status" className="mx-auto d-block">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <Row>
            {searched && filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Col key={product.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
                  <div className="product-card">
                    <img className="product-image" src={product.image} alt={product.title} />
                    <div className="product-body">
                      <h5 className="product-title">{product.title}</h5>
                      <p className="product-price">${product.price}</p>
                      <Button variant="primary">Add to Cart</Button>
                    </div>
                  </div>
                </Col>
              ))
            ) : searched && filteredProducts.length === 0 ? (
              <div>No products found</div>
            ) : null}
          </Row>
        )}
      </Container>
    </>
  );
};

export default ProductSearch;
