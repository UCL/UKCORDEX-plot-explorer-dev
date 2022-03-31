import React from "react";
import { Container, Table, Row, Col, Image, Nav } from "react-bootstrap";
import "../ExtraPages.css";
import "../HelpNav.css";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { HashLink } from "react-router-hash-link";

function IndicesHelp() {
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
                <HashLink to="/indices-help#" className="page">
                  Indices
                </HashLink>
                <li>
                  {" "}
                  <HashLink
                    to="/indices-help#corevars"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Core variables
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/indices-help#temp"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Temperature
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/indices-help#precip"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Precipitation
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/indices-help#wind"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Wind
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/indices-help#extreme"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Extreme events
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/indices-help#impact"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Impact-relevant
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/indices-help#degree"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Degree-days & season lengths
                  </HashLink>
                </li>
              </ul>
            </Nav>{" "}
          </Container>
        </Col>
        {/* page contents */}
        <Col className="ml-5">
          <div>
            <h1>Available indices</h1>
          </div>
          <p>
            This page describes the indices for which plots are available.
            <br></br>
            The general process used for calculation of the index climatologies is described{" "}
            <HashLink to="/indices-calculation#">here</HashLink>.
          </p>{" "}
          <br></br>
          {/* core vars table */}
          <Row className="indices">
            <h5 id="corevars">
              <u>Core variables</u>
            </h5>
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
                  <tr>
                    <td>
                      <InlineMath math={"\\texttt{clt}"} />
                    </td>
                    <td>Total cloud cover</td>
                    <td>%</td>
                  </tr>
                  <tr>
                    <td>
                      <InlineMath math={"\\texttt{hurs}"} />
                    </td>
                    <td>Relative humidity at 1.5m</td>
                    <td>%</td>
                  </tr>
                  <tr>
                    <td>
                      <InlineMath math={"\\texttt{huss}"} />
                    </td>
                    <td>Specific humidity at 1.5m</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <InlineMath math={"\\texttt{pr}"} />
                    </td>
                    <td>Precipitation rate</td>
                    <td>mm/day</td>
                  </tr>
                  <tr>
                    <td>
                      <InlineMath math={"\\texttt{prsn}"} />
                    </td>
                    <td>Snowfall rate</td>
                    <td>mm/day</td>
                  </tr>
                  <tr>
                    <td>
                      <InlineMath math={"\\texttt{psl}"} />
                    </td>
                    <td>Sea level pressure</td>
                    <td>hPa</td>
                  </tr>
                  <tr>
                    <td>
                      <InlineMath math={"\\texttt{rls}"} />
                    </td>
                    <td>Net surface long wave flux</td>
                    <td>
                      wm<sup>-2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <InlineMath math={"\\texttt{rss}"} />
                    </td>
                    <td>Net surface short wave flux</td>
                    <td>
                      wm<sup>-2</sup>
                    </td>
                  </tr>
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
                  <tr>
                    <td>
                      <InlineMath math={"\\texttt{sfcWind}"} />
                    </td>
                    <td>Wind speed at 10m</td>
                    <td>
                      ms<sup>-1</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <InlineMath math={"\\texttt{snw}"} />
                    </td>
                    <td>Lying snow</td>
                    <td>
                      mm<sup>*</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <InlineMath math={"\\texttt{tas}"} />
                    </td>
                    <td>Daily mean air temperature at 1.5m</td>
                    <td>°C</td>
                  </tr>
                  <tr>
                    <td>
                      <InlineMath math={"\\texttt{tasmax}"} />
                    </td>
                    <td>Daily maximum air temperature at 1.5m</td>
                    <td>°C</td>
                  </tr>
                  <tr>
                    <td>
                      <InlineMath math={"\\texttt{tasmin}"} />
                    </td>
                    <td>Daily minimum air temperature at 1.5m</td>
                    <td>°C</td>
                  </tr>
                  <tr>
                    <td>
                      <InlineMath math={"\\texttt{uas}"} />
                    </td>
                    <td>Eastward wind at 10m </td>
                    <td>
                      ms<sup>-1</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <InlineMath math={"\\texttt{vas}"} />
                    </td>
                    <td>Northward wind at 10m</td>
                    <td>
                      ms<sup>-1</sup>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <span>
                <sup>*</sup>mm of liquid water equivalent
              </span>
            </Col>
          </Row>
          {/* temperature */}
          <Row className="indices">
            <h5 id="temp">
              <u>Indices of temperature</u>
            </h5>
            <p className="foreword">
              In defining the following indices of temperature, let{" "}
              <InlineMath math={"\\texttt{tas}_{ij}"} /> be the daily mean
              temperature on day <InlineMath math={"i"} /> in season{" "}
              <InlineMath math={"j"} />; the daily minimum and maximum
              temperature on day <InlineMath math={"i"} /> in season{" "}
              <InlineMath math={"j"} /> are denoted by{" "}
              <InlineMath math={"\\texttt{tasmin}_{ij}"} /> and{" "}
              <InlineMath math={"\\texttt{tasmax}_{ij}"} /> respectively.
            </p>
            <p className="contents">
              <b>Number of cold spell days</b>,{" "}
              <InlineMath math={"\\texttt{csdi}"} />: Count the number of days
              in season <InlineMath math={"j"} /> where{" "}
              <InlineMath math={"\\texttt{tasmin}_{ij} > 2^\\circ\\text{C}"} />{" "}
              for more than two consecutive days.
            </p>{" "}
            <p className="contents">
              <b>Number of heatwave days</b>,{" "}
              <InlineMath math={"\\texttt{hwdi}"} />: Count the number of days
              in season <InlineMath math={"j"} /> where{" "}
              <InlineMath math={"\\texttt{tasmax}_{ij} > t_1"} /> and{" "}
              <InlineMath math={"\\texttt{tasmin}_{ij} > t_2"} /> for two or
              more consecutive days, where <InlineMath math={"t_1"} /> and{" "}
              <InlineMath math={"t_2"} /> are thresholds defined for each region
              as in the table below. These thresholds are taken from the{" "}
              <a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/888668/Heatwave_plan_for_England_2020.pdf">
                {" "}
                Public Health England heatwave plan
              </a>
              .
              <Row>
                <div>
                  <p style={{ fontSize: "80%" }}>
                    <b>Table 4:</b>, Thresholds{" "}
                    <i>
                      t<sub>1</sub>
                    </i>{" "}
                    (daytime temperature) and{" "}
                    <i>
                      t<sub>2</sub>
                    </i>{" "}
                    (nighttime temperature) in °C used by Public Health England
                    to define a heatwave in each of the administrative regions
                    of the UK.
                  </p>
                </div>
                <Col>
                  <Table striped size="sm">
                    <thead>
                      <tr>
                        <td>Region</td>
                        <td>
                          <i>
                            t<sub>1</sub>
                          </i>
                        </td>
                        <td>
                          <i>
                            t<sub>2</sub>
                          </i>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>London</td>
                        <td>32</td>
                        <td>18</td>
                      </tr>
                      <tr>
                        <td>South East England</td>
                        <td>31</td>
                        <td>16</td>
                      </tr>
                      <tr>
                        <td>South West England</td>
                        <td>30</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>East of England</td>
                        <td>30</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>West Midlands</td>
                        <td>30</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>East Midlands</td>
                        <td>30</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>North West England</td>
                        <td>30</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>Yorkshire and Humber</td>
                        <td>29</td>
                        <td>15</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col>
                  <Table striped size="sm">
                    <thead>
                      <tr>
                        <td>Region</td>
                        <td>
                          <i>
                            t<sub>1</sub>
                          </i>
                        </td>
                        <td>
                          <i>
                            t<sub>2</sub>
                          </i>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>North East England</td>
                        <td>28</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>Isle of Man</td>
                        <td>30</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>Channel Islands</td>
                        <td>30</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>Wales</td>
                        <td>30</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>East Scotland</td>
                        <td>28</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>West Scotland</td>
                        <td>28</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>North Scotland</td>
                        <td>28</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>Northern Ireland</td>
                        <td>28</td>
                        <td>15</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </p>{" "}
            <p className="contents">
              <b>Maximum near-surface air temperature on the hottest day</b>,{" "}
              <InlineMath math={"\\texttt{maxtmax}"} />: The highest daily
              temperature <InlineMath math={"\\texttt{tasmax}_{ij}"} /> in each
              season <InlineMath math={"j"} />.{" "}
            </p>{" "}
            <p className="contents">
              <b>Minimum near-surface air temperature on the coldest day</b>,{" "}
              <InlineMath math={"\\texttt{mintmin}"} />: The lowest daily
              temperature <InlineMath math={"\\texttt{tasmin}_{ij}"} /> in each
              season <InlineMath math={"j"} />.{" "}
            </p>{" "}
            <p className="contents">
              <b>1st percentile of daily mean near-surface air temperatures</b>,{" "}
              <InlineMath math={"\\texttt{tas01}"} />: This index is not
              computed by averaging a seasonal time series over the period of
              interest. Instead, the daily mean temperatures tas during the
              season of interest for all years in the selected time period are
              pooled, and the 1st percentile of the pooled seasonal temperatures
              is calculated.
            </p>{" "}
            <p className="contents">
              <b>99th percentile of daily mean near-surface air temperatures</b>
              , <InlineMath math={"\\texttt{tas99}"} />: This index is not
              computed by averaging a seasonal time series over the period of
              interest. Instead, the daily mean temperatures tas during the
              season of interest for all years in the selected time period are
              pooled, and the 99th percentile of the pooled seasonal
              temperatures is calculated.{" "}
            </p>{" "}
            <p className="contents">
              <b>Number of cold days</b>,{" "}
              <InlineMath math={"\\texttt{tmax10p}"} />: Let{" "}
              <InlineMath math={"q_{10}(\\texttt{tasmax}_{ir})"} /> be the 10th
              percentile of daily maximum temperatures in a five-day window
              centred on calendar day <InlineMath math={"j"} /> in the reference
              period <InlineMath math={"r"} /> (1980-2010). Count the number of
              days where{" "}
              <InlineMath
                math={"\\texttt{tasmax}_{ij} < q_{10}(\\texttt{tasmax}_{ir})"}
              />{" "}
              for the season of interest <InlineMath math={"j"} />.
            </p>{" "}
            <p className="contents">
              <b>Number of hot days</b>,{" "}
              <InlineMath math={"\\texttt{tmax90p}"} />: Let{" "}
              <InlineMath math={"q_{90}(\\texttt{tasmax}_{ir})"} /> be the 90th
              percentile of daily maximum temperatures in a five-day window
              centred on calendar day <InlineMath math={"j"} /> in the reference
              period <InlineMath math={"r"} /> (1980-2010). Count the number of
              days where{" "}
              <InlineMath
                math={"\\texttt{tasmax}_{ij} > q_{90}(\\texttt{tasmax}_{ir})"}
              />{" "}
              for the season of interest <InlineMath math={"j"} />.
            </p>{" "}
            <p className="contents">
              <b>Number of cold nights</b>,{" "}
              <InlineMath math={"\\texttt{tmin10p}"} />: Let{" "}
              <InlineMath math={"q_{10}(\\texttt{tasmin}_{ir})"} /> be the 10th
              percentile of daily maximum temperatures in a five-day window
              centred on calendar day <InlineMath math={"j"} /> in the reference
              period <InlineMath math={"r"} /> (1980-2010). Count the number of
              days where{" "}
              <InlineMath
                math={"\\texttt{tasmin}_{ij} < q_{10}(\\texttt{tasmin}_{ir})"}
              />{" "}
              for the season of interest <InlineMath math={"j"} />.
            </p>{" "}
            <p className="contents">
              <b>Number of warm nights</b>,{" "}
              <InlineMath math={"\\texttt{tmin90p}"} />: Let{" "}
              <InlineMath math={"q_{90}(\\texttt{tasmin}_{ir})"} /> be the 90th
              percentile of daily maximum temperatures in a five-day window
              centred on calendar day <InlineMath math={"j"} /> in the reference
              period <InlineMath math={"r"} /> (1980-2010). Count the number of
              days where{" "}
              <InlineMath
                math={"\\texttt{tasmin}_{ij} > q_{90}(\\texttt{tasmin}_{ir})"}
              />{" "}
              for the season of interest <InlineMath math={"j"} />.
            </p>
          </Row>
          {/* precipitation */}
          <Row className="indices">
            <h5 id="precip">
              <u>Indices of precipitation</u>
            </h5>
            <p className="foreword">
              In defining the following indices of precipitation, let{" "}
              <InlineMath math={"\\texttt{pr}_{ij}"} /> be the daily
              precipitation amount in mm on day <InlineMath math={"i"} /> in
              period <InlineMath math={"\\texttt{prc}_{ij}"} /> be the daily
              precipitation amount arising from convective processes in mm on
              day <InlineMath math={"i"} /> in period <InlineMath math={"j"} />.{" "}
              <InlineMath
                math={"\\lbrace \\texttt{pr}_{ij} \\geq 1 \\rbrace"}
              />{" "}
              denotes the subset of the{" "}
              <InlineMath math={"\\lbrace \\texttt{pr}_{ij} \\rbrace"} /> for
              which <InlineMath math={"\\texttt{pr}_{ij} \\geq 1"} />.
            </p>
            <p className="contents">
              <b>Accumulated precipitation</b>,{" "}
              <InlineMath math={"\\texttt{prcptot}"} />: The sum of{" "}
              <InlineMath
                math={"\\lbrace \\texttt{pr}_{ij} \\geq 1 \\rbrace"}
              />{" "}
              in season <InlineMath math={"j"} />.
            </p>
            <p className="contents">
              <b>Proportion of wet days</b>,{" "}
              <InlineMath math={"\\texttt{fwd}"} />: The proportion of days for
              which <InlineMath math={"\\texttt{pr}_{ij} \\geq 1"} />.
            </p>
            <p className="contents">
              <b>Proportion of rainfall due to convection</b>,{" "}
              <InlineMath math={"\\texttt{prcprop}"} />: The proportion of total
              precipitation due to convective processes in period{" "}
              <InlineMath math={"j"} /> is the sum of{" "}
              <InlineMath math={"\\lbrace \\texttt{pr}_{ij} \\geq 1\\rbrace"} />{" "}
              in period <InlineMath math={"j"} /> divided by the total
              precipitation in period <InlineMath math={"j"} />,{" "}
              <InlineMath math={"\\texttt{prcptot}"} />.
            </p>
            <p className="contents">
              <b>Proportion of wet days followed by a wet day</b>,{" "}
              <InlineMath math={"\\texttt{pww}"} />: This is
              <br></br>
              <Image
                fluid="true"
                width="30%"
                src={`${process.env.PUBLIC_URL}/content_images/pww_math.png`}
                alt=""
              />
              <br></br>
              where <InlineMath math={"n_j"} /> is the total number of days in
              period <InlineMath math={"j"} />, and{" "}
              <InlineMath
                math={"1_{\\lbrace \\texttt{pr}_{i,j} \\geq 1\\rbrace}"}
              />
              an indicator function with value one if{" "}
              <InlineMath math={"\\texttt{pr}_{ij} \\geq 1"} />, and zero
              otherwise.
            </p>
            <p className="contents">
              <b>Proportion of dry days followed by a dry day</b>,{" "}
              <InlineMath math={"\\texttt{pdd}"} />: This is
              <br></br>
              <Image
                fluid="true"
                width="30%"
                src={`${process.env.PUBLIC_URL}/content_images/pdd_math.png`}
                alt=""
              />
              <br></br>
              where <InlineMath math={"n_j"} /> is the total number of days in
              period <InlineMath math={"j"} />, and{" "}
              <InlineMath
                math={"1_{\\lbrace \\texttt{pr}_{i,j} \\lt 1\\rbrace}"}
              />
              is an indicator function with value one if{" "}
              <InlineMath math={"\\texttt{pr}_{ij} \\lt 1"} />, and zero
              otherwise.
            </p>
            <p className="contents">
              <b>Maximum one-day precipitation</b>,{" "}
              <InlineMath math={"\\texttt{rx1day}"} />: The maximum one-day
              precipitation for season <InlineMath math={"j"} /> is{" "}
              <InlineMath math={"\\max(\\texttt{pr}_{ij})"} />.
            </p>
            <p className="contents">
              <b>Maximum five-day precipitation</b>,{" "}
              <InlineMath math={"\\texttt{rx5day}"} />: Let{" "}
              <InlineMath math={"\\texttt{pr5}_{ij}"} /> be the total
              precipitation amount for the five-day interval ending on day{" "}
              <InlineMath math={"i"} /> in season <InlineMath math={"j"} />. The
              maximum five-day values for period <InlineMath math={"j"} /> are{" "}
              <InlineMath math={"\\max(\\texttt{pr5}_{ij})"} />.
            </p>
            <p className="contents">
              <b>
                Proportion of precipitation falling on days exceeding 95th
                percentile
              </b>
              , <InlineMath math={"\\texttt{r95ptot}"} />: Let{" "}
              <InlineMath math={"q_{95}(\\texttt{pr}_{rj})"} /> be the 95th
              percentile of daily wet-day precipitation during all seasons{" "}
              <InlineMath math={"j"} /> (eg. during all winters) in the
              reference period <InlineMath math={"r"} /> (1980-2010). The proportion of the total
              precipitation falling on days exceeding the 95th percentile in season{" "}
              <InlineMath math={"j"} /> is the sum of{" "}
              <InlineMath
                math={"\\texttt{pr}_{ij} \\geq q_{95}(\\texttt{pr}_{r})"}
              />{" "}
              divided by <InlineMath math={"\\texttt{prcptot}"} /> for the same period.
            </p>
            <p className="contents">
              <b>
                Proportion of precipitation falling on days exceeding 99th
                percentile
              </b>
              , <InlineMath math={"\\texttt{r99ptot}"} />: Let{" "}
              <InlineMath math={"q_{99}(\\texttt{pr}_{rj})"} /> be the 99th
              percentile of daily wet-day precipitation during all seasons{" "}
              <InlineMath math={"j"} /> (eg. during all winters) in the
              reference period <InlineMath math={"r"} /> (1980-2010). The proportion of the total
              precipitation exceeding the 99th percentile in season{" "}
              <InlineMath math={"j"} /> is the sum of{" "}
              <InlineMath
                math={"\\texttt{pr}_{ij} \\geq q_{99}(\\texttt{pr}_{r})"}
              />{" "}
              divided by <InlineMath math={"\\texttt{prcptot}"} /> for the same period.
            </p>
            <p className="contents">
              <b>Simple daily precipitation intensity index </b>,{" "}
              <InlineMath math={"\\texttt{sdii}"} />: The mean of{" "}
              <InlineMath
                math={"\\lbrace \\texttt{pr}_{ij} \\geq 1 \\rbrace"}
              />{" "}
              in season <InlineMath math={"j"} />. Also known as the wet-day
              precipitation rate.
            </p>
            <p className="contents">
              <b>Median length of dry spell</b>,{" "}
              <InlineMath math={"\\texttt{dsmed}"} />: Count the median number
              of consecutive days in season <InlineMath math={"j"} /> where{" "}
              <InlineMath math={"\\lbrace \\texttt{pr}_{ij} \\lt 1 \\rbrace"} />
              . Dry spells are assumed to occur in the season in which they
              finish.
            </p>
            <p className="contents">
              <b>Maximum length of dry spell</b>,{" "}
              <InlineMath math={"\\texttt{dsmax}"} />: Count the largest number
              of consecutive days in season <InlineMath math={"j"} /> where{" "}
              <InlineMath math={"\\lbrace \\texttt{pr}_{ij} \\lt 1 \\rbrace"} />
              . Dry spells are assumed to occur in the season in which they
              finish.
            </p>
            <p className="contents">
              <b>Median length of wet spell</b>,{" "}
              <InlineMath math={"\\texttt{wsmed}"} />: Count the median number
              of consecutive days in season <InlineMath math={"j"} /> where{" "}
              <InlineMath
                math={"\\lbrace \\texttt{pr}_{ij} \\geq 1 \\rbrace"}
              />
              . Wet spells are assumed to occur in the season in which they
              finish.
            </p>
            <p className="contents">
              <b>Maximum length of wet spell</b>,{" "}
              <InlineMath math={"\\texttt{wsmax}"} />: Count the largest number
              of consecutive days in season <InlineMath math={"j"} /> where{" "}
              <InlineMath
                math={"\\lbrace \\texttt{pr}_{ij} \\geq 1 \\rbrace"}
              />
              . Wet spells are assumed to occur in the season in which they
              finish.
            </p>
          </Row>
          {/* wind */}
          <Row className="indices">
            <h5 id="wind">
              <u>Indices of wind</u>
            </h5>
            <p className="foreword">
              In defining the following indices of wind speed, let{" "}
              <InlineMath math={"\\texttt{sfcWind}_{ij}"} /> be the mean daily
              wind speed on day <InlineMath math={"i"} /> in season{" "}
              <InlineMath math={"j"} />, let{" "}
              <InlineMath math={"\\texttt{sfcWindmax}_{ij}"} /> be the maximum
              daily wind speed on day <InlineMath math={"i"} /> in season{" "}
              <InlineMath math={"j"} />, and let{" "}
              <InlineMath math={"\\texttt{wsgsmax}_{ij}"} /> be the maximum gust
              strength on day <InlineMath math={"i"} /> in season{" "}
              <InlineMath math={"j"} />.
            </p>
            <p className="contents">
              <b>Maximum sustained wind speed</b>,{" "}
              <InlineMath math={"\\texttt{maxsfcWindmax}"} />: The maximum
              sustained daily wind speed for season <InlineMath math={"j"} /> is{" "}
              <InlineMath math={"\\max(\\texttt{sfcWindmax}_{ij})"} />.
            </p>{" "}
            <p className="contents">
              <b>Maximum speed of wind gust</b>,{" "}
              <InlineMath math={"\\texttt{maxwsgsmax}"} />: The maximum daily
              gust speed for season <InlineMath math={"j"} /> is{" "}
              <InlineMath math={"\\max(\\texttt{wsgsmax}_{ij})"} />.
            </p>{" "}
            <p className="contents">
              <b>Number of calm days</b>,{" "}
              <InlineMath math={"\\texttt{ncalm}"} />: The number of calm days
              in season <InlineMath math={"j"} /> is the count of days where{" "}
              <InlineMath math={"\\texttt{sfcWind}_{ij} \\leq 2ms^{-1}"} />.
            </p>{" "}
            <p className="contents">
              <b>Number of windy days</b>,{" "}
              <InlineMath math={"\\texttt{nwindy}"} />: The number of windy days
              in season <InlineMath math={"j"} /> is the count of days where{" "}
              <InlineMath math={"\\texttt{sfcWind}_{ij} \\geq 10.8ms^{-1}"} />.
            </p>
          </Row>
          {/* extreme events */}
          <Row className="indices">
            <h5 id="extreme">
              <u>Indices of extremes</u>
            </h5>
            <p className="foreword">
              Indices of extreme wind and precipitation are not calculated per
              season and then averaged over the selected time period. Instead,
              let{" "}
              <InlineMath
                math={"\\lbrace\\max_j(\\texttt{idx}_{ij})\\rbrace"}
              />{" "}
              denote the set of seasonal maxima of some index{" "}
              <InlineMath math={"\\texttt{idx}_{ij}"} /> during the time period
              of interest: this set contains 30 seasonal maxima for future
              periods, and 20 maxima for the evaluation period. A generalised
              extreme value distribution (GEV;{" "}
              <a href="https://link.springer.com/book/10.1007/978-1-4471-3675-0">
                Coles, 2001
              </a>
              ) is fitted to the seasonal maxima{" "}
              <InlineMath
                math={"\\lbrace\\max_j(\\texttt{idx}_{ij})\\rbrace"}
              />{" "}
              at each grid cell, and the parameters of this distribution are
              used to calculate selected return levels (the magnitude of a
              once-in-
              <InlineMath math={"x"} />
              -years event) and return periods (the expected number of years
              between occurrences of events of a given magnitude).
              <br></br>
              <br></br>
              Fitted parameters, return levels and return periods have been
              calculated for seasonal precipitation maxima{" "}
              <InlineMath math={"\\texttt{rx1day}"} /> and{" "}
              <InlineMath math={"\\texttt{rx5day}"} />, and for seasonal
              windspeed maxima <InlineMath math={"\\texttt{maxsfcWindmax}"} />{" "}
              and <InlineMath math={"\\texttt{maxwsgsmax}"} />. For any of these
              indices, denoted here by the generic index{" "}
              <InlineMath math={"\\texttt{idx}"} />, the following plots are
              available:
            </p>
            <p className="contents">
              <InlineMath math={"\\texttt{idxrl20:}"} /> 20-year return level
              (magnitude of a once-in-20-years event) of{" "}
              <InlineMath math={"\\texttt{idx}"} />.
            </p>{" "}
            <p className="contents">
              <InlineMath math={"\\texttt{idxrl50:}"} /> 50-year return level
              (magnitude of a once-in-20-years event) of{" "}
              <InlineMath math={"\\texttt{idx}"} />.
            </p>{" "}
            <p className="contents">
              <InlineMath math={"\\texttt{idxrp20:}"} /> The 20-year return
              period of the 20-year return level{" "}
              <InlineMath math={"\\texttt{idxrl20}"} /> computed over the the
              baseline period (1980-2010). This index is only available for
              future time periods.
            </p>{" "}
            <p className="contents">
              <InlineMath math={"\\texttt{idxrp50:}"} /> The 50-year return
              period of the 50-year return level{" "}
              <InlineMath math={"\\texttt{idxrl50}"} /> computed over the the
              baseline period (1980-2010). This index is only available for
              future time periods.
            </p>{" "}
            <p className="contents">
              <InlineMath math={"\\texttt{idxloc:}"} /> Location parameter of
              fitted GEV distribution.
            </p>{" "}
            <p className="contents">
              <InlineMath math={"\\texttt{idxshape:}"} /> Shape parameter of
              fitted GEV distribution.
            </p>{" "}
            <p className="contents">
              <InlineMath math={"\\texttt{idxscale:}"} /> Scale parameter of
              fitted GEV distribution.
            </p>{" "}
          </Row>
          {/* impact relevant */}
          <Row className="indices">
            <h5 id="impact">
              <u>Impact-relevant indices</u>
            </h5>
            <p className="contents">
              <b>Soil moisture at depths of up to 1m</b>,{" "}
              <InlineMath math={"\\texttt{mrso}"} />: Let{" "}
              <InlineMath math={"\\texttt{mrso}_{ij}"} /> be the total soil
              moisture at a depth of up to 1m for day <InlineMath math={"i"} />{" "}
              in period <InlineMath math={"j"} />. The mean soil moisture in
              season j is the average of{" "}
              <InlineMath math={"\\texttt{mrso}_{ij}"} /> in season{" "}
              <InlineMath math={"j"} />.
            </p>
            <p className="contents">
              <b>Number of dangerously hot days</b>,{" "}
              <InlineMath math={"\\texttt{ndhi}"} />: Let{" "}
              <InlineMath math={"T"} /> denote the daily maximum surface air
              temperature <InlineMath math={"\\texttt{tasmax}_{ij}"} /> and{" "}
              <InlineMath math={"R"} /> the relative humidity{" "}
              <InlineMath math={"\\texttt{hurs}_{ij}"} /> for day{" "}
              <InlineMath math={"i"} /> in period <InlineMath math={"j"} />.
              Then the heat index for day <InlineMath math={"i"} /> in period{" "}
              <InlineMath math={"j"} /> is
              <BlockMath
                math={
                  "\\texttt{HI}_{ij} = c_1 + c_2T + c_3 R + c_4TR + c_5 T^2 + c_6R^2 + c_7T^2R + c_8TR^2 + c_9 T^2R^2"
                }
              />
              where the <InlineMath math={"\\lbrace c_i\\rbrace"} /> are
              constants as given in equation 1 of{" "}
              <a href="https://link.springer.com/article/10.1007/s00484-011-0453-2">
                Blazejczyk et al (2012)
              </a>
              . The heat index is only valid for air temperatures above{" "}
              <InlineMath math={"20^\\circ\\text{C}"} /> and will be reported as
              NA when{" "}
              <InlineMath
                math={"\\texttt{tasmax}_{ij} \\leq 20^\\circ\\text{C}"}
              />
              . <br></br>The number of days in period j on which the heat index
              is dangerously high is given by the count of{" "}
              <InlineMath math={"\\texttt{HI}_{ij} \\geq 32^\\circ\\text{C}"} />
              .
            </p>
            <p className="contents">
              <b>Potential evapotranspiration</b>,{" "}
              <InlineMath math={"\\texttt{pet}"} />: PET is computed for each
              day <InlineMath math={"i"} /> in season <InlineMath math={"j"} />{" "}
              using a version of the McGuinness-Bordne equation calibrated to
              the UK climate (
              <a href="https://essd.copernicus.org/articles/10/951/2018/">
                Tanguy et al, 2017
              </a>
              ):
              <BlockMath
                math={
                  "\\texttt{PET}_{ij} = \\frac{1}{\\lambda}S_0^{(i)} \\Bigg(\\frac{\\texttt{tas}_{ij} + 5}{100}\\Bigg),"
                }
              />
              where <InlineMath math={"\\lambda"} /> is a constant representing
              the latent heat of vaporisation and{" "}
              <InlineMath math={"S_0^{(i)}"} /> is the extraterrestrial
              radiation on calendar day <InlineMath math={"i"} />, estimated
              from the time of year and latitude. Seasonal time series of PET
              are computed by averaging the daily values within season{" "}
              <InlineMath math={"j"} />.
            </p>
            <p className="contents">
              <b>6-month standardised precipitation-evapotranspiration index</b>
              , <InlineMath math={"\\texttt{spei6}"} />: The climatic water
              balance is calculated for each month by subtracting the total PET
              in that month from the total accumulated precipitation{" "}
              <InlineMath math={"\\texttt{prcptot}"} />, and computing a
              six-month rolling average. This six-month average water balance is
              fitted to a log-logistic distribution in order to transform the
              original values to standardised units (
              <a href="https://journals.ametsoc.org/view/journals/clim/23/7/2009jcli2909.1.xml">
                Vicente-Serrano et al, 2010
              </a>
              ). Seasonal time series of <InlineMath math={"\\texttt{spei6}"} />{" "}
              are computed by averaging the monthly values within each season.
            </p>
            <p className="contents">
              <b>6-month standardised precipitation index</b>,{" "}
              <InlineMath math={"\\texttt{spi6}"} />: This index is computed in
              the same way as <InlineMath math={"\\texttt{spei6}"} />, but using
              a six-month rolling average of{" "}
              <InlineMath math={"\\texttt{prcptot}"} /> rather than the climatic
              water balance.
            </p>
            <p className="contents">
              <b>Number of occurrences of drought</b>,{" "}
              <InlineMath math={"\\texttt{ndrought}"} />: Drought occurrences
              will be the count of the number of occasions in each season on
              which the monthly time series of{" "}
              <InlineMath math={"\\texttt{spei6}"} /> falls below a regional
              threshold in the interval (-2, -1.5) (
              <a href="https://www.sciencedirect.com/science/article/pii/S0308521X18310643">
                Parsons et al, 2019
              </a>
              ).
            </p>

            <p className="contents">
              <b>Number of tropical nights</b>,{" "}
              <InlineMath math={"\\texttt{tr}"} />: the number of days in season{" "}
              <InlineMath math={"j"} /> where{" "}
              <InlineMath math={"\\texttt{tasmin}_{ij} > 20^\\circ\\text{C}"} />
              .
            </p>
          </Row>
          {/* degree days */}
          <Row className="indices">
            <h5 id="degree">
              <u>Degree-days and season lengths</u>
            </h5>
            <p className="foreword">
              In defining the following indices, let{" "}
              <InlineMath math={"\\texttt{tas}_{iy}"} /> be the daily mean
              temperature on day <InlineMath math={"i"} /> in year{" "}
              <InlineMath math={"y"} />.<br></br>
              Plots of these indices are only provided at annual frequency. Note
              that, unlike all other indices, the growing season length and
              degree-days are based on calendar years, rather than
              meteorological years.
            </p>
            <p className="contents">
              <b>Growing season length</b>,{" "}
              <InlineMath math={"\\texttt{gsl}"} />: The growing season length
              for year <InlineMath math={"y"} /> is the count of the number of
              days between the first occurrence of at least six consecutive days
              where{" "}
              <InlineMath
                math={"\\texttt{tas}_{iy} \\gt 5.6^\\circ\\text{C}"}
              />{" "}
              and the first occurrence after 1 July of at least six consecutive
              days where{" "}
              <InlineMath
                math={"\\texttt{tas}_{iy} \\lt 5.6^\\circ\\text{C}"}
              />
              .
            </p>{" "}
            <p className="contents">
              <b>Growing degree-days</b>, <InlineMath math={"\\texttt{gdd}"} />:
              The number of growing degree-days in year{" "}
              <InlineMath math={"y"} /> is{" "}
              <InlineMath math={"\\sum_i \\max(0, \\texttt{tas}_{iy} - 5.6)"} />
              .
            </p>{" "}
            <p className="contents">
              <b>Cooling degree-days</b>, <InlineMath math={"\\texttt{cdd}"} />:
              The number of cooling degree-days in year{" "}
              <InlineMath math={"y"} /> is{" "}
              <InlineMath math={"\\sum_i \\max(0, \\texttt{tas}_{iy} - 22)"} />.
            </p>{" "}
            <p className="contents">
              <b>Heating degree-days</b>, <InlineMath math={"\\texttt{hdd}"} />:
              The number of heating degree-days in year{" "}
              <InlineMath math={"y"} /> is{" "}
              <InlineMath
                math={"\\sum_i \\max(0, 15.5 - \\texttt{tas}_{iy})"}
              />
              .
            </p>{" "}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default IndicesHelp;
