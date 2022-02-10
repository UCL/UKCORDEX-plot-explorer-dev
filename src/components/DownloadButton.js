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
    FileCheck();

    let imglist = [];
    let warnings = [];
    plotvars.map((pvar) =>
      seasons.map((season) =>
        periods.map((period) =>
          plottypes.map((ptype) => {
            // TODO: add region
            // regions.map((region) => {
            // TODO: when adding data download functionality, this is the section to
            // change the beginning of the path
            let path =
              `${process.env.PUBLIC_URL}` +
              "/images/" +
              pvar.value +
              "/" +
              ptype.value +
              "_" +
              pvar.value +
              "_" +
              season.value +
              "_" +
              period.value +
              ".png";

            return [
              imglist.push(path),
              warnings.push([
                pvar.label,
                ptype.label,
                season.label,
                period.label,
              ]),
            ];
          })
        )
      )
    );
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
