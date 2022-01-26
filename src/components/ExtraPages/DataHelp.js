import React from "react";
import { Container } from "react-bootstrap";
import { DataInfoContents, DataInfoHead } from "./Contents/DataInfo";
import "./ExtraPages.css";

function DataHelp() {
  return (
    <Container className="help">
      <div>
        <h1>{DataInfoHead.title}</h1>
        <p>{DataInfoHead.intro}</p>
      </div>
      <br></br>
      {/* section about the data */}
      {DataInfoContents.map(({ data, description }) => (
        <div key={data}>
          <h5>{data}</h5>
          <p>{description}</p>
        </div>
      ))}
    </Container>
  );
}

export default DataHelp;
