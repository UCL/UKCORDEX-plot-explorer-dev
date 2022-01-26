import React from "react";
import { Container } from "react-bootstrap";
import "./ExtraPages.css";
import { DataInfo } from "./Contents/DataInfo";

function DataHelp() {
  return (
    <Container className="help">
      <div>
        <h1>Help on Data</h1>
        <p>{DataInfo.intro}</p>

        <div id="data">
          <h2>Data</h2>
          <p>{DataInfo.contents}</p>
        </div>
      </div>
    </Container>
  );
}

export default DataHelp;
