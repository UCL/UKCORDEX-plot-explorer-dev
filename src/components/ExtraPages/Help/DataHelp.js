import React from "react";
import { Container, Image, Row, Col, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "../HelpNav.css";
import "../ExtraPages.css";

export default function DataHelp() {
  return (
    <Container className="help">
      <Row fluid="true">
        {/* sidenav for help pages */}
        <Col
          xs={3}
          sm={2}
          m={1}
          style={{ paddingLeft: 0, marginLeft: "-1%", marginRight: "7%" }}>
          <Container>
            {" "}
            <Nav
              className="flex-column"
              style={{ position: "fixed", overflow: "auto" }}>
              <ul className="subsection">
                <HashLink to="/data-help#" className="page">
                  Data
                </HashLink>
                <li>
                  {" "}
                  <HashLink
                    to="/data-help#cmip5-13"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    CMIP5-13
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/data-help#cmip5-ec"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    CMIP5-EC
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/data-help#eurocordex"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    EuroCORDEX regional
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/data-help#era"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    ERA-EuroCORDEX
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/data-help#global"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    UKCP18 global
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/data-help#regional"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    UKCP18 regional
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/data-help#haduk"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    HadUK-Grid observations
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/data-help#other"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Other
                  </HashLink>
                </li>
              </ul>
            </Nav>{" "}
          </Container>
        </Col>
        {/* page contents */}
        <Col>
          <div>
            <h1>Information on Data Sources</h1>
            <p>
              The main sources of climate information in this plot explorer are
              the EuroCORDEX and UKCP18 regional ensembles, but several other
              sources are also used: brief descriptions of these are provided
              here. All indices are first computed on each model's native grid,
              then regridded to a common 12km OSGB grid to facilitate comparisons.
              The general process used for calculation of the climatologies is described{" "}
              <HashLink to="/indices-calculation#">here</HashLink>.
            </p>
            <p>
              All climate model output prior to 2006 is driven by historical forcings;
              projections thereafter use the{" "}
              <a href='https://www.metoffice.gov.uk/binaries/content/assets/metofficegovuk/pdf/research/ukcp/ukcp18-guidance---representative-concentration-pathways.pdf'>
                RCP 8.5 scenario</a>.
            </p>
          </div>
          <br></br>
          {/* section about the data */}
          <div id="cmip5-13">
            <h5>CMIP5-13 ensemble</h5>
            <p>
              This consists of simulations from thirteen of the coupled
              ocean-atmosphere models run as part of the Coupled Model
              Intercomparison Project Phase 5 (CMIP5) experiment. This ensemble
              was constructed to supplement the 60km projections in the UKCP18
              global projections, with the constituent models selected on the
              basis of performance and diversity criteria to in order to
              increase the range of global and regional changes sampled. The
              members of the CMIP5-13 ensemble are listed in Table 1.
            </p>
          </div>
          <div id="cmip5-ec">
            <h5>CMIP5-EC ensemble</h5>
            <p>
              This contains the ten CMIP5 variants that were used to drive the
              EuroCORDEX 12km ensemble members. These ten driving realisations
              consist of six separate models, two of which — EC-EARTH and
              MPI-M-ESM — each contribute three realisations. The models used to
              drive EuroCORDEX runs are listed in Table 1.
            </p>
            <Image
              className="mb-3"
              fluid="true"
              width="80%"
              src={`${process.env.PUBLIC_URL}/content_images/cmip5-table.png`}
              alt=""
            />
          </div>
          <div id="eurocordex">
            <h5>EuroCORDEX regional (12km) ensemble</h5>
            <p>
              This consists of 65 climate simulations produced by multiple
              dynamical downscaling models forced by multiple global climate
              models from the CMIP5 experiment. These simulations are derived
              from the{" "}
              <a href="https://euro-cordex.net/060374/index.php.en">
                EuroCORDEX</a>{" "}project and consist of outputs at 0.11°
              resolution from six different GCMs (two of which provided three
              independent realisations each) and thirteen RCMs. However, runs
              have only been produced for a subset of the possible GCM-RCM
              pairs. Table 2 shows the available combinations of GCMs and RCMs:
              each marked GCM-RCM pair contributes a single run to the 65-member
              ensemble.
            </p>
            <Image
              className="mb-3"
              fluid="true"
              width="80%"
              src={`${process.env.PUBLIC_URL}/content_images/eurocordex-12km-table.png`}
              alt=""
            />
          </div>
          <div id="era">
            <h5>ERA-EuroCORDEX evaluation runs</h5>
            <p>
              EuroCORDEX also provides a single evaluation run for each of its
              ten RCMs (Table 2), forced by ERA-Interim reanalysis rather than
              by GCM output. These runs allow us to evaluate the performance of
              the RCMs in the absence of errors or biases inherited from the
              driving GCMs. The evaluation periods for which these runs were
              produced differ between models, with only the period from December
              1989 to November 2008 covered by all of the models: this
              constrains the period used to evaluate the historical performance
              of the models.
            </p>
          </div>
          <div id="global">
            <h5>UKCP18 global (60km) ensemble</h5>
            <p>
              This is a twelve-member perturbed physics ensemble (PPE) produced
              by the{" "}
              <a href="https://www.metoffice.gov.uk/research/approach/collaboration/ukcp/guidance-science-reports#guidance">
                UK Met Office
              </a>
              . The ensemble is derived from HadGEM3-GC3.05, with ensemble
              member 01 being run with the standard parameters, and each
              remaining ensemble member having slightly different perturbations
              to the parametrisations of model physics. The models have a
              spatial resolution of 0.55° latitude x 0.83° longitude, or
              approximately 60km over the UK.
            </p>
          </div>
          <div id="regional">
            <h5>UKCP18 regional (12km) ensemble</h5>
            <p>
              This ensemble downscales the twelve runs of the{" "}
              <a href="https://www.metoffice.gov.uk/research/approach/collaboration/ukcp/guidance-science-reports#guidance">
                UKCP18 global ensemble
              </a>{" "}
              using the HadREM3-GA7-05 regional model with the same parameter
              perturbations as those used to generate the 60km 'parent' run.
              Ensemble member 01 was produced without perturbations; this is the
              same RCM that appears in the EuroCORDEX ensemble.
            </p>
          </div>
          <div id="haduk">
            <h5>HadUK-Grid observations</h5>
            <p>
              During the evaluation period from 1989-2008, surface weather
              quantities simulated by the model runs are evaluated against the{" "}
              <a href="https://www.metoffice.gov.uk/research/climate/maps-and-data/data/haduk-grid/overview">
                HadUK-Grid dataset
              </a>
              , a collection of gridded climate variables over the UK land
              surface derived from the network of UK land surface observations.
              Observations from irregularly spaced station data were
              interpolated to a 1km grid using inverse-distance weighting, then
              averaged to the 12km grid used in this report.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
