import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AboutExplorer() {
  return (
    <Container className="about">
      <div>
        <h1>About the UKCORDEX Plot Explorer</h1>
        <p>
          This analysis and visualisation tool is designed to allow rapid exploration of the
          key structures of the model outputs in the UKCP18 projections and the
          EuroCORDEX ensembles, along with their driving models, for a large
          number of weather variables and derived indices of climate over the UK.
        </p>
        <p>
          Users can select climate indices, seasons and time periods of interest and can compare the various model outputs,
          produce maps of projections and historical biases in these indices, and quantify the dominant sources of variation and uncertainty within the projections.
          This enables users both to evaluate the outputs, and to choose
          appropriate subsets of model runs for use in their own applications. 
          For a suggested order of analyses, see the <Link to="/how-to-use">usage guide</Link>.
        </p>
        <p>
          The plots and underlying data are downloadable directly from the plot explorer.
        </p>
      </div>
    </Container>
  );
}
