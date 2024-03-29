import SplitToVars from "./SplitToVars";
import {
  plottypeOptionsContents as plottypes,
  plotvarOptionsContents as plotvars,
  seasonOptionsContents as seasons,
  periodOptionsContents as periods,
  regionOptionsContents as regions,
} from "../OptionsRowContents";

export function makeHr(filename, ext) {
  // used for warnings

  function TranslateWarnings(variable, dictionary) {
    for (let key in dictionary) {
      if (variable === dictionary[key].value) {
        return dictionary[key].label;
      }
    }
  }
  let dict = SplitToVars(filename, ext);
  // pvar is not translated since it's kept as is
  let regionhr = TranslateWarnings(dict.region, regions);
  let ptypehr = TranslateWarnings(dict.ptype, plottypes);
  let seasonhr = TranslateWarnings(dict.season, seasons);
  let periodhr = TranslateWarnings(dict.period, periods);
  let hrString = `${regionhr} ${ptypehr} for ${seasonhr} ${dict.pvar} during ${periodhr}`;
  console.log(hrString);
  return hrString;
}

export function makeTitle(plot) {
  // used for plot title
  let dict = SplitToVars(plot);
  // let regionTitle = Translate(dict.region, regions, "label");
  let ptypeTitle = Translate(dict.ptype, plottypes, "title");
  let seasonTitle = Translate(dict.season, seasons, "label");
  let periodTitle = Translate(dict.period, periods, "title");

  // specific function for pvar due to category nesting
  function createpvarTitle(variable, varlist, field = "label") {
    for (let varname in varlist) {
      for (let abbr in varlist[varname]["options"]) {
        if (variable === varlist[varname]["options"][abbr].value) {
          return varlist[varname]["options"][abbr][field];
        }
      }
    }
  }
  let pvarTitle = createpvarTitle(dict.pvar, plotvars);

  // for periods
  let ctype = "change in";
  // let pname = `(${seasonTitle} ${periodTitle} )`;

  if (dict.period === "19890101-20081231") {
    ctype = "bias in";
  } else if (dict.period === "19801201-20101130") {
    ctype = "";
  } else if (dict.period.includes("-")) {
    ctype = "change in";
    // } else {
    //   pname = `after GMST increase of ${periodTitle}°C (${seasonTitle})`;
  }

  let titleString = `${ptypeTitle} ${ctype} ${seasonTitle} ${pvarTitle} ${periodTitle}`;
  return titleString;
}

function Translate(variable, dictionary, field) {
  for (let key in dictionary) {
    if (variable === dictionary[key].value) {
      return dictionary[key][field];
    }
  }
}
