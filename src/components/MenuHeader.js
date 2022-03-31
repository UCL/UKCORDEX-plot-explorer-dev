import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
// LinkContainer is used to allow react router to identify the nav links

function MenuHeader() {
  /*
    Displays top menu navigation bar.
  */
  return (
    <Navbar bg="light" variant="light" sticky="top">
      <Container>
        <LinkContainer
          to="/"
          style={{ justifyContent: "flex-start", marginLeft: "-1%" }}>
          <Navbar.Brand>
            <img
              alt=""
              src={`${process.env.PUBLIC_URL}/uk_icon.png`}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {"    "}
            UKCORDEX Plot Explorer
          </Navbar.Brand>
        </LinkContainer>
        {/* This allows the links to show when they're active */}
        <Nav className="me-auto" activeKey={window.location.pathname}>
          {/* This method allows HashRouter to modify the URL (for GH pages); the links are relative */}
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <NavDropdown title="Overview" id="basic-nav-dropdown">
            <LinkContainer to="/about-explorer">
              <NavDropdown.Item>About the plot explorer</NavDropdown.Item>
            </LinkContainer>{" "}
            <LinkContainer to="/about">
              <NavDropdown.Item>About the UKCORDEX project</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/acknowledgements">
              <NavDropdown.Item>Acknowledgements</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <NavDropdown title="Usage Guide" id="basic-nav-dropdown">
            <LinkContainer to="/how-to-use">
              <NavDropdown.Item>How to use the plot explorer</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/indices-calculation">
              <NavDropdown.Item>
                How the indices are calculated
              </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/download-help">
              <NavDropdown.Item>
                Working with downloaded netcdfs
              </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/missing-plots">
              <NavDropdown.Item>Missing plots/data</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <NavDropdown title="Reference" id="basic-nav-dropdown">
            <LinkContainer to="/indices-help">
              <NavDropdown.Item>Available indices</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/data-help">
              <NavDropdown.Item>Sources of climate data</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/plot-help">
              <NavDropdown.Item>Types of plots</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/time-help">
              <NavDropdown.Item>Time periods</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MenuHeader;
