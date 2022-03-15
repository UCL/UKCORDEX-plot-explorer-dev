import React from "react";
import { Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavHashLink } from "react-router-hash-link";
import "./HelpNav.css";

export default function HelpNav() {
  return (
    <Container style={{ marginLeft: "-100", maxWidth: "4em", marginTop: -45 }}>
      <Nav className="flex-column" style={{ position: "fixed" }}>
        <LinkContainer to="/indices-help">
          <Nav.Link className="page">Indices</Nav.Link>
        </LinkContainer>
        <ul className="subsection">
          <li>
            {" "}
            <NavHashLink to="/indices-help">Core Variables</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/indices-help">Temperature</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/indices-help">Precipitation</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/indices-help">Wind</NavHashLink>
          </li>
        </ul>
        <LinkContainer to="/data-help">
          <Nav.Link className="page">Data</Nav.Link>
        </LinkContainer>
        <ul className="subsection">
          <li>
            {" "}
            <NavHashLink to="/data-help">CMiP5-13</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/data-help">CMiP5-EC</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/data-help">EuroCORDEX regional</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/data-help">ERA-EuroCORDEX</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/data-help">UKCP18 global</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/data-help">UKCP18 regional</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/data-help">HadUK-Grid Observations</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/data-help">Other</NavHashLink>
          </li>
        </ul>
        <LinkContainer to="/time-help">
          <Nav.Link className="page">Time</Nav.Link>
        </LinkContainer>
        <ul className="subsection">
          <li>
            {" "}
            <NavHashLink to="/time-help">Evaluation Period</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/time-help">Future Periods</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/time-help">Warming Levels</NavHashLink>
          </li>
        </ul>
        <LinkContainer to="/plot-help">
          <Nav.Link className="page">Plots</Nav.Link>
        </LinkContainer>
        <ul className="subsection">
          <li>
            {" "}
            <NavHashLink to="/plot-help#ensemble-means">
              Ensemle Means
            </NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/plot-help#ensemble-sd">
              Ensemble Standard Deviations
            </NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/plot-help#boxplots">Boxplots</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/plot-help#taylor">Taylor diagrams</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/plot-help#anova">Maps of Variation</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/plot-help#epp">EPPs</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/plot-help#stamp">Stamp plots</NavHashLink>
          </li>
        </ul>
      </Nav>
    </Container>
  );
}
