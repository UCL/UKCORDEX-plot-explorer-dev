// splits the path string into variables

export default function SplitToVars(filename, ext) {
  ext = "." + ext;
  //TODO: update for use with .nc as well
  let firstSplit = filename.replace(ext, "").split("_");
  console.log(firstSplit);

  return {
    ptype: firstSplit[0],
    pvar: firstSplit[1],
    season: firstSplit[2],
    period: firstSplit[3],
  };
}
