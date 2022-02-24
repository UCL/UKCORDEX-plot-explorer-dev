import React from "react";
import Row from "react-bootstrap/Row";
import Figure from "react-bootstrap/Figure";
import { Image } from "react-bootstrap";
// import FileCheck from "./FileCheck";
// import FigureImage from "react-bootstrap/FigureImage";

function FigureRow({ plotvars, seasons, periods, plottypes, images }) {
  /*
  This displays the plots after checking the options chosen by the user.
  It will display something as soon as there's a choice made for each of the 4
  drowdowns. It will also automatically delete images as user deselects a
  choice.
*/

  // Don't try to show a plot until the user has selected at least one value of
  // each dropdown
  if ([plotvars, seasons, periods, plottypes].some((el) => el.length === 0)) {
    return null;
  } else {
    // Once selection is made, group plots by plot type, then delve into the
    // other selected options.
    // TODO: check with research team this is the best way to proceed.
    return (
      <>
        {images.map((plot) => (
          <Row>
            <Figure>
              <Image fluid="true" src={plot} />
            </Figure>
          </Row>
        ))}
      </>
    );
  }
}

export default FigureRow;
