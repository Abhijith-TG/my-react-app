import React, { useState } from 'react';
import { FormControl, InputGroup, Container, Navbar, Nav, Dropdown, Badge } from 'react-bootstrap';
import { BsSearch, BsCart, BsPerson } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState(5);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      navigate('/');
    } else {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const handleCartClick = () => {
    console.log("Shopping Cart clicked");
  };

  const handleProfileClick = (eventKey) => {
    console.log(`${eventKey} clicked`);
  };

  return (
    <Navbar bg="warning" expand="lg" style={{ backgroundColor: '#ffcc80', padding: '0.5rem 1rem', height: '60px' }}>
      <Container fluid className="d-flex align-items-center justify-content-between">
        
        <div className="d-flex" style={{ flex: 1, maxWidth: '300px' }}>
          <InputGroup className="mb-2 w-100">
            <FormControl
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                fontSize: '12px',
                padding: '5px',
                border: '1px solid #ccc',
                borderRadius: '25px 0 0 25px',
              }}
              aria-label="Search products"
            />
            <InputGroup.Text
              onClick={handleSearch}
              style={{
                cursor: 'pointer',
                padding: '5px 10px',
                backgroundColor: '#f0f0f0',
                border: '1px solid #ccc',
                borderRadius: '0 25px 25px 0',
              }}
              aria-label="Search"
            >
              <BsSearch size={18} />
            </InputGroup.Text>
          </InputGroup>
        </div>

        <Navbar.Brand
          className="mx-auto d-flex align-items-center"
          style={{
            fontSize: '22px',
            fontStyle: 'italic',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: '1',
          }}
        >
          <div className="store-name">ZippyStore.com</div>
          <img src="/Images/logo.png" alt="Logo" style={{ height: '40px', width: 'auto', objectFit: 'contain', marginLeft: '10px' }} />
        </Navbar.Brand>

        <Nav className="ml-auto position-relative">
          <Nav.Link href="#cart" style={{ color: 'white', marginRight: '10px' }} onClick={handleCartClick}>
            <BsCart size={24} />
            {cartItems > 0 && (
              <Badge bg="danger" pill style={{ position: 'absolute', top: '-5px', right: '-5px' }} aria-live="polite" aria-label={`You have ${cartItems} items in the cart`}>
                {cartItems}
              </Badge>
            )}
          </Nav.Link>
          <Dropdown align="end">
            <Dropdown.Toggle variant="link" id="profile-dropdown" style={{ color: 'white' }}>
              <BsPerson size={24} />
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
      </Container>
    </Navbar>
  );
};

export default ProductSearch;
