import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Alert, Row, Col } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import DownloadPlotsButton from "./DownloadPlotsButton";
import FigureRow from "./FigureRow";
import OptionsRow from "./OptionsRow";
import "./PlotExplorerContainer.css";
import DownloadDataButton from "./DownloadDataButton";
// import { SetValid } from "./GetValid";
import FileCheck from "./FileCheck";
// import DisplayWarnings from "./DisplayWarnings";

function PlotExplorerContainer() {
  /* This is the entry point to the main page. It handles state passing from
  user selected choices in OptionsRow to the array of plots displayed by
  FigureRow.
  */

  // TODO: Filecheck function should be called in this component(?) and the resulting lists passed to others as
  // states/arrays?

  // Handles state for the different choice types the user has to make
  const [plotvars, setPlotvars] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [periods, setPeriods] = useState([]);
  const [plottypes, setPlottypes] = useState([]);
  const [regions, setRegion] = useState([]);
  const [images, setImages] = useState([]);
  const [datafiles, setDataFiles] = useState([]);
  // const [warnings, setWarnings] = useState([]);

  // check files as selections are chosen
  useEffect(() => {
    let active = true;
    load();
    return () => {
      active = false;
    };
    async function load() {
      const images = await FileCheck(
        { plotvars, seasons, periods, plottypes },
        "png"
      );
      const datafiles = await FileCheck(
        { plotvars, seasons, periods, plottypes },
        "nc"
      );
      if (!active) {
        return;
      }
      setImages(images);
      setDataFiles(datafiles);
    }
  }, [plotvars, seasons, periods, plottypes]);

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
      <Row>{/* <DisplayWarnings warnings={warnings} /> */}</Row>
      <Row>
        <Col xs={2} className="ml-3 position-fixed">
          <Stack gap={1}>
            <Container>
              {/* Conditionally render Download button if at least one of each variable is selected */}
              {plottypes.length >= 1 &&
                plotvars.length >= 1 &&
                seasons.length >= 1 &&
                periods.length >= 1 &&
                regions.length >= 1 && <DownloadPlotsButton images={images} />}
            </Container>
            <Container>
              {/* Conditionally render Download button if at least one of each variable is selected */}
              {plottypes.length >= 1 &&
                plotvars.length >= 1 &&
                seasons.length >= 1 &&
                periods.length >= 1 &&
                regions.length >= 1 && (
                  <DownloadDataButton datafiles={datafiles} />
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
            regions={regions}
            images={images}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default PlotExplorerContainer;
