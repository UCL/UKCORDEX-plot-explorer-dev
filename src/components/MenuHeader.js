import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'

function MenuHeader(){
  /*
    Displays top menu navigation bar.
  */
  return(
      <Navbar bg="light" variant="light" sticky="top">
        <Container>
          <Navbar.Brand  href="/">
            <img
              alt=""
              src={`${process.env.PUBLIC_URL}/uk_icon.png`}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{'    '}
          UK CORDEX Plot Explorer
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Help" id="basic-nav-dropdown">
          <NavDropdown.Item href="/help/#indices">Indices</NavDropdown.Item>
          <NavDropdown.Item href="/help/#data">Data</NavDropdown.Item>
          <NavDropdown.Item href="/plot-help">Plots</NavDropdown.Item>
        </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default MenuHeader;


