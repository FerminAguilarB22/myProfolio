import React from "react";
import "../styles/navigation.css";
import { Navbar, Container, Nav, Offcanvas, NavLink } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      {/* <nav className="nav">
      <h3 className="navBrand">Fermin</h3>
      <ul className="navLinks">
        <li className="links">
          <a href="#" className="active">Home</a>
        </li>
        <li className="links">
          <a href="#about">About</a>
        </li>
        <li className="links">
          <a href="#skills">Skills</a>
        </li>
        <li className="links">
          <a href="#">Work</a>
        </li>
        <li className="links">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav> */}
      <Navbar expand="lg" className="nav">
        <Container fluid>
          <h3 className="navBrand">Fermin</h3>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
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
              <Nav.Link href="#" className="linksCanvas">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="linksCanvas">
                About
              </Nav.Link>
              <Nav.Link href="#skills" className="linksCanvas">
                 Skills
              </Nav.Link>
              <Nav.Link href="#" className="linksCanvas">
                 Work
              </Nav.Link>
              <Nav.Link  href="#" className="linksCanvas">
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
