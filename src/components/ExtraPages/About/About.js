import React from "react";
import { Container } from "react-bootstrap";
import "../ExtraPages.css";
import { AboutInfo } from "./Contents/AboutInfo";

export default function About() {
  return (
    <Container className="about">
      <div>
        <h1>{AboutInfo.title}</h1>
        <p>
          <a href={AboutInfo.links[1]}>
            The Met Office's UK Climate Projections (UKCP18)
          </a>
          provide several different products giving information about the future
          climate of the UK, including projections at global (60km), regional
          (12km) and local (2.2km) scales. Although the regional projections are
          proving beneficial in understanding future climate risks, these were
          derived by perturbing the physical parameters of a single global
          climate model (GCM) and a single regional climate model (RCM), and so
          may not sample the full range of possible futures that is consistent
          with current scientific understanding. A more comprehensive assessment
          of potential climate futures for the UK can be obtained by
          supplementing the UKCP18 regional projections with information from{" "}
          <a href={AboutInfo.links[2]}>the EuroCORDEX ensemble</a> at the same
          12km resolution. This combined set will allow a better understanding
          of structural uncertainty in UK climate projections and substantially
          enhances the information base available to support future climate
          change risk assessments.
        </p>
        <p>{AboutInfo.contents[1]}</p>
      </div>
    </Container>
  );
}
