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
                  <HashLink
                    to="/missing-plots#evalplots"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Evaluation plots
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/missing-plots#combo2"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    combo2
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/missing-plots#combo3"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    combo3
                  </HashLink>
                </li>
              </ul>
            </Nav>
          </Container>
        </Col>
        {/* page contents */}
        <Col>
          <div>
            <h1>Plots not available from UKCORDEX Plot Explorer</h1>
            <p>
              Some combinations of the available options will result in an error message that the selected plots do not exist.
              Common reasons for this are given below.
            </p>
          </div>
          {/* section about the missing plots */}
          <div>
            <h5 id="evalplots">Missing evaluation plots where suitable observations are unavailable</h5>
            <p>Plots of biases during the evaluation period are provided where appropriate observations are available. 
              At present, all biases are calculated with respect to the 
              <HashLink to="/data-help#haduk">HadUK-Grid dataset</HashLink></p>,
              which provides daily time series of rainfall and of daily maximum and minimum temperature, 
              from which a daily mean temperature is derived; and monthly time series of relative humidity, sea level pressure, 
              surface wind speeds and snow depth. Plots of other variables, or of indices requiring daily time series of variables
              other than temperature or precipitation, are therefore not available.
          </div>
        </Col>
      </Row>
    </Container>
  );
}
