import { makeHr } from "./Translate";

export default async function FileCheck(
  { plotvars, seasons, periods, plottypes, setWarnings },
  ext
) {
  let prefix = "images";
  if (ext !== "png") {
    prefix = "data";
  }

  const buildOutputPathsArray = () => {
    plotvars.map(async (pvar) =>
      seasons.map(async (season) =>
        periods.map(async (period) =>
          plottypes.map(async (ptype) => {
            // TODO: add region
            // regions.map((region) => {
            // TODO: when adding data download functionality, this is the section to
            // change the beginning of the path
            let path =
              "https://raw.githubusercontent.com/UCL/UKCORDEX-plot-explorer-data/main" +
              "/" +
              prefix +
              "/" +
              pvar.value +
              "/" +
              pvar.value +
              "_" +
              "12km_" +
              ptype.value +
              "_" +
              period.value +
              "_" +
              season.value +
              "." +
              ext;

            paths.push(path);
          })
        )
      )
    );
  };

  const warnings = [];
  const fetchImage = async (path) => {
    const response = await fetch(path);
    // console.log(response);

    let url = response.url;
    if (response.ok) {
      outputArray.push(url);
    } else if (response.status === 404) {
      console.log(response.status);

      let warningMessage = makeHr(url.slice(url.lastIndexOf("/") + 1), ext);

      warnings.push(warningMessage);
    }
    setWarnings(warnings);
    console.log("warnings: ", warnings);
  };

  const paths = [];
  const outputArray = [];

  const buildPlotVarsDataObj = async () => {
    buildOutputPathsArray();
    // console.log(paths);

    const promises = [];

    // need to build an array of image paths to iterate over

    paths.forEach(async (path) => {
      promises.push(fetchImage(path));
    });

    const outputs = await Promise.all(promises);

    return outputs; // might be unnecessary
  };

  return buildPlotVarsDataObj().then(async (outputs) => {
    // console.log("fc" + typeof outputArray);
    return outputArray;
  });
}
