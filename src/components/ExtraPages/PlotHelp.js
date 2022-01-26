import React from "react";
import { Container } from "react-bootstrap";
import { PlotInfo } from "./Contents/PlotInfo";
import "./ExtraPages.css";

// import Container from "react-bootstrap/Container";

function PlotHelp() {
  return (
    <Container className="plotHelp">
      <div>
        <h1>Plots Explained</h1>
        <p>{PlotInfo.intro}</p>
        <p>{PlotInfo.contents}</p>
      </div>
    </Container>
  );
}

export default PlotHelp;
