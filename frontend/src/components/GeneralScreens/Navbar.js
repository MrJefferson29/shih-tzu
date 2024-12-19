import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { List } from 'react-bootstrap-icons';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from 'styled-components';

function Navbar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Handle navigation and close Offcanvas
  const handleNavigate = (path) => {
    navigate(path);
    handleClose(); // Close the navbar after navigation
  };

  return (
    <NavbarContainer>
      <MenuIcon
        size={30}
        color="#343a40" // Dark color for the icon
        onClick={handleShow}
        aria-label="Open product categories menu"
      />
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <OffcanvasHeader closeButton>
          <OffcanvasTitle />
        </OffcanvasHeader>
        <Offcanvas.Body>
          <ProductList>
            <ProductItem onClick={() => handleNavigate('/')}>Home</ProductItem>
            <ProductItem onClick={() => handleNavigate('/about')}>About</ProductItem>
            <ProductItem onClick={() => handleNavigate('/all-pets')}>Available Puppies</ProductItem>
            <ProductItem onClick={() => handleNavigate('/health-guarantee')}>Health Guarantee</ProductItem>
            <ProductItem onClick={() => handleNavigate('/delivery-options')}>Delivery Options</ProductItem>
            <ProductItem onClick={() => handleNavigate('/purchase-process')}>Purchase Process</ProductItem>
            <ProductItem onClick={() => handleNavigate('/contact-us')}>Contact</ProductItem>
          </ProductList>
        </Offcanvas.Body>
      </Offcanvas>
    </NavbarContainer>
  );
}

export default Navbar;

// Styled components
const NavbarContainer = styled.div`
  position: relative;
`;

const MenuIcon = styled(List)`
  cursor: pointer;
`;

const OffcanvasHeader = styled(Offcanvas.Header)`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  height: 70px;
  border-bottom: none;
  padding: 0;
`;

const OffcanvasTitle = styled(Offcanvas.Title)`
  display: none;
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ProductItem = styled.div`
  padding: 0.75rem;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
  border-radius: 4px;
  background-color: rgba(248, 249, 250, 0.8); // Light background with transparency
  color: #333; // Dark text color
  font-weight: bold;

  &:hover {
    background-color: rgba(255, 153, 0, 0.8); // Change to your desired hover color with transparency
    color: #fff; // Change text color on hover
  }
`;
