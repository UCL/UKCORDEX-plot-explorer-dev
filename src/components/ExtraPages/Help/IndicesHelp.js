import React from "react";
import { Container } from "react-bootstrap";
import { IndicesInfoContents, IndicesInfoHead } from "./Contents/IndicesInfo";
import "../ExtraPages.css";

function IndicesHelp() {
  return (
    <Container className="help">
      <div>
        <h1>{IndicesInfoHead.title}</h1>
        <h3>{IndicesInfoHead.subtitle}</h3>
        <p>{IndicesInfoHead.intro}</p>
      </div>
      <br></br>
      {/* section about the indices */}
      {IndicesInfoContents.map(({ index, description, i }) => (
        <div key={i}>
          <h5>{index}</h5>
          <p>{description}</p>
        </div>
      ))}
    </Container>
  );
}

export default IndicesHelp;
