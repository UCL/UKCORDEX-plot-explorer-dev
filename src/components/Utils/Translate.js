import SplitToVars from "./SplitToVars";
import {
  plottypeOptionsContents as plottypes,
  plotvarOptionsContents as plotvars,
  seasonOptionsContents as seasons,
  periodOptionsContents as periods,
  regionOptionsContents as regions,
} from "../OptionsRowContents";

export function makeHr(filename, ext) {
  let dict = SplitToVars(filename, ext);
  // pvar is not translated since it's kept as is
  let ptypehr = Translate(dict.ptype, plottypes);
  let seasonhr = Translate(dict.season, seasons);
  let periodhr = Translate(dict.period, periods);
  let hrString = `${ptypehr} for ${seasonhr} ${dict.pvar} during ${periodhr}`;
  // console.log(hrString);
  return hrString;
}

export function makeTitle(plot) {
  let dict = SplitToVars(plot);
  let regionTitle = Translate(dict.region, regions);
  let ptypeTitle = Translate(dict.ptype, plottypes, "title");
  let seasonTitle = Translate(dict.season, seasons);

  // specific function for pvar due to category nesting
  function createpvarTitle(variable, dictionary, field = "label") {
    for (let key1 in dictionary) {
      for (let key2 in key1) {
        if (variable === dictionary[key1]["options"][key2].value) {
          return dictionary[key1]["options"][key2][field];
        }
      }
    }
  }
  let pvarTitle = createpvarTitle(dict.pvar, plotvars);

  // for periods
  let ctype = "change in";
  let pname = `(${seasonTitle} ${dict.period})`;

  if (dict.period === "19890101-20081231") {
    ctype = "bias in";
  } else if (dict.period.includes("-")) {
    ctype = "change in";
  } else {
    pname = `after GMST increase of ${dict.period}°C (${seasonTitle})`;
  }

  let titleString = `${regionTitle} ${ptypeTitle} ${ctype} ${pvarTitle} (${dict.pvar}) ${pname}`;
  return titleString;
}

function Translate(variable, dictionary) {
  for (let key in dictionary) {
    if (variable === dictionary[key].value) {
      return dictionary[key].label;
    }
  }
}
