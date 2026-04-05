import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FiDownload } from 'react-icons/fi';
import styles from './NavPage.module.css';

const NavPage = ({ darkMode }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // PASTE YOUR GOOGLE DRIVE FILE ID HERE
  const fileId = "YOUR_FILE_ID_HERE"; 
  const resumeDownloadUrl = `https://drive.google.com/file/d/1m6VO1wLr63FFftYIArMDF-rJeDXIGxcd/view?usp=drive_link`;

  return (
    <nav className={`${styles.navWrapper} ${darkMode ? styles.dark : styles.light}`}>
      <Navbar expand="lg" className={styles.customNavbar}>
        <Container>
          {/* Brand & Resume Button Group */}
          <div className={styles.brandGroup}>
            <Navbar.Brand as={Link} to="/" className={styles.brand}>
              Soyash<span>.</span>
            </Navbar.Brand>
            
            <a 
              href={resumeDownloadUrl}
              className={styles.resumeBtn}
              target="_self" /* Set to _self to keep user on your site while downloading */
            >
              <FiDownload /> <span>RESUME</span>
            </a>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toggle} />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              {!isHomePage && (
                <Nav.Link as={Link} to="/" className={styles.navLink}>
                  PROFILE
                </Nav.Link>
              )}
              
              <Nav.Link as={Link} to="/about" className={styles.navLink}>ABOUT</Nav.Link>
              <Nav.Link as={Link} to="/skills" className={styles.navLink}>SKILLS</Nav.Link>
              <Nav.Link as={Link} to="/showcase" className={styles.navLink}>SHOWCASE</Nav.Link>
              
              <Nav.Link as={Link} to="/contact" className={styles.contactBtn}>
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

NavPage.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default NavPage;