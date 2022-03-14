import React from "react";
import { Container } from "react-bootstrap";
import "../ExtraPages.css";
import {
  MissingPlotInfoContents,
  MissingPlotInfoHead,
} from "./Contents/MissingPlotInfo";

export default function MissingPlots() {
  return (
    <Container className="help">
      <div>
        <h1>{MissingPlotInfoHead.title}</h1>
        <p>{MissingPlotInfoHead.intro}</p>
      </div>
      <br></br>
      {/* section about the data */}
      {MissingPlotInfoContents.map(({ plot, description, i }) => (
        <div key={i}>
          <h5>{plot}</h5>
          <p>{description}</p>
        </div>
      ))}
    </Container>
  );
}
