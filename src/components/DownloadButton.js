// Download button for individual plots
import React from "react";
import { Button } from "react-bootstrap";
import "./DownloadButton.css";
import FileCheck from "./FileCheck";
import downloadzip from "./ZipFiles";

function DownloadPlotsButton({
  plotvars,
  seasons,
  periods,
  plottypes,
  regions,
}) {
  // Handles what happens when save plot button is clicked
  const handleClick = () => {
    const [imglist, warnings] = FileCheck(
      { plotvars, seasons, periods, plottypes },
      "png"
    );
    console.log("image list: ", imglist, "warnings: ", warnings);

    // call zip function here
    return downloadzip(imglist, "plots");
  };

  return (
    // button with direct styling for bootstrap compatibility
    <Button
      variant="primary"
      style={{ background: "#6610f2", border: "none" }}
      size="med"
      className="downloadbtn"
      download="UKCORDEXimage"
      onClick={handleClick}>
      Save Plots
    </Button>
  );
}

export default DownloadPlotsButton;
