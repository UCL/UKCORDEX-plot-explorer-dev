import React from "react";
import { Container } from "react-bootstrap";
import { DataInfoContents, DataInfoHead } from "./Contents/DataInfo";
import "../ExtraPages.css";

export default function TimeHelp() {
  return (
    <Container className="help">
      <div>
        <h1>{DataInfoHead.title}</h1>
        <p>{DataInfoHead.intro}</p>
      </div>
      <br></br>
      {/* section about the data */}
      {DataInfoContents.map(({ period, description, i }) => (
        <div key={i}>
          <h5>{period}</h5>
          <p>{description}</p>
        </div>
      ))}
    </Container>
  );
}
