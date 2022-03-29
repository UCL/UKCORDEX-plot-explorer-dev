import { Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

export default function AboutExplorer() {
  return (
    <Container className="about">
      <div>
        <h1>About the UKCORDEX Plot Explorer</h1>
        <p>
          This analysis and visualisation tool is designed to allow rapid exploration of the UKCORDEX projections.
          Users can select climate indices, seasons and time periods of interest and can compare the various model outputs, 
          produce maps of projections and historical biases in these indices, and quantify the dominant sources of variation and uncertainty within the projections.
          The plots and underlying data are downloadable directly from the plot explorer.
        </p>
      </div>
    </Container>
  );
}
