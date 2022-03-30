import SplitToVars from "./SplitToVars";
import {
  plottypeOptionsContents as plottypes,
  plotvarOptionsContents as plotvars,
  seasonOptionsContents as seasons,
  periodOptionsContents as periods,
  regionOptionsContents as regions,
} from "../OptionsRowContents";

export function makeHr(filename) {
  let dict = SplitToVars(filename);
  // pvar is not translated since it's kept as is
  let regionhr = Translate(dict.region, regions);
  let ptypehr = Translate(dict.ptype, plottypes);
  let seasonhr = Translate(dict.season, seasons);
  let periodhr = Translate(dict.period, periods);
  let hrString = `${regionhr} ${ptypehr} for ${seasonhr} ${dict.pvar} during ${periodhr}`;
  // console.log(hrString);
  return hrString;
}

export function makeTitle(plot) {
  let dict = SplitToVars(plot);
  let regionTitle = Translate(dict.region, regions, "label");
  let ptypeTitle = Translate(dict.ptype, plottypes, "title");
  let seasonTitle = Translate(dict.season, seasons, "label");
  let periodTitle = Translate(dict.period, periods, "title");

  // specific function for pvar due to category nesting
  function createpvarTitle(variable, varlist, field = "label") {
    for (let varname in varlist) {
      for (let abbr in varname) {
        if (variable === varlist[varname]["options"][abbr].value) {
          return varlist[varname]["options"][abbr][field];
        }
      }
    }
  }
  let pvarTitle = createpvarTitle(dict.pvar, plotvars);
  console.log(pvarTitle); // will delete once things have been figured out

  // for periods
  let ctype = "change in";
  let pname = `(${seasonTitle} ${periodTitle} )`;

  if (dict.period === "Evaluation period: 19890101-20081231") {
    ctype = "bias in";
  } else if (dict.period.includes("-")) {
    ctype = "change in";
  } else {
    pname = `after GMST increase of ${periodTitle}°C (${seasonTitle})`;
  }

  let titleString = `${regionTitle} ${ptypeTitle}: ${ctype} ${dict.pvar} ${pname}`;
  return titleString;
}

function Translate(variable, dictionary, field) {
  for (let key in dictionary) {
    if (variable === dictionary[key].value) {
      return dictionary[key][field];
    }
  }
}
