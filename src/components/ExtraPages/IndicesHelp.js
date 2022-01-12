import React from "react";
import { Container } from "react-bootstrap";
import './ExtraPages.css';
// import div from "react-bootstrap/div";

function IndicesHelp() {
  return (
      <Container className="help">
          <div >
            <h1>Help on Indices</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div id="indices">
            <h2>Indices</h2>
            <p>Information on acronyms used</p>
            </div>
            
          </div>
        </Container>
  );
}

export default IndicesHelp;
