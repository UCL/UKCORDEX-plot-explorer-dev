import { saveAs } from "file-saver";
import JSZip from "jszip";
import JSZipUtils from "jszip-utils";

export default function downloadZip(filelist, zipname) {
  var zip = new JSZip();
  var count = 0;
  var zipFilename = "UKCORDEX_" + zipname + ".zip";
  var urls = filelist;

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
    return null;
  });
}
