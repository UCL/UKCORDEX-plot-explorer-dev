import React from "react";
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
import "../ExtraPages.css";
import "../HelpNav.css";

export default function DownloadHelp() {
  return (
    <Container className="help">
      {/* page contents */}
      <div>
        <h1>Using the downloaded data</h1>
        <p>The plot explorer provides the option to download the data used to produce the plots, as well as the plots themselves.
          <br></br>
          The data is provided in netcdf4 format, and each file contains only the data used to produce the selected plot; however, the files 
          are designed to in such a way that data from different seasons or time periods can be easily concatenated together for further analysis.
          <br></br>
          Jupyter notebooks containing the Python code used to produce the plots are currently in development and will be provided via Binder.
        </p>
        {/* Also add notebooks on how to combine files eg. to get relative changes or recreate absolute values of indices? */}
      </div>
    </Container>
  );
}
