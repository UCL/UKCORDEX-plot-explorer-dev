// Download button for individual plots
import React from "react";
import { Button } from "react-bootstrap";
import "./DownloadButton.css";
import downloadZip from "./Utils/downloadZip";

function DownloadPlotsButton({ images }) {
  const handlePlotDownload = () => {
    // call zip function here
    return downloadZip(images, "plots");
  };

  return (
    <Button
      variant="primary"
      style={{ background: "#6610f2", border: "none" }}
      size="med"
      className="downloadbtn"
      download="UKCORDEXimage"
      onClick={handlePlotDownload}>
      Save Plots
    </Button>
  );
}

export default DownloadPlotsButton;
