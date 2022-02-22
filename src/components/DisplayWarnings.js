import { Alert, Container } from "react-bootstrap";

export default function DisplayWarnings({ warnings }) {
  return (
    <>
      <Container fluid>
        {warnings.map((warning) => (
          <Alert variant="danger">
            {" "}
            <Alert.Heading>
              Sorry! The following plots do not exist and so will not be
              downloaded:
            </Alert.Heading>
            <li key={warning.id}>{warning}</li>
          </Alert>
        ))}{" "}
      </Container>
    </>
  );
}
