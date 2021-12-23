import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import FigureRow from "./FigureRow";
import MenuHeader from "./MenuHeader";
import OptionsRow from "./OptionsRow";

function PlotExplorerRow() {
  /* This is the entry point to the main page. It handles state passing from
  user selected choices in OptionsRow to the array of plots displayed by
  FigureRow.
  */

  // Handles state for the 4 differe choice types the user has to make
  const [plotvars, setPlotvars] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [periods, setPeriods] = useState([]);
  const [plottypes, setPlottypes] = useState([]);

  return (
    <Container>

      <MenuHeader />

      <OptionsRow
        setPlotvars={setPlotvars}
        setSeasons={setSeasons}
        setPeriods={setPeriods}
        setPlottypes={setPlottypes}
      />

      <FigureRow
        plotvars={plotvars}
        seasons={seasons}
        periods={periods}
        plottypes={plottypes}
      />

    </Container>
  );
}
export default PlotExplorerRow;
