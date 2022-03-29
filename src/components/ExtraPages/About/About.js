import React from "react";
import { Container } from "react-bootstrap";
import "../ExtraPages.css";

export default function About() {
  return (
    <Container className="about">
      <div>
        <h1>About the UKCORDEX project</h1>
        <p>
          The Met Office's 2018{" "}
          <a href="https://www.metoffice.gov.uk/research/approach/collaboration/ukcp/about">
            UK Climate Projections
          </a>{" "}
          (UKCP18) provide several different products giving information about the future
          climate of the UK, including projections at global (60km), regional
          (12km) and local (2.2km) scales. Although the regional projections are
          proving beneficial in understanding future climate risks to the UK, these were
          derived by perturbing the physical parameters of a single global
          climate model (GCM) and a single regional climate model (RCM), and so
          may not sample the full range of uncertainty that is consistent
          with current scientific understanding.
        </p>
        <p>
          This research project extends the UKCP18 suite of climate projections by augmenting
          them with information from a broader range of climate simulations at the same 12km resolution,
          obtained from the <a href="https://euro-cordex.net/060374/index.php.en">EuroCORDEX downscaling experiment</a>.
          The additional simulations provide a more comprehensive sampling of uncertainty in high-resolution UK climate projections.
          In turn, this offers the potential to develop better informed strategies for adapting to, and mitigating the effects of, future weather and climate.
        </p>
        <p>As well as providing access to additional climate projections for the UK,
          the project aims to provide insights into the physical plausibility of the various simulations;
          to assess the value added by considering high-resolution information; to identify
          the dominant sources of uncertainty in future projections of a variety of weather indices;
          and to assess the extent to which the existing UKCP ensemble provides a decision-relevant
          characterisation of this uncertainty. To achieve these challenging objectives,
          the project takes a multidisciplinary approach combining expertise in climate modelling,
          modern statistics and uncertainty quantification, and software engineering.
        </p>
        <p>
        The project runs from October 2019 until October 2022, and is funded under the <a href="https://www.ukclimateresilience.org/">UK Climate Resilience Programme</a>.
        </p>
      </div>
    </Container>
  );
}
