// Download button for individual plots
import { saveAs } from "file-saver";
import React from "react";
import { Button } from "react-bootstrap";
import "./DownloadButton.css";

// import JSZip from "jszip";

// import Nesting from "./ImageSaving";

function DownloadButton({ plotvars, seasons, periods, plottypes }) {
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

  // date to be added to file saved
  // let d = new Date();
  // // const NoTimeDate =
  // //   "_" + d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
  // const smallDate = "_";

  // console.log(props);
  // let periodprops = props.periods;
  // let varprops = props.plotvars;
  // let typeprops = props.plottypes;
  // let seasonprops = props.seasons;
  console.log(
    "look here" +
      plotvars.map((pvar) =>
        seasons.map((season) =>
          periods.map((period) =>
            plottypes.map((ptype) => {
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
              let pathend =
                ptype.value +
                "_" +
                pvar.value +
                "_" +
                season.value +
                "_" +
                period.value;
              // return pvar.value + season.value + period.value + ptype.value;
              return `${process.env.PUBLIC_URL}` + path + pathend + "test1";
            })
          )
        )
      )
  );

  const handleClick = () => {
    plotvars.map((pvar) =>
      seasons.map((season) =>
        periods.map((period) =>
          plottypes.map((ptype) => {
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
            let pathend =
              ptype.value +
              "_" +
              pvar.value +
              "_" +
              season.value +
              "_" +
              period.value;
            return saveAs(
              `${process.env.PUBLIC_URL}` + path,
              pathend + "test1"
            );
          })
        )
      )
    );
  };
  // process.env.PUBLIC_URL}/images/${plotvar.value}/${plottype.value}_${plotvar.value}_${season.value}_${period.value}.png

  // each category creates an array under props, so props.periods, props.plorvars, etc.

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
