import React from "react";
import { Container } from "react-bootstrap";
import './ExtraPages.css';
// import Container from "react-bootstrap/Container";

function About() {
  return (
      <Container className="about">
          <div>
            <h1>About</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </Container>
  );
}

export default About;