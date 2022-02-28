// splits the path string into parts to make it human readable
import { plottypeOptionsContents as plottypes } from "../OptionsRowContents";
// import { plotvarOptionsContents as plotvars } from "../OptionsRowContents";
import { seasonOptionsContents as seasons } from "../OptionsRowContents";
import { periodOptionsContents as periods } from "../OptionsRowContents";
import { Translate } from "./Translate";

export function SplitToHR(path) {
  let firstSplit = path
    .replace(
      "https://raw.githubusercontent.com/UCL/UKCORDEX-plot-explorer-data/main/",
      ""
    )
    .replace(".png", "")
    .split("/");
  //   console.log(firstSplit);
  let secondSplit = firstSplit[3].split("_");
  console.log(secondSplit);
  let ptype = secondSplit[0];
  let pvar = secondSplit[1];
  let season = secondSplit[2];
  let period = secondSplit[3];

  let ptypehr = Translate(ptype, plottypes);
  //   let pvarhr = Translate(pvar, plotvars); // using pvar as is (for now?)
  let seasonhr = Translate(season, seasons);
  let periodhr = Translate(period, periods);
  let hrString = `${ptypehr} for ${pvar} in ${seasonhr} during ${periodhr}`;
  console.log(hrString);
  return hrString;
}
