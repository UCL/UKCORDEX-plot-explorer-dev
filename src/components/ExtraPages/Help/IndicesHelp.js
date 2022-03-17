import React from "react";
import { Container, Table, Row, Col, Image, Nav } from "react-bootstrap";
import "../ExtraPages.css";
import "../HelpNav.css";
import Latex from "react-latex";
import { HashLink } from "react-router-hash-link";

function IndicesHelp() {
  // var Latex = require("react-latex");
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
                    Core Variables
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
                    Extreme Events
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/indices-help#impact"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Impact Related
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/indices-help#degree"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Degree Days and Seasons
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
            <br></br>
          </div>
          <p>
            This page describes the indices for which plots are available. The
            process used for index calculation is described{" "}
            <HashLink to="/indices-calculation#">here</HashLink>.
          </p>{" "}
          <br></br>
          {/* core vars table */}
          <Row className="indices">
            <h5 id="corevars">
              <u>Core Variables</u>
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
                    <td>clt</td>
                    <td>total cloud cover</td>
                    <td>%</td>
                  </tr>
                  <tr>
                    <td>hurs</td>
                    <td>Relative humidity at 1.5m</td>
                    <td>%</td>
                  </tr>
                  <tr>
                    <td>huss</td>
                    <td>Specific humidity at 1.5m</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>pr</td>
                    <td>Precipitation rate</td>
                    <td>mm/day</td>
                  </tr>
                  <tr>
                    <td>prsn</td>
                    <td>Snowfall rate</td>
                    <td>mm/day</td>
                  </tr>
                  <tr>
                    <td>psl</td>
                    <td>Sea level pressure</td>
                    <td>hPa</td>
                  </tr>
                  <tr>
                    <td>rls</td>
                    <td>Net surface long wave flux</td>
                    <td>
                      wm<sup>-2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>rss</td>
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
                    <td>tas</td>
                    <td>Mean daily near-surface air temperature</td>
                    <td>°C</td>
                  </tr>
                  <tr>
                    <td> sfcWind</td>
                    <td>Wind speed at 10m</td>
                    <td>
                      ms<sup>-1</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>snw</td>
                    <td>Lying snow</td>
                    <td>mm*</td>
                  </tr>
                  <tr>
                    <td>tasmax</td>
                    <td>Maximum daily near-surface air temperature</td>
                    <td>°C</td>
                  </tr>
                  <tr>
                    <td>tasmin</td>
                    <td>Minimum daily near-surface air temperature</td>
                    <td>°C</td>
                  </tr>
                  <tr>
                    <td>uas</td>
                    <td>Eastward wind at 10m </td>
                    <td>
                      ms<sup>-1</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>vas</td>
                    <td>Northward wind at 10m</td>
                    <td>
                      ms<sup>-1</sup>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <span>*mm of liquid water equivalent</span>
            </Col>
          </Row>
          {/* temperature */}
          <Row className="indices">
            <h5 id="temp">
              <u>Indices of temperature</u>
            </h5>
            <p className="foreword">
              In defining the following indices of temperature, let tas_ij be
              the daily mean temperature on day i in season j; the daily minimum
              and maximum temperature on day i in season j are denoted by
              tmin_ij and tmax_ij respectively.
            </p>
            <p className="contents">
              <b>Number of cold spell days</b> (csdi): Count the number of days
              in season j where tas_ij {"<"} 2°C for more than two consecutive
              days.
            </p>{" "}
            <p className="contents">
              <b>Number of heatwave days</b> (hwdi): Count the number of days in
              season j where tmax_ij {">"} t_1 and tmin_ij {">"} t_2 for two or
              more consecutive days, where t_1 and t_2 are thresholds defined
              for each region as in the table below. These thresholds are taken
              from the{" "}
              <a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/888668/Heatwave_plan_for_England_2020.pdf">
                {" "}
                Public Health England heatwave plan
              </a>
              .
              <Row>
                <div>
                  <p style={{ fontSize: "80%" }}>
                    <b>Table 4:</b> Thresholds{" "}
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
              <b>Maximum near-surface air temperature on the hottest day</b>{" "}
              (maxtmax): The highest daily temperature tmax_ij in each season j.{" "}
            </p>{" "}
            <p className="contents">
              <b>Minimum near-surface air temperature on the coldest day</b>{" "}
              (mintmin): The lowest daily temperature tmin_ij in each season j.{" "}
            </p>{" "}
            <p className="contents">
              <b>Maximum daily near-surface air temperature</b> (tasmax):{" "}
            </p>{" "}
            <p className="contents">
              <b>Minimum daily near-surface air temperature</b> (tasmin):{" "}
            </p>{" "}
            <p className="contents">
              <b>1st percentile of daily mean near-surface air temperatures</b>{" "}
              (tas01): This index is not computed by averaging a seasonal time
              series over the period of interest. Instead, the daily mean
              temperatures tas during the season of interest for all years in
              the selected time period are pooled, and the 1st percentile of the
              pooled seasonal temperatures is calculated.
            </p>{" "}
            <p className="contents">
              <b>99th percentile of daily mean near-surface air temperatures</b>{" "}
              (tas99): This index is not computed by averaging a seasonal time
              series over the period of interest. Instead, the daily mean
              temperatures tas during the season of interest for all years in
              the selected time period are pooled, and the 99th percentile of
              the pooled seasonal temperatures is calculated.{" "}
            </p>{" "}
            <p className="contents">
              <b>Number of cold days</b> (tmax10p): Let q_{10}(tmax_ir) be the
              c10th percentile of daily maximum temperatures in a five-day
              window centred on calendar day i in the reference period r
              (1980-2010). Count the number of days where tmax_ij {"<"} q_{10}
              (tmax_ir) for the season of interest j.{" "}
            </p>{" "}
            <p className="contents">
              <b>Number of hot days</b> (tmax90p): Let q_{90}(tmax_ir) be the
              90th percentile of daily maximum temperatures in a five-day window
              centred on calendar day i in the reference period r (1980-2010).
              Count the number of days where tmax_ij {">"} q_{90}(tmax_ir) for
              the season of interest j.
            </p>{" "}
            <p className="contents">
              <b>Number of cold nights</b> (tmin10p): Let q_{10}(tmin_ir) be the
              10th percentile of daily minimum temperatures in a five-day window
              centred on calendar day i in the reference period r (1980-2010).
              Count the number of days where tmin_ij {"<"} q_{10}(tmin_ir) for
              the season of interest j.
            </p>{" "}
            <p className="contents">
              <b>Number of warm nights</b> (tmin90p): Let q_{90}(tmin[ir]) be
              the 90th percentile of daily minimum temperatures in a five-day
              window centred on calendar day i in the reference period r
              (1980-2010). Count the number of days where tmin_ij {">"} q_{90}
              (tmin_ir) for the season of interest j.
            </p>
          </Row>
          {/* precipitation */}
          <Row className="indices">
            <h5 id="precip">
              <u>Indices of precipitation</u>
            </h5>
            <p className="foreword">
              In defining the following indices of precipitation, let pr_ij be
              the daily precipitation amount in mm on day i in period j, and let
              prc_ij be the daily precipitation amount arising from convective
              processes in mm on day i in period j. pr_ij geq 1 denotes the
              subset of the pr_ij for which pr_ij geq 1.
            </p>

            <p className="contents">
              <b>Accumulated precipitation</b> (prcptot): Sum of pr_ij geq 1 in
              season j.
            </p>
            <p className="contents">
              <b>Proportion of wet days</b> (fwd): The proportion of days for
              which pr_ij geq 1.
            </p>
            <p className="contents">
              <b>Daily rate of convective precipitation</b> (prc):{" "}
            </p>
            <p className="contents">
              <b>Proportion of rainfall due to convection</b> (prcprop): Let
              prc_ij be the daily precipitation amount due to convective
              rainfall on day i in period j. The proportion of total
              precipitation due to convective processes in period j is the sum
              of prc_ij geq 1 in period j divided by the total precipitation in
              period j, prcptot.
            </p>
            <p className="contents">
              <b>Proportion of wet days followed by a wet day</b> (pww): Where n
              is the total number of days in period j, and pr_ij {">"} 1 is an
              indicator function with value one if pr_ij {">"} 1, and zero
              otherwise. The complementary transition probability is P_j(wd) =
              1-P_j(ww)
              <Image
                fluid="true"
                width="30%"
                src={`${process.env.PUBLIC_URL}/content_images/pww_math.png`}
                alt=""
              />
            </p>
            <p className="contents">
              <b>Proportion of dry days followed by a dry day</b> (pdd): Where n
              is the total number of days in period j, and pr_ij {">"} 1 is an
              indicator function with value one if pr_ij {">"} 1, and zero
              otherwise. The complementary transition probability is P_j(dw) =
              1-P_j(dd)
              <Image
                fluid="true"
                width="30%"
                src={`${process.env.PUBLIC_URL}/content_images/pdd_math.png`}
                alt=""
              />
            </p>
            <p className="contents">
              <b>Maximum one-day precipitation</b> (rx1day): The maximum one-day
              precipitation for season j is max (pr_ij).
            </p>
            <p className="contents">
              <b>Maximum five-day precipitation</b> (rx5day): Let pr5_ij be the
              total precipitation amount for the five-day interval ending on day
              i in season j. The maximum five-day values for period j are
              max(pr5_ij).
            </p>
            <p className="contents">
              <b>
                Proportion of precipitation falling on days exceeding 95th
                percentile
              </b>{" "}
              (r95ptot): Let q_{95}(pr_r) be the 95th percentile of daily
              wet-day precipitation in the reference period r (1980-2010). The
              total precipitation exceeding the 95th percentile is the sum of
              pr_ij geq q_
              {95}(pr_r).
            </p>
            <p className="contents">
              <b>
                Proportion of precipitation falling on days exceeding 99th
                percentile
              </b>{" "}
              (r99ptot): Let q_{99}(pr_r) be the 99th percentile of daily
              wet-day precipitation in the reference period r (1980-2010). The
              total precipitation exceeding the 99th percentile is the sum of
              pr_ij geq q_
              {99}(pr_r).
            </p>
            <p className="contents">
              <b>Wet-day precipitation rate</b> (sdii): Mean of pr_ij geq 1 in
              season j.
            </p>
            <p className="contents">
              <b>Median length of dry spell</b> (dsmed): Count the median number
              of consecutive days where pr_ij {"<"} 1.
            </p>
            <p className="contents">
              <b>Maximum length of dry spell</b> (dsmax): Count the largest
              number of consecutive days where pr_ij {"<"} 1.
            </p>
            <p className="contents">
              <b>Median length of wet spell</b> (wsmed): Count the median number
              of consecutive days where pr_ij geq 1.
            </p>
            <p className="contents">
              <b>Maximum length of wet spell</b> (wsmax): Count the largest
              number of consecutive days where pr_ij geq 1.
            </p>
          </Row>
          {/* wind */}
          <Row className="indices">
            <h5 id="wind">
              <u>Indices of wind</u>
            </h5>
            <p className="foreword">
              In defining the following indices of wind speed, let swind be the
              mean daily wind speed on day i in season j, let maxwind be the
              maximum daily wind speed on day i in season j, and let maxgust be
              the maximum gust strength on day i in season j.
            </p>
            <p className="contents">
              <b>Maximum sustained wind speed</b> (maxsfcWindmax): The maximum
              sustained daily wind speed for season j is max(maxwind).
            </p>{" "}
            <p className="contents">
              <b>Maximum speed of wind gust</b> (maxwsgsmax): The maximum daily
              gust speed for season j is max(maxgust)
            </p>{" "}
            <p className="contents">
              <b>Number of calm days</b> (ncalm): The number of calm days in
              season j is the count of days where swind leq 2ms<sup>-1</sup>.
            </p>{" "}
            <p className="contents">
              <b>Number of windy days</b> (nwindy): The number of windy days in
              season j is the count of days where swind geq 10.8ms
              <sup>-1</sup>-.
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
              let max(idx_j) be the maximum daily value of some index idx_ij in
              each season j, and let max(idx_j) denote the set of all such
              maxima during the time period of interest: this set contains 30
              seasonal maxima for future periods, and 20 maxima for the
              evaluation period. A generalised extreme value distribution
              citep[GEV:][]Coles2001 is fitted to the seasonal maxima max(idx_j)
              at each grid cell, and the parameters of this distribution are
              used to calculate selected return periods (the expected number of
              years between occurrences of events of a given magnitude) and
              return levels (the magnitude of a once-in-x-years event).<br></br>{" "}
              Indices of extreme events are available for precipitation indices
              rx1day and rx5day, and for wind indices sfcWindmax and wsgsmax.
              For any of these indices, denoted here by the generic index 'idx',
              the following plots are available:
            </p>
            <p className="contents">
              <b>20-year return level of idx</b> (idxrl20):{" "}
            </p>{" "}
            <p className="contents">
              <b>50-year return level of idx</b> (idxrl50):{" "}
            </p>{" "}
            <p className="contents">
              <b>
                For the evaluation period, this is the 20-year return period of
                the observed idxrl20; for future time slices, it is the 20-year
                return level of idxrl20 computed over the the baseline period
                (1980-2010).
              </b>{" "}
              (idxrp20):{" "}
            </p>{" "}
            <p className="contents">
              <b>
                For the evaluation period, this is the 50-year return period of
                the observed idxrl50; for future time slices, it is the 50-year
                return level of idxrl50 computed over the the baseline period
                (1980-2010).
              </b>{" "}
              (idxrp50):{" "}
            </p>{" "}
            <p className="contents">
              <b>Location parameter of fitted GEV distribution</b> (idxloc):{" "}
            </p>{" "}
            <p className="contents">
              <b>Shape parameter of fitted GEV distribution</b> (idxshape):{" "}
            </p>
            <p className="contents">
              <b>Scale parameter of fitted GEV distribution</b> (idxscale):{" "}
            </p>
          </Row>
          {/* impact relevant */}
          <Row className="indices">
            <h5 id="impact">
              <u>Impact-relevant Indices</u>
            </h5>
            <p className="contents">
              <b>Soil moisture at depths of up to 1m</b> (mrso): Let mrso_ij be
              the total soil moisture at a depth of up to 1m for day i in period
              j. The mean soil moisture in season j is the average of mrso_ij in
              season j.
            </p>
            <p className="contents">
              <b>Number of dangerously hot days</b> (ndhi):{" "}
              <Latex displayMode={true}>
                Let T denote the daily maximum surface air temperature tasmaxij
                and R the relative humidity hursij for day i in period j. Then
                the heat index for day i in period j is HI_ij = c1 + c2T + c3R +
                c4TR + c5T2 + c6R2 + c7T2R + c8TR2 + c9T2R2 where the ci are
                constants as given in equation 1 of ?. The heat index is only
                valid for air temperatures above 20◦C and will be reported as NA
                when T ≤20◦C. The number of days in period j on which the heat
                index is dangerously high is given by the count of HIij ≥32◦C.
              </Latex>{" "}
            </p>
            <p className="contents">
              <b>Number of occurrences of drought</b> (ndrought): Drought
              occurrences will be the count of the number of occasions on which
              the monthly time series of spei6 falls below a threshold in the
              interval (-2, -1.5) in each season.
            </p>
            <p className="contents">
              <b>Potential evapotranspiration</b> (pet): PET is computed for
              each day i in season j using the REC: McGuinness-Bordne equation,
              where λ is a constant representing the latent heat of vaporisation
              and S(i) 0 is the extraterrestrial radiation on day i, estimated
              from the time of year and latitude. Seasonal PET time series are
              computed by averaging the daily values within season j.
              <Image
                fluid="true"
                width="30%"
                src={`${process.env.PUBLIC_URL}/content_images/pet_math.png`}
                alt=""
              />
            </p>
            <p className="contents">
              <b>6-month standardised precipitation index</b> (spi6): This index
              is computed in the same way as spei6, but using a six-month
              rolling average of prcptot rather than the climatic water balance.
            </p>
            <p className="contents">
              <b>6-month standardised precipitation-evapotranspiration index</b>{" "}
              (spei6): The climatic water balance is calculated for each month
              by subtracting the total PET in that month from the total
              accumulated precipitation prcptot, and computing a six-month
              rolling average. This six-month average water balance is fitted to
              a log-logistic distribution in order to transform the original
              values to standardised units. Seasonal time series of spei6 are
              computed by averaging the monthly values within each season.
            </p>
            <p className="contents">
              <b>Number of tropical nights ({">"}20°C)</b> (tr): the number of
              days in season j where tasmin_ij {">"} 20°C.
            </p>
          </Row>
          {/* degree days */}
          <Row className="indices">
            <h5 id="degree">
              <u>Degree-days and season lengths</u>
            </h5>
            <p className="foreword">
              Plots of these indices are only provided at annual frequency. Note
              that, unlike all other indices, the growing season length and
              degree-days are based on calendar years, rather than
              meteorological years.
            </p>
            <p className="contents">
              <b>Growing degree-days</b> (gdd):{" "}
              <Latex displayMode={true}>
                The number of growing degree-days in year y is ∑i max(0,tasiy
                -5.6).
              </Latex>{" "}
            </p>{" "}
            <p className="contents">
              <b>Cooling degree-days</b> (cdd):{" "}
              <Latex displayMode={true}>
                The number of cooling degree-days in year y is ∑i max(0,tasiy
                -22).
              </Latex>{" "}
            </p>{" "}
            <p className="contents">
              <b>Heating degree-days</b> (hdd):{" "}
              <Latex displayMode={true}>
                The number of heating degree-days in year y is ∑i max(0,15.5
                -tasiy).
              </Latex>{" "}
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default IndicesHelp;
