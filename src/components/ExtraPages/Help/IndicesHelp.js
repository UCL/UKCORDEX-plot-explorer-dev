import React from "react";
import { Container, Table, Row, Col, Image } from "react-bootstrap";
import {
  CoreVarsContents,
  IndicesInfoContents,
  IndicesInfoHead,
} from "./Contents/IndicesInfo";
import "../ExtraPages.css";
import Latex from "react-latex";

function IndicesHelp() {
  // var Latex = require("react-latex");
  return (
    <Container className="help">
      <div>
        <h1>{IndicesInfoHead.title}</h1>
        <h3>{IndicesInfoHead.subtitle}</h3>
        <p>{IndicesInfoHead.intro}</p>
      </div>
      <br></br>
      <h6>{IndicesInfoHead.segue} </h6> <br></br>
      {/* specifically render core vars table */}
      <h5>{CoreVarsContents.category}</h5>
      <Row>
        <Col>
          <Table striped size="sm">
            <thead>
              <tr>
                <th>code</th>
                <th>index</th>
                <th>unit</th>
              </tr>
            </thead>
            <tbody>
              {CoreVarsContents["tb1"].map((corevar, i) => (
                <tr key={i}>
                  <td>{corevar.value}</td>
                  <td>{corevar.label}</td>
                  <td>{corevar.unit}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>

        <Col>
          <Table striped size="sm">
            <thead>
              <tr>
                <th>code</th>
                <th>index</th>
                <th>unit</th>
              </tr>
            </thead>
            <tbody>
              {CoreVarsContents["tb2"].map((corevar, i) => (
                <tr key={i}>
                  <td>{corevar.value}</td>
                  <td>{corevar.label}</td>
                  <td>{corevar.unit}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <span>*mm of liquid water equivalent</span>
        </Col>
      </Row>
      {/* All other indices */}
      {IndicesInfoContents.map((entry, i) => (
        <Row className="indices">
          <div key={i}>
            <h5>
              <u>{entry.category}</u>
            </h5>
            <p className="foreword">{entry.foreword}</p>

            {entry["options"].map((content, i) => (
              <p key={i} className="contents">
                <b>{content.label}</b> ({content.value}):{" "}
                <Latex displayMode={true}>{content.description}</Latex>{" "}
                {content.link && <a href={content.link}>See here</a>}
                <Image
                  fluid="true"
                  src={`${process.env.PUBLIC_URL}${content.image}`}
                  alt=""
                />
              </p>
            ))}
          </div>
        </Row>
      ))}
    </Container>
  );
}

export default IndicesHelp;
