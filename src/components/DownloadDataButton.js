// Download button for individual plots
import React from "react";
import { Button } from "react-bootstrap";
import "./DownloadButton.css";
import downloadZip from "./Utils/downloadZip";

export default function DownloadDataButton({ datafiles }) {
  const handleDataDownload = () => {
    // call zip function here
    return downloadZip(datafiles, "datafiles");
  };

  return (
    // button with direct styling to override bootstrap
    <Button
      variant="primary"
      style={{ background: "#6610f2", border: "none" }}
      size="med"
      className="downloadbtn"
      download="UKCORDEXdata"
      onClick={handleDataDownload}>
      Save Data
    </Button>
  );
}
