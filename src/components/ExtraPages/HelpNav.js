import React from "react";
import { Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import { NavHashLink } from "react-router-hash-link";
import { HashLink } from "react-router-hash-link";
import "./HelpNav.css";

export default function HelpNav() {
  return (
    <Container
      style={{
        marginLeft: "-100",
        maxWidth: "4em",
        marginTop: "-25%",
        maxHeight: "fit-content",
      }}>
      <Nav className="flex-column" style={{ position: "fixed" }}>
        <LinkContainer to="/indices-help#" className="page">
          <Nav.Link>Indices</Nav.Link>
        </LinkContainer>
        <ul className="subsection">
          <li>
            {" "}
            <HashLink to="/indices-help#corevars">Core Variables</HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/indices-help#temp">Temperature</HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/indices-help#precip">Precipitation</HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/indices-help#wind">Wind</HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/indices-help#extreme">Extreme Events</HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/indices-help#impact">Impact Related</HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/indices-help#degree">
              Degree Days and Seasons
            </HashLink>
          </li>
        </ul>

        <LinkContainer to="/data-help#" className="page">
          <Nav.Link>Data</Nav.Link>
        </LinkContainer>
        <ul className="subsection">
          <li>
            {" "}
            <HashLink to="/data-help#cmip5-13">CMiP5-13</HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/data-help#cmip5-ec">CMiP5-EC</HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/data-help#eurocordex">EuroCORDEX regional</HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/data-help#era">ERA-EuroCORDEX</HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/data-help#global">UKCP18 global</HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/data-help#regional">UKCP18 regional</HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/data-help#haduk">HadUK-Grid Observations</HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/data-help#other">Other</HashLink>
          </li>
        </ul>

        <LinkContainer to="/time-help#" className="page">
          <Nav.Link>Time</Nav.Link>
        </LinkContainer>
        <ul className="subsection">
          <li>
            {" "}
            <HashLink to="/time-help#evaluation">Evaluation Period</HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/time-help#future">Future Periods</HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/time-help#warming">Warming Levels</HashLink>
          </li>
        </ul>

        <LinkContainer to="/plot-help#" className="page">
          <Nav.Link>Plots</Nav.Link>
        </LinkContainer>
        <ul className="subsection">
          <li>
            {" "}
            <HashLink to="/plot-help#ensemble-means">Ensemble Means</HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/plot-help#ensemble-sd">
              Ensemble Standard Deviations
            </HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/plot-help#boxplots">Boxplots</HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/plot-help#taylor">Taylor diagrams</HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/plot-help#anova">Maps of Variation</HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/plot-help#epp">EPPs</HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/plot-help#stamp">Stamp plots</HashLink>
          </li>
        </ul>
      </Nav>
    </Container>
  );
}
