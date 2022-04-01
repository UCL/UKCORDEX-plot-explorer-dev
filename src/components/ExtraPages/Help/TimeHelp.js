import React from "react";
import { Col, Container, Nav, Row, Table } from "react-bootstrap";
import "../ExtraPages.css";
import "../HelpNav.css";
import { HashLink } from "react-router-hash-link";

export default function TimeHelp() {
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
            <Nav
              className="flex-column"
              style={{ position: "fixed", overflow: "auto" }}>
              <ul className="subsection">
                <HashLink to="/time-help#" className="page">
                  Time
                </HashLink>
                <li>
                  {" "}
                  <HashLink
                    to="/time-help#evaluation"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Evaluation period
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/time-help#baseline"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Baseline period
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/time-help#future"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Future periods
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/time-help#warming"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Warming levels
                  </HashLink>
                </li>
              </ul>
            </Nav>
          </Container>
        </Col>
        {/* page contents */}
        <Col>
          <div>
            <h1>Information on time periods</h1>
          </div>
          <p>
              All climate model output prior to 2006 is driven by historical forcings;
              projections thereafter use the{" "}
              <a href='https://www.metoffice.gov.uk/binaries/content/assets/metofficegovuk/pdf/research/ukcp/ukcp18-guidance---representative-concentration-pathways.pdf'>
                RCP 8.5 scenario</a>.
            </p>
          {/* section about the data */}
          <div id="evaluation">
            <h5>Evaluation period</h5>
            <p>
              Model outputs are compared to HadUK-Grid observations during the
              evaluation period from January 1st 1989 - December 31st 2008. This
              period was chosen based on the availability of EuroCORDEX
              evaluation runs driven by ERA-Interim reanalysis, which are used
              to evaluate the performance of the RCMs in the absence of errors
              or biases inherited from the driving GCMs. Plots of model output
              during the evaluation period show biases with respect to
              observations for the same period from the HadUK-Grid dataset.
            </p>
          </div>
          <div id="baseline">
            <h5>Baseline period</h5>
            <p>
              Plots of model climatology during the baseline period 
              (December 1st 1980 - November 30th 2010) are provided for reference.
            </p>
          </div>
          <div id="future">
            <h5>Future periods</h5>
            <p>
              Plots of changes in model climatology with respect to the baseline
              period (December 1st 1980 - November 30th 2010) are provided for
              the seven 30-year time periods defined in Table 5.
            </p>
            <p style={{ fontSize: "80%" }}>
              <b>Table 5:</b> Definitions of time slices for which plots are
              available.
            </p>
            <Table striped size="sm">
              <thead>
                <tr>
                  <td>Period</td>
                  <td>Start date</td>
                  <td>End date</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1990-2019</td>
                  <td>01-Dec-1989</td>
                  <td>30-Nov-2019</td>
                </tr>
                <tr>
                  <td>2000-2029</td>
                  <td>01-Dec-1999</td>
                  <td>30-Nov-2029</td>
                </tr>
                <tr>
                  <td>2010-2039</td>
                  <td>01-Dec-2009</td>
                  <td>30-Nov-2039</td>
                </tr>
                <tr>
                  <td>2020-2049</td>
                  <td>01-Dec-2019</td>
                  <td>30-Nov-2049</td>
                </tr>
                <tr>
                  <td>2030-2059</td>
                  <td>01-Dec-2029</td>
                  <td>30-Nov-2059</td>
                </tr>
                <tr>
                  <td>2040-2069</td>
                  <td>01-Dec-2039</td>
                  <td>30-Nov-2069</td>
                </tr>
                <tr>
                  <td>2050-2079</td>
                  <td>01-Dec-2049</td>
                  <td>30-Nov-2079</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
            <h5 id="warming">Warming levels</h5>
            <p>
              Plots of changes in model climatology with respect to the baseline
              period (December 1st 1980 - November 30th 2010) are also provided
              for 30-year periods centred on the years in which global mean
              surface temperature (GMST) reaches 1.5°C, 2°C and 3°C above
              pre-industrial levels in the driving GCM run. Area-weighted annual
              GMST was computed for each global model in the CMIP5-EC and UKCP18
              60km ensembles on the native grid, then a 30-year rolling average
              calculated: the warming level is the first year in which each
              temperature threshold was exceeded by this rolling average. This
              is a slightly different approach to that used to compute warming
              levels for the IPCC's interactive atlas, where model output was
              first regridded to a 2°-resolution grid, with the land and sea
              surfaces on the native grid mapped separately to the land and sea
              surfaces on the coarser grid before averaging; however, the
              warming levels calculated are within 1-2 years of those produced
              by the IPCC method. Table 6 shows the warming levels computed for
              each global model.
            </p>
            <p>
              Output from the UKCP18 60km runs was not available prior to
              December 1899, so the preindustrial average (1850-1900) could not
              be computed for these runs. In order to compute the warming
              levels, changes in the UKCP18 runs were first calculated with
              respect to the mean temperature during the first thirty years
              available (1900-1929). To account for the change in GMST between
              this period and the preindustrial period, the corresponding change
              was calculated from the HadGEM2-ES model output and added to the
              UKCP18 changes: an offset of 0.059°C. Each UKCP18 run therefore
              has the same mean change in GMST as HadGEM2-ES for the period
              1900-1929, with the projections diverging from that point.
            </p>
            <p>
              Model climatologies for each run were computed by selecting a
              30-year period centred on December 1st of the year in which the
              temperature was first exceeded by the driving model: for example,
              for any run driven by CNRM-CM5, the 1.5°C climatology was computed
              by averaging the seasonal time series of each index from December
              1st 2016 to November 31st 2046. Data was only available up to
              November 31st 2080: therefore where the threshold was crossed
              later than 2065 (highlighted in yellow in the table), the model
              climatology was computed using the longest available symmetric
              period centred on the crossing time: for CNRM-CM5, this was the
              26-year period from 2054-2080; for MRI-CGCM3, the 10-year period from 2070-2080;
              and for NorESM1-M, the 14-year period from 2066-2080. 
              No model climatology was computed for warming of 3°C for GFDL-ESM2G,
              because the run only reached this threshold in 2080.
            </p>
            <Row>
              <p style={{ fontSize: "80%" }}>
                <b>Table 6:</b> Global warming levels for global models used to
                drive the regional ensemble members. Cells highlighted in
                yellow indicate runs that reached the threshold later than 1965,
                so that model climatologies were computed from a truncated
                period. Cells shaded in grey indicate runs that reached the threshold
                later than 2080, for which model climatologies were not computed.
              </p>
              <Col>
                <p>
                  {" "}
                  <b>(a)</b> CMIP5 runs
                </p>
                <Table striped size="sm">
                  <thead>
                    <tr>
                      <td>Driving model</td>
                      <td>1.5°</td>
                      <td>2°</td>
                      <td>3°</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ACCESS1-3 r1i1p1</td>
                      <td>2030</td>
                      <td>2041</td>
                      <td>2060</td>
                    </tr>
                    <tr>
                      <td>bcc-csm1-1 r1i1p1</td>
                      <td>2019</td>
                      <td>2036</td>
                      <td>2060</td>
                    </tr>
                    <tr>
                      <td>CCSM4 r1i1p1</td>
                      <td>2013</td>
                      <td>2030</td>
                      <td>2057</td>
                    </tr>
                    <tr>
                      <td>CESM1-BGC r1i1p1</td>
                      <td>2016</td>
                      <td>2033</td>
                      <td>2059</td>
                    </tr>
                    <tr>
                      <td>CMCC-CM r1i1p1</td>
                      <td>2029</td>
                      <td>2041</td>
                      <td>2061</td>
                    </tr>
                    <tr>
                      <td>CNRM-CM5 r1i1p1</td>
                      <td>2031</td>
                      <td>2044</td>
                      <td style={{ backgroundColor: "yellow" }}>2067</td>
                    </tr>
                    <tr>
                      <td>CanESM2 r1i1p1</td>
                      <td>2013</td>
                      <td>2027</td>
                      <td>2049</td>
                    </tr>
                    <tr>
                      <td>EC-EARTH r12i1p1</td>
                      <td>2019</td>
                      <td>2036</td>
                      <td>2061</td>
                    </tr>
                    <tr>
                      <td>EC-EARTH r1i1p1</td>
                      <td>2019</td>
                      <td>2036</td>
                      <td>2061</td>
                    </tr>
                    <tr>
                      <td>EC-EARTH r3i1p1</td>
                      <td>2019</td>
                      <td>2036</td>
                      <td>2061</td>
                    </tr>
                    <tr>
                      <td>GFDL-ESM2G r1i1p1</td>
                      <td>2037</td>
                      <td>2054</td>
                      <td style={{ backgroundColor: "grey" }}>2080</td>
                    </tr>
                    <tr>
                      <td>HadGEM2-ES r1i1p1</td>
                      <td>2023</td>
                      <td>2036</td>
                      <td>2055</td>
                    </tr>
                    <tr>
                      <td>IPSL-CM5A-MR r1i1p1</td>
                      <td>2016</td>
                      <td>2030</td>
                      <td>2050</td>
                    </tr>
                    <tr>
                      <td>MPI-ESM-LR r1i1p1</td>
                      <td>2019</td>
                      <td>2036</td>
                      <td>2061</td>
                    </tr>
                    <tr>
                      <td>MPI-ESM-LR r2i1p1</td>
                      <td>2019</td>
                      <td>2036</td>
                      <td>2061</td>
                    </tr>
                    <tr>
                      <td>MPI-ESM-LR r3i1p1</td>
                      <td>2019</td>
                      <td>2036</td>
                      <td>2061</td>
                    </tr>
                    <tr>
                      <td>MPI-ESM-MR r1i1p1</td>
                      <td>2021</td>
                      <td>2038</td>
                      <td>2060</td>
                    </tr>
                    <tr>
                      <td>MRI-CGCM3 r1i1p1</td>
                      <td>2040</td>
                      <td>2052</td>
                      <td style={{ backgroundColor: "yellow" }}>2075</td>
                    </tr>
                    <tr>
                      <td>NorESM1-M r1i1p1</td>
                      <td>2033</td>
                      <td>2048</td>
                      <td style={{ backgroundColor: "yellow" }}>2073</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col>
                <p>
                  {" "}
                  <b>(b)</b> UKCP18 global ensemble
                </p>
                <Table striped size="sm">
                  <thead>
                    <tr>
                      <td>Member</td>
                      <td>1.5°</td>
                      <td>2°</td>
                      <td>3°</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>2020</td>
                      <td>2031</td>
                      <td>2049</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>2025</td>
                      <td>2036</td>
                      <td>2053</td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>2020</td>
                      <td>2030</td>
                      <td>2047</td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td>2019</td>
                      <td>2029</td>
                      <td>2046</td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>2023</td>
                      <td>2034</td>
                      <td>2052</td>
                    </tr>
                    <tr>
                      <td>06</td>
                      <td>2021</td>
                      <td>2031</td>
                      <td>2049</td>
                    </tr>
                    <tr>
                      <td>07</td>
                      <td>2025</td>
                      <td>2037</td>
                      <td>2054</td>
                    </tr>
                    <tr>
                      <td>08</td>
                      <td>2026</td>
                      <td>2038</td>
                      <td>2047</td>
                    </tr>
                    <tr>
                      <td>09</td>
                      <td>2022</td>
                      <td>2032</td>
                      <td>2047</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>2023</td>
                      <td>2033</td>
                      <td>2051</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>2018</td>
                      <td>2029</td>
                      <td>2048</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>2035</td>
                      <td>2045</td>
                      <td>2060</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>2023</td>
                      <td>2034</td>
                      <td>2052</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>2019</td>
                      <td>2030</td>
                      <td>2049</td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>2015</td>
                      <td>2029</td>
                      <td>2049</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
