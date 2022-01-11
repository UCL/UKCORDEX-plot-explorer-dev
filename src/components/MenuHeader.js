import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { LinkContainer } from 'react-router-bootstrap';
// LinkContainer is used to allow react router to identify the nav links


function MenuHeader(){
  /*
    Displays top menu navigation bar.
  */
  return(
      <Navbar bg="light" variant="light" sticky="top">
        <Container>
          <LinkContainer to='/'><Navbar.Brand>
            <img
              alt=""
              src={`${process.env.PUBLIC_URL}/uk_icon.png`}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{'    '}
          UK CORDEX Plot Explorer
          </Navbar.Brand></LinkContainer>
          {/* This allows the links to show when they're active */}
          <Nav className="me-auto" activeKey={window.location.pathname}>

            {/* <Nav.Link href="/UKCORDEX-plot-explorer-dev/">Home</Nav.Link>
            <Nav.Link href="/UKCORDEX-plot-explorer-dev/about">About</Nav.Link>
            <NavDropdown title="Help" id="basic-nav-dropdown">
          <NavDropdown.Item href="/UKCORDEX-plot-explorer-dev/indices-help">Indices</NavDropdown.Item>
          <NavDropdown.Item href="/UKCORDEX-plot-explorer-dev/data-help">Data</NavDropdown.Item>
          <NavDropdown.Item href="/UKCORDEX-plot-explorer-dev/plot-help">Plots</NavDropdown.Item>
        </NavDropdown>
          </Nav> */}

          {/* This method allows HashRouter to modify the URL (for GH pages) */}
        <LinkContainer to='/'><Nav.Link>Home</Nav.Link></LinkContainer>
        <LinkContainer to='about'><Nav.Link>About</Nav.Link></LinkContainer>
            <NavDropdown title="Help" id="basic-nav-dropdown">
            <LinkContainer to='indices-help'><NavDropdown.Item>Indices</NavDropdown.Item></LinkContainer>
            <LinkContainer to='data-help'><NavDropdown.Item>Data</NavDropdown.Item></LinkContainer>
            <LinkContainer to='plot-help'><NavDropdown.Item>Plots</NavDropdown.Item></LinkContainer>
        </NavDropdown>
          </Nav>
      
        </Container>
      </Navbar>
  );
};

export default MenuHeader;


