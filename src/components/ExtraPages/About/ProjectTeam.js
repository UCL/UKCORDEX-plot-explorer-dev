import React from "react";
import { Container } from "react-bootstrap";
import "../ExtraPages.css";
import { TeamInfo } from "./Contents/TeamInfo";

export default function ProjectTeam() {
  return (
    <Container className="about">
      <div>
        <h1>{TeamInfo.title}</h1>
        <p>{TeamInfo.contents}</p>
      </div>
    </Container>
  );
}
