import React, { useState, createContext } from "react";
import Container from "react-bootstrap/Container";
import { Alert } from "react-bootstrap";
import DownloadButton from "./DownloadButton";
import FigureRow from "./FigureRow";
import OptionsRow from "./OptionsRow";
import "./PlotExplorerContainer.css";

export const PlotContext = createContext();

function PlotExplorerRow() {
  /* This is the entry point to the main page. It handles state passing from
  user selected choices in OptionsRow to the array of plots displayed by
  FigureRow.
  */

  // Handles state for the 4 different choice types the user has to make
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
          pages. To clear all of your selections, refresh the page.
        </p>
      </Alert>

      <PlotContext.Provider
        value={
          ({ plotvars, setPlotvars },
          { seasons, setSeasons },
          { periods, setPeriods },
          { plottypes, setPlottypes },
          { regions, setRegion })
        }>
        <OptionsRow
          setPlotvars={setPlotvars}
          setSeasons={setSeasons}
          setPeriods={setPeriods}
          setPlottypes={setPlottypes}
          setRegion={setRegion}
        />

        {/* Conditionally render Download button if at least one plot type has been selected */}
        {plottypes.length > 0 && (
          <DownloadButton
          // plotvars={plotvars}
          // seasons={seasons}
          // periods={periods}
          // plottypes={plottypes}
          />
        )}

        <FigureRow
          plotvars={plotvars}
          seasons={seasons}
          periods={periods}
          plottypes={plottypes}
          setRegion={setRegion}
        />
      </PlotContext.Provider>
    </Container>
  );
}
export default PlotExplorerRow;
