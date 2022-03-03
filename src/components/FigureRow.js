import React from "react";
import Figure from "react-bootstrap/Figure";
// import FigureImage from "react-bootstrap/FigureImage";
import { Container, Image } from "react-bootstrap";
import { Card } from "react-bootstrap";


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

        {images.map((plot, i) => (
          <Container key={i}>
            <Card className="mb-4">
              <Figure>
                <Figure.Caption>
                  Figure Title Here
                  {/* {`${plot.plotvars.label}/${plot.plottypes.label}_${plotvars.label}_${seasons.label}_${periods.label}`} */}
                </Figure.Caption>
                <Image
                  fluid="true"
                  // width="100%"
                  alt={
                    plottypes.label +
                    " not found for '" +
                    plotvars.label +
                    "' on season '" +
                    seasons.label +
                    "' and period '" +
                    periods.label +
                    "'."
                  }
                  src={plot}
                />
              </Figure>
            </Card>
          </Container>

        ))}
      </>
    );
  }
}

export default FigureRow;
