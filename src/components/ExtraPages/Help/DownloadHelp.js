import React from "react";
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
import "../ExtraPages.css";
import "../HelpNav.css";

export default function DownloadHelp() {
  return (
    <Container className="help">
      {/* page contents */}
      <div>
        <h1>How to use the downloaded data</h1>
        <p>info here</p>
      </div>
    </Container>
  );
}
