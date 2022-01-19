import React from "react";
import { Container } from "react-bootstrap";
import './ExtraPages.css';
import { AboutInfo } from "./Contents/AboutInfo";

function About() {
  return (
      <Container className="about">
          <div>
            <h1>About</h1>
            <p>
              {AboutInfo.contents}
            </p>
          </div>
        </Container>
  );
}

export default About;


