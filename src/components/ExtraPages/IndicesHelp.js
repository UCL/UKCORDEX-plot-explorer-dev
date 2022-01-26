import React from "react";
import { Container } from "react-bootstrap";
import { IndicesInfoContents, IndicesInfoHead } from "./Contents/IndicesInfo";
import "./ExtraPages.css";
// import div from "react-bootstrap/div";

function IndicesHelp() {
  return (
    <Container className="help">
      <div>
        <h1>{IndicesInfoHead.title}</h1>
        <p>{IndicesInfoHead.intro}</p>
      </div>
      <br></br>
      {/* section about the indices */}
      {IndicesInfoContents.map(({ index, description }) => (
        <div key={index}>
          <h5>{index}</h5>
          <p>{description}</p>
        </div>
      ))}
    </Container>
  );
}

export default IndicesHelp;
