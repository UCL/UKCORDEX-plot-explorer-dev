import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AboutExplorer() {
  return (
    <Container className="about">
      <div>
        <h1>About the EuroCORDEX-UK Plot Explorer</h1>
        <p>
          This analysis and visualisation tool is designed to allow rapid exploration of the
          key structures of the model outputs in the <a href='https://www.metoffice.gov.uk/research/approach/collaboration/ukcp/about'>UKCP18 projections</a>{" "}
          and the <a href='https://www.euro-cordex.net/'>EuroCORDEX ensembles</a>{" "},
          along with their driving models, for a large number of weather variables and derived indices of climate over the UK.
          The plot explorer was developed under the <a href='https://github-pages.ucl.ac.uk/EuroCORDEX-UK-plot-explorer/#/about'>EuroCORDEX-UK project</a>.
        </p>
        <p>
          Users can select climate indices, seasons and time periods of interest and can compare the various model outputs,
          produce maps and boxplots of historical biases and projected changes in these indices, and quantify the dominant sources of variation and uncertainty within the projections.
          This enables users both to evaluate the outputs, and to choose
          appropriate subsets of model runs for use in their own applications. 
          A suggested order of analyses is given in the <Link to="/how-to-use">usage guide</Link>.
        </p>
        <p>
          The plots and underlying data are downloadable directly from the plot explorer.
        </p>
      </div>
    </Container>
  );
}
