import React from "react";
import { Container } from "react-bootstrap";
import "../ExtraPages.css";
import { AckInfo } from "./Contents/AckInfo";

export default function Acknowledgements() {
  return (
    <Container className="about">
      <div>
        <h1>{AckInfo.title}</h1>
        <h6>{AckInfo.intro}</h6>
        <ul>
          {AckInfo.contents.map((contributor, i) => (
            <li key={i}>{contributor}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
}