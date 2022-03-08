// splits the path string into variables

export default function SplitToVars(filename, ext = "png") {
  ext = "." + ext;
  let firstSplit = filename.replace(ext, "").split("_");
  // console.log(firstSplit);

  return {
    ptype: firstSplit[2],
    pvar: firstSplit[0],
    season: firstSplit[4],
    period: firstSplit[3],
    region: firstSplit[1],
  };
}
