import axios from "axios";

export default function FileCheck(
  { plotvars, seasons, periods, plottypes },
  ext
) {
  let prefix = "images";
  if (ext !== "png") {
    prefix = "data";
  }

  let imglist = [];
  let warnings = [];
  plotvars.map((pvar) =>
    seasons.map((season) =>
      periods.map((period) =>
        plottypes.map((ptype) => {
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

          // Make a request
          axios
            .get(path)
            .then(function (response) {
              // handle success
              imglist.push(path);
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
              warnings.push([
                pvar.label,
                ptype.label,
                season.label,
                period.label,
              ]);
            });
        })
      )
    )
  );

  return [imglist, warnings];
}
