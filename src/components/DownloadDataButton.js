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
  const handleDataDownload = async () => {
    console.log(plotvars);

    const files = await FileCheck(
      { plotvars, seasons, periods, plottypes },
      "nc"
    );

    // call zip function here
    return downloadzip(files, "datafiles");
  };

  return (
    // button with direct styling to override bootstrap
    <Button
      variant="primary"
      style={{ background: "#9560eb", border: "none" }}
      size="med"
      className="downloadbtn"
      download="UKCORDEXdata"
      onClick={handleDataDownload}>
      Save Data
    </Button>
  );
}
