import React from 'react';
import styles from './NavPage.module.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavPage = () => {
  return (
    <div>
      <div className={`${styles.container_nav} ${styles.bg_contact_bg}`}>
        <Navbar className={styles.navbar_custom}>
          <Container>
            <Navbar.Brand className={styles.navbar_brand_custom} as={Link} to="/">Soyash</Navbar.Brand> 
            <Nav className={styles.nav_links_custom}>
              <Nav.Link as={Link} to="/">PROFILE</Nav.Link> 
              <Nav.Link as={Link} to="/about">ABOUT</Nav.Link> 
              <Nav.Link as={Link} to="/skills">SKILLS</Nav.Link> 
              <Nav.Link as={Link} to="/showcase">SHOWCASE</Nav.Link> 
              <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link> 
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavPage;
