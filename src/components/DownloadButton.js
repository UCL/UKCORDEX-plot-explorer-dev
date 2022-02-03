// Download button for individual plots
import { saveAs } from "file-saver";
import React from "react";
import { Button } from "react-bootstrap";
import "./DownloadButton.css";

import JSZip from "jszip";
import JSZipUtils from "jszip-utils";

function DownloadButton({ plotvars, seasons, periods, plottypes }) {
  // zip multiple images
  const downloadzip = (imglist) => {
    var zip = new JSZip();
    var count = 0;
    var zipFilename = "UKCORDEX-plots.zip";
    var urls = imglist;

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
    });
  };
  // Handles what happens when save plot button is clicked
  const handleClick = () => {
    let imglist = [];
    plotvars.map((pvar) =>
      seasons.map((season) =>
        periods.map((period) =>
          plottypes.map((ptype) => {
            // TODO: when adding data download functionality, this is the section to
            // change the beginning of the path
            let path =
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
            return imglist.push(`${process.env.PUBLIC_URL}` + path);
          })
        )
      )
    );
    // call zip function here
    return downloadzip(imglist);
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

export default DownloadButton;
