// Download button for individual plots
import React from "react";
import { Alert, Button } from "react-bootstrap";
import "./DownloadButton.css";
import FileCheck from "./FileCheck";
import downloadzip from "./ZipFiles";

function DownloadPlotsButton({
  plotvars,
  seasons,
  periods,
  plottypes,
  regions,
  images,
}) {
  const handlePlotDownload = () => {
    // call zip function here
    return downloadzip(images, "plots");
  };

  return (
    <>
      {/* <Alert variant="danger" className="position-top position-sticky">
        {/* {warnings} */}
      {/* </Alert> */}
      {/* // button with direct styling to overwrite bootstrap */}
      <Button
        variant="primary"
        style={{ background: "#6610f2", border: "none" }}
        size="med"
        className="downloadbtn"
        download="UKCORDEXimage"
        onClick={handlePlotDownload}>
        Save Plots
      </Button>
    </>
  );
}

export default DownloadPlotsButton;
