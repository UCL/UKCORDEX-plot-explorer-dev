// Download button for individual plots
import { saveAs } from "file-saver";
import React from "react";
import { Button } from "react-bootstrap";
import "./DownloadButton.css";

import JSZip from "jszip";
import JSZipUtils from "jszip-utils";

export default function DownloadDataButton({
  plotvars,
  seasons,
  periods,
  plottypes,
  regions,
}) {
  // zip multiple images
  const downloadzip = (datalist) => {
    var zip = new JSZip();
    var count = 0;
    var zipFilename = "UKCORDEX-data.zip";
    var urls = datalist;

    urls.map((url) => {
      // get the right basename for each image
      var filename = url.slice(url.lastIndexOf("/") + 1);
      // loading a file and add it in a zip file
      JSZipUtils.getBinaryContent(url, function (err, data) {
        if (err) {
          throw err; // or handle the error
        }
        zip.file(filename, data, { binary: true });
        count++;
        if (count === urls.length) {
          zip.generateAsync({ type: "blob" }).then(function (content) {
            saveAs(content, zipFilename);
          });
        }
      });
      return console.log("this needed a return");
    });
  };
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
    return downloadzip(datalist);
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
