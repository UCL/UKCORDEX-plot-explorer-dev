import React from "react";
import { Container } from "react-bootstrap";
import "../ExtraPages.css";
import { UsageInfo } from "./Contents/UsageInfo";

export default function Usage() {
  return (
    <Container className="about">
      <div>
        <h1>{UsageInfo.title}</h1>
        <p>{UsageInfo.contents}</p>
      </div>
    </Container>
  );
}
