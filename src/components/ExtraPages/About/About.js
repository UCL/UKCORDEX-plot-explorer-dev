import React from "react";
import { Container } from "react-bootstrap";
import "../ExtraPages.css";
import { AboutInfo } from "./Contents/AboutInfo";

export default function About() {
  return (
    <Container className="about">
      <div>
        <h1>{AboutInfo.title}</h1>
        {AboutInfo.contents.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <p style={{ textAlign: "center" }}>
          <span
            style={{
              paddingRight: 20,
            }}>
            <a href={AboutInfo.links[1]}>Met Office Climate Projections </a>
          </span>
          <span
            style={{
              paddingLeft: 20,
            }}>
            <a href={AboutInfo.links[2]}>EuroCORDEX Ensemble</a>
          </span>
        </p>
      </div>
    </Container>
  );
}
