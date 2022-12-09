import { saveAs } from "file-saver";
import JSZip from "jszip";
import JSZipUtils from "jszip-utils";

export default function downloadZip(filelist, zipname) {
  var zip = new JSZip();
  var count = 0;
  var zipFilename = "EuroCORDEX-UK_" + zipname + ".zip";
  var urls = filelist;

  // Add license file to zip
  zip.file("LICENSE.txt",
          "This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.\n\nUKCP18 data are available under the Open Government Licence, see http://www.nationalarchives.gov.uk/doc/open-government-licence/"
  );

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
