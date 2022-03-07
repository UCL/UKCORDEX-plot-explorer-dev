import { saveAs } from "file-saver";
import JSZip from "jszip";
import JSZipUtils from "jszip-utils";

export default function downloadZip(filelist, filenames, zipname) {
  var zip = new JSZip();
  var count = 0;
  var zipFilename = "UKCORDEX_" + zipname + ".zip";
  var downloads = filelist;
  var filenamearray = [];

  for (let key in filenames) {
    var fnames = filenames[key];

    // set the name for each image
    var filename = `${fnames.ptype}_${fnames.pvar}_${fnames.season}_${fnames.period}`;
    console.log("downloadname: ", filename);
    filenamearray.push(filename);
  }

  downloads.map((file) => {
    filenamearray.map((filename) => {
      // loading a file and add it in a zip file
      JSZipUtils.getBinaryContent(file, function (err, data) {
        if (err) {
          throw err; // or handle the error
        }
        zip.file(filename, data, { binary: true });
        count++;
        if (count === downloads.length) {
          zip.generateAsync({ type: "blob" }).then(function (content) {
            saveAs(content, zipFilename);
          });
        }
      });
      return console.log("filenames have been mapped"); // function is unhappy without return
    });
    return console.log("files have been zipped"); // function is unhappy without return
  });
}
