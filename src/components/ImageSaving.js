import React, { useContext } from "react";
import { saveAs } from "file-saver";
import { PlotContext } from "./PlotExplorerContainer";

export default function Nesting() {
  //   const downloadImage = () => {
  //     saveAs(this.props, "UKCORDEXPLOTS.jpg"); // Put your image url here.
  //   };
  const { plotvars, plottypes, seasons, periods } = useContext(PlotContext);

  // date to be added to file saved
  var d = new Date();
  var NoTimeDate =
    d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();

  console.log("the button has been clicked");

  saveAs(
    plotvars.map((plotvar) =>
      seasons.map((season) =>
        periods.map((period) =>
          plottypes.map((plottype) => (
            <span key={plottype.value}>
              {`${process.env.PUBLIC_URL}/images/${plotvar.value}/${plottype.value}_${plotvar.value}_${season.value}_${period.value}.png`}
            </span>
          ))
        )
      )
    ),
    "UKCORDEX_plots" + NoTimeDate + ".jpg"
  );
}
