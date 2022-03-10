import React from "react";
import { Container } from "react-bootstrap";
import "../ExtraPages.css";
import { AboutInfo } from "./Contents/AboutInfo";

export default function About() {
  return (
    <Container className="about">
      <div>
        <h1>{AboutInfo.title}</h1>
        <p>{AboutInfo.contents}</p>
      </div>
    </Container>
  );
}
