import React from "react";
import "../styles/navigation.css";
import { Navbar, Container, Nav, Offcanvas, NavLink } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className="nav">
        <Container fluid>
          <h3 className="navBrand">Fermin</h3>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="display-nav">
            <ul className="navLinks">
              <li className="links">
                <a href="#home">Home</a>
              </li>
              <li className="links">
                <a href="#about">About</a>
              </li>
              <li className="links">
                <a href="#skills">Skills</a>
              </li>
              <li className="links">
                <a href="#work">Work</a>
              </li>
              <li className="links">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </Navbar.Collapse>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className='navCanvas'
          >
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 ">
              <ul className="navLinksCanvas">
              <Nav.Link href="#home" className="linksCanvas">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="linksCanvas">
                About
              </Nav.Link>
              <Nav.Link href="#skills" className="linksCanvas">
                 Skills
              </Nav.Link>
              <Nav.Link href="#work" className="linksCanvas">
                 Work
              </Nav.Link>
              <Nav.Link  href="#contact" className="linksCanvas">
               Contact
              </Nav.Link>
            </ul>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
