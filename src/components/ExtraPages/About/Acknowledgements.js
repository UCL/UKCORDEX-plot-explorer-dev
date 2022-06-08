import React from "react";
import { Container } from "react-bootstrap";
import "../ExtraPages.css";

export default function Acknowledgements() {
  return (
    <Container className="about">
      <div>
        <h1>Acknowledgements</h1>
        <h6>
          This plot explorer was developed by UCL's <a href='https://www.ucl.ac.uk/advanced-research-computing/expertise/research-software-development'>
                Research Software Development Group</a> and funded by the 
                <a href='https://www.ukclimateresilience.org/'>
                UK Climate Resilience programme</a>.
                The programme is supported by the UKRI Strategic Priorities Fund and co-delivered by the Met Office and NERC on behalf of UKRI partners AHRC, EPSRC, ESRC.
        </h6>
        <br></br>
        <h6>
          The project team would also like to acknowledge the contributions of the following:
        </h6>
        <ul>
          <li>The Centre for Environmental Data Analysis, 
            for providing access to UKCP18 data and for making the EuroCORDEX core variables
            freely available to users alongside the UKCP18 data through the <a href='https://ukclimateprojections-ui.metoffice.gov.uk/ui/home'>
            UK Climate Projections User Interface. 
            </a>
          </li>
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
          <li>
            <a href='https://jasmin.ac.uk'>JASMIN</a>, the UK's collaborative data analysis environment,
            which was used to carry out data preprocessing.
          </li>
        </ul>
      </div>
    </Container>
  );
}
