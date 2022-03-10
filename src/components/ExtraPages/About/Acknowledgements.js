import React from "react";
import { Container } from "react-bootstrap";
import "../ExtraPages.css";
import { AckInfo } from "./Contents/AckInfo";

export default function Acknowledgements() {
  return (
    <Container className="about">
      <div>
        <h1>{AckInfo.title}</h1>
        <p>{AckInfo.contents}</p>
      </div>
    </Container>
  );
}
