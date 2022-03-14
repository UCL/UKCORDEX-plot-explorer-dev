import React from "react";
import { Container, Image } from "react-bootstrap";
import "../ExtraPages.css";

export default function TimeHelp() {
  return (
    <Container className="help">
      <div>
        <h1>Information on Time Periods</h1>
      </div>
      <br></br>
      {/* section about the data */}
      <div>
        <h5>Evaluation period</h5>
        <p>
          Model outputs are compared to HadUK-Grid observations during the
          evaluation period from January 1st 1989 - December 31st 2008. This
          period was chosen based on the availability of EuroCORDEX evaluation
          runs driven by ERA-Interim reanalysis, which are used to evaluate the
          performance of the RCMs in the absence of errors or biases inherited
          from the driving GCMs. Plots of model output during the evaluation
          period show biases with respect to observations for the same period
          from the HadUK-Grid dataset.
        </p>
      </div>
      <div>
        <h5>Future periods</h5>
        <p>
          Plots of changes in model climatology with respect to the baseline
          period (December 1st 1980 - November 30th 2010) are provided for the
          seven 30-year time periods described in Table 5.
        </p>
      </div>
      <div>
        <h5>Warming Levels</h5>
        <p>
          Plots of changes in model climatology with respect to the baseline
          period (December 1st 1980 -- November 30th 2010) are also provided for
          30-year periods centred on the years in which global mean surface
          temperature (GMST) reaches 1.5°C, 2°C and 3°C above pre-industrial
          levels in the driving GCM run. Area-weighted annual GMST was computed
          for each global model in the CMIP5-EC and UKCP18 60km ensembles on the
          native grid, then a 30-year rolling average calculated: the warming
          level is the first year in which each temperature threshold was
          exceeded by this rolling average. This is a slightly different
          approach to that used to compute warming levels for the IPCC's
          interactive atlas, where model output was first regridded to a
          2°-resolution grid, with the land and sea surfaces on the native grid
          mapped separately to the land and sea surfaces on the coarser grid
          before averaging; however, the warming levels calculated are within
          1-2 years of those produced by the IPCC method. Table 6 shows the
          warming levels computed for each global model.
        </p>
        <p>
          Output from the UKCP18 60km runs was not available prior to December
          1899, so the preindustrial average (1850-1900) could not be computed
          for these runs. In order to compute the warming levels, changes in the
          UKCP18 runs were first calculated with respect to the mean temperature
          during the first thirty years available (1900-1929). To account for
          the change in GMST between this period and the preindustrial period,
          the corresponding change was calculated from the HadGEM2-ES model
          output and added to the UKCP18 changes: an offset of 0.059°C. Each
          UKCP18 run therefore has the same mean change in GMST as HadGEM2-ES
          for the period 1899-1929, with the projections diverging from that
          point.
        </p>
        <p>
          Model climatologies for each run were computed by selecting a 30-year
          period centred on December 1st of the year in which the temperature
          was first exceeded by the driving model: for example, for any run
          driven by CNRM-CM5, the 1.5°C climatology was computed by averaging
          the seasonal time series of each index from December 1st 2016 to
          November 31st 2046. Data was only available up to November 31st 2080:
          therefore where the threshold was crossed later than 2065 (highlighted
          in yellow in the table), the model climatology was computed using the
          longest available symmetric period centred on the crossing time: for
          CNRM-CM5, this was the 26-year period from 2054--2080, and for
          NorESM1-M, the 14-year period from 2066-2080.
        </p>
        <Image
          fluid="true"
          src={`${process.env.PUBLIC_URL}"/content_images/warming-period-table.png"`}
          alt=""
        />
      </div>
    </Container>
  );
}
