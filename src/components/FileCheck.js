export default async function FileCheck(
  { plotvars, seasons, periods, plottypes },
  ext
) {
  let prefix = "images";
  if (ext !== "png") {
    prefix = "data";
  }

  // let imglist = [];
  let warnings = [];

  const fetchImage = async (path) => {
    const response = await fetch(path);

    if (response.ok) {
      const imageBlob = await response.blob();

      const imageObjectURL = URL.createObjectURL(imageBlob);

      console.log(imageObjectURL);
      imagesArray.push(imageObjectURL);
    }
  };

  const buildImagePathsArray = () => {
    plotvars.map(async (pvar) =>
      seasons.map(async (season) =>
        periods.map(async (period) =>
          plottypes.map(async (ptype) => {
            // TODO: add region
            // regions.map((region) => {
            // TODO: when adding data download functionality, this is the section to
            // change the beginning of the path
            let path =
              "https://raw.githubusercontent.com/UCL/UKCORDEX-plot-explorer-data/main/" +
              "/" +
              prefix +
              "/" +
              pvar.value +
              "/" +
              ptype.value +
              "_" +
              pvar.value +
              "_" +
              season.value +
              "_" +
              period.value +
              "." +
              ext;

            console.log(path);

            paths.push(path);
          })
        )
      )
    );
  };

  const paths = [];
  const imagesArray = [];

  const buildPlotVarsDataObj = async () => {
    buildImagePathsArray();
    console.log(paths);

    const promises = [];

    // need to build an array of image paths to iterate over

    paths.forEach(async (path) => {
      promises.push(fetchImage(path));
    });

    const outputs = await Promise.all(promises);

    return outputs; // might be unnecessary
  };

  return buildPlotVarsDataObj().then(async (outputs) => {
    console.log(imagesArray);
    return imagesArray;
  });
}
