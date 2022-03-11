import React from "react";
import { Container, Image } from "react-bootstrap";
import { DataInfoContents, DataInfoHead } from "./Contents/DataInfo";
import "../ExtraPages.css";

export default function DataHelp() {
  return (
    <Container className="help">
      <div>
        <h1>{DataInfoHead.title}</h1>
        <p>
          {DataInfoHead.intro[0]}
          <a href="/indices-help">{DataInfoHead.intro[1]}</a>
        </p>
      </div>
      <br></br>
      {/* section about the data */}
      {DataInfoContents.map((data, i) => (
        <div key={i}>
          <h5>{data.source}</h5>
          <p>
            {data.description}{" "}
            {data.link && <a href={data.link}>More info here</a>}
          </p>
          <Image
            className="mb-3"
            fluid="true"
            src={`${process.env.PUBLIC_URL}${data.image}`}
            alt=""
          />
        </div>
      ))}
    </Container>
  );
}
