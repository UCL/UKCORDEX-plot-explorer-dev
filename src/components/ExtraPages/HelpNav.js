import React from "react";
import { Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavHashLink } from "react-router-hash-link";
import "./HelpNav.css";

export default function HelpNav() {
  return (
    <Container style={{ marginLeft: "-100", maxWidth: "4em", marginTop: -55 }}>
      <Nav className="flex-column" style={{ position: "fixed" }}>
        <LinkContainer to="/indices-help" className="page">
          <Nav.Link>Indices</Nav.Link>
        </LinkContainer>
        <ul className="subsection">
          <li>
            {" "}
            <NavHashLink to="/indices-help#corevars">
              Core Variables
            </NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/indices-help#temp">Temperature</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/indices-help#precip">Precipitation</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/indices-help#wind">Wind</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/indices-help#extreme">Extreme Events</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/indices-help#impact">Impact Related</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/indices-help#degree">
              Degree Days and Seasons
            </NavHashLink>
          </li>
        </ul>

        <LinkContainer to="/data-help" className="page">
          <Nav.Link>Data</Nav.Link>
        </LinkContainer>
        <ul className="subsection">
          <li>
            {" "}
            <NavHashLink to="/data-help#cmip5-13">CMiP5-13</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/data-help#cmip5-ec">CMiP5-EC</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/data-help#eurocordex">
              EuroCORDEX regional
            </NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/data-help#era">ERA-EuroCORDEX</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/data-help#global">UKCP18 global</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/data-help#regional">UKCP18 regional</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/data-help#haduk">
              HadUK-Grid Observations
            </NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/data-help#other">Other</NavHashLink>
          </li>
        </ul>

        <LinkContainer to="/time-help" className="page">
          <Nav.Link>Time</Nav.Link>
        </LinkContainer>
        <ul className="subsection">
          <li>
            {" "}
            <NavHashLink to="/time-help#evaluation">
              Evaluation Period
            </NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/time-help#future">Future Periods</NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/time-help#warming">Warming Levels</NavHashLink>
          </li>
        </ul>

        <LinkContainer to="/plot-help" className="page">
          <Nav.Link>Plots</Nav.Link>
        </LinkContainer>
        <ul className="subsection">
          <li>
            {" "}
            <NavHashLink to="/plot-help#ensemble-means">
              Ensemble Means
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
