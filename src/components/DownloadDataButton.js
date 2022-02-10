// Download button for individual plots
import React from "react";
import { Button } from "react-bootstrap";
import "./DownloadButton.css";
import downloadzip from "./ZipFiles";

export default function DownloadDataButton({
  plotvars,
  seasons,
  periods,
  plottypes,
  regions,
}) {
  // Handles what happens when save plot button is clicked
  const handleClick = () => {
    let datalist = [];
    plotvars.map((pvar) =>
      seasons.map((season) =>
        periods.map((period) =>
          plottypes.map((ptype) => {
            // TODO: add region
            // regions.map((region) => {
            // TODO: when adding data download functionality, this is the section to
            // change the beginning of the path
            let path =
              "/data/" +
              pvar.value +
              "/" +
              ptype.value +
              "_" +
              pvar.value +
              "_" +
              season.value +
              "_" +
              period.value;
            return datalist.push(`${process.env.PUBLIC_URL}` + path);
          })
        )
      )
    );
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
