import React from "react";
import { Container } from "react-bootstrap";
import "../ExtraPages.css";

export default function MissingPlots() {
  return (
    <Container className="help">
      <div>
        <h1>Plots Missing from UKCORDEX Plot Explorer</h1>
        <p>
          Some of the combinations found in the given options do not exist and
          so these plots cannot be created.
        </p>
      </div>
      <br></br>
      {/* section about the missing plots */}
      <div>
        <h5>combination</h5>
        <p>explanation?</p>
      </div>
    </Container>
  );
}
