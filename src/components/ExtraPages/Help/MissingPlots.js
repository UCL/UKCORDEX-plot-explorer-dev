import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "../ExtraPages.css";
import "../HelpNav.css";

export default function MissingPlots() {
  return (
    <Container className="help">
      <Row fluid="true">
        {/* sidenav for help pages */}
        <Col
          xs={3}
          sm={2}
          m={1}
          style={{ paddingLeft: 0, marginLeft: "-1%", marginRight: "7%" }}>
          <Container>
            <Nav
              className="flex-column"
              style={{ position: "fixed", overflow: "auto" }}>
              <ul className="subsection">
                {" "}
                <HashLink to="/missing-plots#" className="page">
                  Missing Plots
                </HashLink>
                <li>
                  {" "}
                  <HashLink to="/missing-plots#combo1">combo1</HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink to="/missing-plots#combo2">combo2</HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink to="/missing-plots#combo3">combo3</HashLink>
                </li>
              </ul>
            </Nav>
          </Container>
        </Col>
        {/* page contents */}
        <Col>
          <div>
            <h1>Plots Missing from UKCORDEX Plot Explorer</h1>
            <p>
              Some of the combinations found in the given options do not exist
              and so these plots cannot be created.
            </p>
          </div>
          <br></br>
          {/* section about the missing plots */}
          <div>
            <h5>combination</h5>
            <p>explanation?</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
