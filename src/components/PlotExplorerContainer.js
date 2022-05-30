import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Alert, Row } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import DownloadPlotsButton from "./DownloadPlotsButton";
import FigureRow from "./FigureRow";
import OptionsRow from "./OptionsRow";
import "./PlotExplorerContainer.css";
import DownloadDataButton from "./DownloadDataButton";
import FileCheck from "./Utils/FileCheck";
import DisplayWarnings from "./DisplayWarnings";
import { Link } from "react-router-dom";

function PlotExplorerContainer() {
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
  const [images, setImages] = useState([]);
  const [datafiles, setDataFiles] = useState([]);
  const [warnings, setWarnings] = useState([]);

  // check files as selections are chosen
  useEffect(() => {
    let active = true;
    load();
    return () => {
      active = false;
    };
    async function load() {
      const images = await FileCheck(
        {
          plotvars,
          seasons,
          periods,
          plottypes,
          regions,
          setWarnings,
        },
        "png"
      );
      // Commented for now just because files are not yet available
      const datafiles = await FileCheck(
        { plotvars, seasons, periods, plottypes, regions, setWarnings },
        "nc"
      );
      if (!active) {
        return;
      }
      setImages(images);
      console.log(images);
      setDataFiles(datafiles);
    }
  }, [plotvars, seasons, periods, plottypes, regions]);

  return (
    <Container fluid>
      <Alert variant="info" className="intro">
        <h5>
          Welcome to the UKCORDEX plot explorer.<br></br>
        </h5>
        <p>
          To start, select one of each of the following parameters (each dropdown also allows as-you-type filtering).
          Your plot(s) will be shown when at least one item has been selected in each dropdown.
          To clear all selections, refresh the page. <br></br>
          The reference guide gives more information on the available <Link to="/indices-help">indices</Link>, <Link to="/plot-help">plot types</Link>, and <Link to="/time-help">time periods</Link>, as well as details of the <Link to="/data-help">sources of climate data used</Link>.<br></br>
          For a suggested order of analyses, see the <Link to="/how-to-use">usage guide</Link>.
        </p>
        <h5>
          This website is currently under development and only contains a subset of the <Link to="/indices-help">planned indices</Link>.<br></br>
        </h5>
      </Alert>
      <OptionsRow
        setPlotvars={setPlotvars}
        setSeasons={setSeasons}
        setPeriods={setPeriods}
        setPlottypes={setPlottypes}
        setRegion={setRegion}
      />
      <Row>
        {warnings.length >= 1 && <DisplayWarnings warnings={warnings} />}
      </Row>
      <Row style={{ marginTop: 10 }}>
        {/* Conditionally render buttons if at least one of each variable is selected */}
        {plottypes.length >= 1 &&
          plotvars.length >= 1 &&
          seasons.length >= 1 &&
          periods.length >= 1 &&
          regions.length >= 1 && (
            <Stack
              gap={5}
              direction={"horizontal"}
              className="justify-content-center"
              sticky="top">
              <DownloadPlotsButton images={images} />
              <DownloadDataButton datafiles={datafiles} />
            </Stack>
          )}
      </Row>
      <Row style={{ marginTop: 20 }}>
        <FigureRow
          plotvars={plotvars}
          seasons={seasons}
          periods={periods}
          plottypes={plottypes}
          regions={regions}
          images={images}
        />
      </Row>
    </Container>
  );
}

export default PlotExplorerContainer;
