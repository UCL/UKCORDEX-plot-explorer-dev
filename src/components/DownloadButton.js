// Download button for individual plots
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./DownloadButton.css";
// import JSZip from "jszip";

import Nesting from "./ImageSaving";

function DownloadButton() {
  // For multiple downloads
  //   var zip = new JSZip();
  //   var count = 0;
  //   var zipFilename = "UKCORDEX-plots.zip";
  //   var urls = ["http://image-url-1", "http://image-url-2", "http://image-url-3"];

  //   urls.forEach(function (url) {
  //     var filename = "filename";
  //     // loading a file and add it in a zip file
  //     JSZipUtils.getBinaryContent(url, function (err, data) {
  //       if (err) {
  //         throw err; // or handle the error
  //       }
  //       zip.file(filename, data, { binary: true });
  //       count++;
  //       if (count == urls.length) {
  //         zip.generateAsync({ type: "blob" }).then(function (content) {
  //           saveAs(content, zipFilename);
  //         });
  //       }
  //     });
  //   });

  return (
    //   button with direct styling for bootstrap compatibility
    <Button
      variant="primary"
      style={{ background: "#6610f2", border: "none" }}
      size="med"
      className="downloadbtn">
      <a /*This is hardcoded for now but will be changed to work dynamically */
        href={`${process.env.PUBLIC_URL}/images/fwd/eval-boxplots_fwd_DJF_19890101-20081231.png`}
        download="UKCORDEXimage">
        Save Plots
      </a>
    </Button>
  );
}

export default DownloadButton;
