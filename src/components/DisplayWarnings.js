import { Alert, Container } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";

export default function DisplayWarnings({ warnings }) {
  return (
    <>
      <Container fluid>
        <Alert variant="danger">
          {" "}
          <Alert.Heading style={{ fontSize: "1.1em" }}>
            Sorry! The following plots do not exist and so will not be
            downloaded:
          </Alert.Heading>
          {warnings.map((warning, i) => (
            <li key={i}>{warning}</li>
          ))}{" "}
          <hr />
          <p>
            Find more information on why these plots are not available{" "}
            <LinkContainer to="/missing-plots">
              <Alert.Link>here</Alert.Link>
            </LinkContainer>.
          </p>
        </Alert>
      </Container>
    </>
  );
}
