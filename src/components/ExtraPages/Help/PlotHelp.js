import React from "react";
import { Container } from "react-bootstrap";
import { PlotInfoHead, PlotInfoContents } from "./Contents/PlotInfo";
import "../ExtraPages.css";

export default function PlotHelp() {
  return (
    <Container className="plotHelp">
      <div>
        {/* intro section */}
        <h1>{PlotInfoHead.title}</h1>
        <p>{PlotInfoHead.intro}</p>
      </div>
      <br></br>
      {/* section about the plots */}
      {PlotInfoContents.map(({ plot, description, i }) => (
        <div key={i}>
          <h5>{plot}</h5>
          <p>{description}</p>
          <br></br>
        </div>
      ))}
    </Container>
  );
}