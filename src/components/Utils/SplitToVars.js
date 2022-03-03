// splits the path string into variables

export function SplitToVars(filename) {
  let firstSplit = filename.replace(".png", "").split("_");
  console.log(firstSplit);

  return {
    ptype: firstSplit[0],
    pvar: firstSplit[1],
    season: firstSplit[2],
    period: firstSplit[3],
  };
}
