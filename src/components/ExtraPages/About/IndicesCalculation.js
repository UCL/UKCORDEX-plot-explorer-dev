import { Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

export default function IndicesCalculation() {
  return (
    <Container className="about">
      <div>
        <h1>How the indices are calculated</h1>
        <p>
          Unless stated otherwise, a seasonal (annual) time series of each index is first
          computed from daily model output on the native grid, then all instances of 
          each time period (eg. all winters, all years) are averaged to obtain 
          a set of seasonal (annual) model climatologies.
          </p>
          <p>
          These seasonal climatologies are regridded onto a common 12km
          grid (OSGB) using area weighting, so that output from models on
          different grids can be compared directly. For regional climate model
          output (EuroCORDEX and UKCP18 12km runs), a land-sea mask is applied
          so that only cells with more than 50% land coverage
          are included; values in these land surface cells are regridded onto
          the UK land surface grid. For global climate model output (CMIP5 and
          UKCP18 60km runs), the low-resolution data is regridded directly onto
          the land surface 12km grid. 
          </p>
          <p>
          No bias correction has been carried out.
          </p>
          <p>
          To facilitate comparison between models that use different calendars,
          any indices that depend on the number of days in the season or year
          (for example, number of tropical nights tr or accumulated
          precipitation prcptot) are standardised by averaging over the number
          of days in the model output and multiplying by 90 (for seasonal
          indices) or 365 (for annual indices).
        </p>
        <p>
          See the <HashLink to="/indices-help#">indices page</HashLink> for
          details of how specific indices are calculated.
        </p>
      </div>
    </Container>
  );
}
