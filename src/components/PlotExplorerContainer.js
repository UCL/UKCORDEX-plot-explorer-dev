import React, { useState, createContext } from "react";
import Container from "react-bootstrap/Container";
import { Alert, Row, Col } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import DownloadPlotsButton from "./DownloadButton";
import FigureRow from "./FigureRow";
import OptionsRow from "./OptionsRow";
import "./PlotExplorerContainer.css";
import DownloadDataButton from "./DownloadDataButton";

export const PlotContext = createContext();

function PlotExplorerRow() {
  /* This is the entry point to the main page. It handles state passing from
  user selected choices in OptionsRow to the array of plots displayed by
  FigureRow.
  */

  // Handles state for the different choice types the user has to make
  const [plotvars, setPlotvars] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [periods, setPeriods] = useState([]);
  const [plottypes, setPlottypes] = useState([]);
  const [regions, setRegion] = useState([]);

  return (
    <Container fluid>
      <Alert variant="info" className="intro">
        <p>
          To start, select one of each of the following parameters. Your
          graph(s) will be shown when at least one of each parameter has been
          selected. For information on the data, plots or indices, see our help
          pages. To clear all of your selections, refresh the page. <br></br>
          Each dropdown also allows as-you-type filtering.
        </p>
      </Alert>

      <OptionsRow
        setPlotvars={setPlotvars}
        setSeasons={setSeasons}
        setPeriods={setPeriods}
        setPlottypes={setPlottypes}
        setRegion={setRegion}
      />
      <Row>
        <Col xs={2} className="ml-3 position-fixed">
          <Stack gap={1}>
            <Container>
              {/* Conditionally render Download button if at least one of each variable is selected */}
              {plottypes.length +
                plotvars.length +
                seasons.length +
                periods.length +
                regions.length >=
                5 && (
                <DownloadPlotsButton
                  plotvars={plotvars}
                  seasons={seasons}
                  periods={periods}
                  plottypes={plottypes}
                />
              )}
            </Container>
            <Container>
              {/* Conditionally render Download button if at least one of each variable is selected */}
              {plottypes.length +
                plotvars.length +
                seasons.length +
                periods.length +
                regions.length >=
                5 && (
                <DownloadDataButton
                  plotvars={plotvars}
                  seasons={seasons}
                  periods={periods}
                  plottypes={plottypes}
                />
              )}
            </Container>
          </Stack>
        </Col>
        <Col lg={{ span: 14, offset: 1 }} md={{ span: 14, offset: 1 }}>
          <FigureRow
            plotvars={plotvars}
            seasons={seasons}
            periods={periods}
            plottypes={plottypes}
            setRegion={setRegion}
          />
        </Col>
      </Row>
    </Container>
  );
}
export default PlotExplorerRow;
