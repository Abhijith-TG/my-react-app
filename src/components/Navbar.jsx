import React, { useState } from 'react';
import { FormControl, InputGroup, Container, Navbar, Nav, Dropdown } from 'react-bootstrap';
import { BsSearch, BsCart, BsPerson } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
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
  <>
    <Navbar  expand="lg" className='nav1' style={{ padding: '0.5rem 1rem', height: '60px', backgroundColor:"rgba(255, 165, 0, 0.5)" }}>
      <Container fluid className="d-flex align-items-center justify-content-between">
        
        {/* Search Bar on the Left with smaller size */}
        <div className="d-flex" style={{ flex: 1, maxWidth: '299px' }}>
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
            >
              <BsSearch size={18} />
            </InputGroup.Text>
          </InputGroup>
        </div>

        {/* Centered Store Branding with Logo */}
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
          <img src="/Images/logo.png" alt="Logo" style={{ height: '65px', width: 'auto', objectFit: 'contain', marginLeft: '10px' }} />
        </Navbar.Brand>

        {/* Cart and Profile Icons */}
        <Nav className="ml-auto">
          <Nav.Link href="#cart" style={{ color: 'white', marginRight: '10px' }} onClick={handleCartClick}>
            <BsCart size={24} />
          </Nav.Link>
          <Dropdown align="end">
            <Dropdown.Toggle variant="link" id="profile-dropdown" style={{ color: 'white' }}>
              <BsPerson size={24} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="account" onClick={() => handleProfileClick("Account")}>
                Account
              </Dropdown.Item>
              <Dropdown.Item eventKey="cust" onClick={() => handleProfileClick("cust")}>
                Customer Support
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
   
    </>
  );
};

export default ProductSearch;
