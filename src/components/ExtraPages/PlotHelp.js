import React from "react";
import { Container } from "react-bootstrap";
import { PlotInfoHead } from "./Contents/PlotInfo";
import { PlotInfoContents } from "./Contents/PlotInfo";
import "./ExtraPages.css";

function PlotHelp() {
  return (
    <Container className="plotHelp">
      <div>
        {/* intro section */}
        <h1>{PlotInfoHead.title}</h1>
        <p>{PlotInfoHead.intro}</p>
      </div>
      <br></br>
      {/* section about the plots */}
      {PlotInfoContents.map(({ plot, description }) => (
        <div key={plot}>
          <h5>{plot}</h5>
          <p>{description}</p>
        </div>
      ))}
    </Container>
  );
}

export default PlotHelp;
