import SplitToVars from "./SplitToVars";
import { plottypeOptionsContents as plottypes } from "../OptionsRowContents";
import { seasonOptionsContents as seasons } from "../OptionsRowContents";
import { periodOptionsContents as periods } from "../OptionsRowContents";

export default function makeHr(filename, ext) {
  let dict = SplitToVars(filename, ext);
  // pvar is not translated since it's kept as is
  let ptypehr = Translate(dict.ptype, plottypes);
  let seasonhr = Translate(dict.season, seasons);
  let periodhr = Translate(dict.period, periods);
  let hrString = `${ptypehr} for ${seasonhr} ${dict.pvar} during ${periodhr}`;
  // console.log(hrString);
  return hrString;
}

function Translate(variable, dictionary) {
  for (let key in dictionary) {
    if (variable === dictionary[key].value) {
      return dictionary[key].label;
    }
  }
}
