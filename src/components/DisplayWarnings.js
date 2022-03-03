import { Alert, Container } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";

export default function DisplayWarnings({ warnings }) {
  return (
    <>
      <Container fluid style={{ marginTop: 20 }}>
        <Alert variant="danger">
          {" "}
          <Alert.Heading>
            Sorry! The following plots do not exist and so will not be
            downloaded:
          </Alert.Heading>
          {warnings.map((warning, i) => (
            <li key={i}>{warning}</li>
          ))}{" "}
          <hr />
          <p>
            For information on why these plots are not available, see{" "}
            <LinkContainer to="/plot-help">
              <Alert.Link>help with plots</Alert.Link>
            </LinkContainer>
          </p>
        </Alert>
      </Container>
    </>
  );
}
