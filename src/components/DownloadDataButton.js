// Download button for individual plots
import React from "react";
import { Button } from "react-bootstrap";
import "./DownloadButton.css";
import downloadzip from "./ZipFiles";
import FileCheck from "./FileCheck";

export default function DownloadDataButton({
  plotvars,
  seasons,
  periods,
  plottypes,
  regions,
}) {
  // Handles what happens when save plot button is clicked
  const handleClick = () => {
    const datalist = FileCheck({ plotvars, seasons, periods, plottypes }, "nc");
    let downloadlist = datalist[0];

    // call zip function here
    return downloadzip(datalist, "data");
  };

  return (
    // button with direct styling for bootstrap compatibility
    <Button
      variant="primary"
      style={{ background: "#9560eb", border: "none" }}
      size="med"
      className="downloadbtn"
      download="UKCORDEXdata"
      onClick={handleClick}>
      Save Data
    </Button>
  );
}
