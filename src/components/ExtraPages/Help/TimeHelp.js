import React from "react";
import { Container, Image } from "react-bootstrap";
import "../ExtraPages.css";
import { TimeInfoContents, TimeInfoHead } from "./Contents/TimeInfo";

export default function TimeHelp() {
  return (
    <Container className="help">
      <div>
        <h1>{TimeInfoHead.title}</h1>
        <p>{TimeInfoHead.intro}</p>
      </div>
      <br></br>
      {/* section about the data */}
      {TimeInfoContents.map((period, i) => (
        <div key={i}>
          <h5>{period.period}</h5>
          {period.description.map((desc, i) => (
            <p key={i}> {desc}</p>
          ))}
          {period.image && (
            <Image
              fluid="true"
              src={`${process.env.PUBLIC_URL}${period.image}`}
              alt=""
            />
          )}
        </div>
      ))}
    </Container>
  );
}
