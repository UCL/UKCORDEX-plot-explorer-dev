import React from "react";
import { Container, Image } from "react-bootstrap";
import { PlotInfoHead, PlotInfoContents } from "./Contents/PlotInfo";
import "../ExtraPages.css";

export default function PlotHelp() {
  return (
    <Container className="plotHelp">
      <div>
        {/* intro section */}
        <h1>{PlotInfoHead.title}</h1>
        <p>
          {PlotInfoHead.intro} <a href={PlotInfoHead.links[0]}>this page</a>
        </p>
        <p>
          For guidance on how to use these plots, see{" "}
          <a href={PlotInfoHead.links[1]}>our help page</a>{" "}
        </p>
      </div>
      <br></br>
      <p>{PlotInfoHead.overview} </p>
      <Image
        fluid="true"
        src={`${process.env.PUBLIC_URL}${PlotInfoHead.legend}`}
        alt=""
      />
      {/* section about the plots */}
      {PlotInfoContents.map((plot, i) => (
        <div key={i}>
          <h5>{plot.plot}</h5>
          {plot.description.map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
          <br></br>
        </div>
      ))}
    </Container>
  );
}
