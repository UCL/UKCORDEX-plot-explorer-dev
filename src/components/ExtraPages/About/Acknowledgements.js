import React from "react";
import { Container } from "react-bootstrap";
import "../ExtraPages.css";

export default function Acknowledgements() {
  return (
    <Container className="about">
      <div>
        <h1>Acknowledgements</h1>
        <h6>
          The development of this plot explorer has been made possible thanks to
          the following:
        </h6>
        <ul>
          <li>Met Office & UKRI</li>
          <li>CEDA / Jasmin</li>
          <li>
            The World Climate Research Programme's Working Group on Coupled
            Modelling, which is responsible for CMIP, and we thank the climate
            modeling groups for producing and making available their model
            output. For CMIP the U.S. Department of Energy's Program for Climate
            Model Diagnosis and Intercomparison provides coordinating support
            and led development of software infrastructure in partnership with
            the Global Organization for Earth System Science Portals.
          </li>
          <li>
            The World Climate Research Programme's Working Group on Regional
            Climate, and the Working Group on Coupled Modelling, former
            coordinating body of CORDEX and responsible panel for CMIP5. We also
            thank the climate modelling groups for producing and making
            available their model output. We also acknowledge the Earth
            SystemGrid Federation infrastructure an international effort led by
            the U.S. Department of Energy's Program for Climate Model Diagnosis
            and Intercomparison, the European Network for Earth System Modelling
            and other partners in the Global Organisation for Earth System
            Science Portals (GO-ESSP).
          </li>
        </ul>
      </div>
    </Container>
  );
}
