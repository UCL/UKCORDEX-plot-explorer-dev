import { Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

export default function AboutExplorer() {
  return (
    <Container className="about">
      <div>
        <h1>About UKCORDEX Plot Explorer</h1>
        <p>
          This section will have a short summary of what the plot explorer is
          and a link to the
          <HashLink to="/how-to-use#">how-to guide</HashLink>
          for further information on how to use it.
        </p>
      </div>
    </Container>
  );
}
