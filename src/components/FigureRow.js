import React from "react";
import Figure from "react-bootstrap/Figure";
// import FigureImage from "react-bootstrap/FigureImage";
import { Container, Image } from "react-bootstrap";
import { Card } from "react-bootstrap";

function FigureRow({ plotvars, seasons, periods, plottypes }) {
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
        {plotvars.map((plotvar) =>
          seasons.map((season) =>
            periods.map((period) =>
              plottypes.map((plottype) => (
                <Container>
                  <Card className="mb-4">
                    <Figure>
                      <Figure.Caption>
                        {`${plotvar.label}/${plottype.label}_${plotvar.label}_${season.label}_${period.label}`}
                      </Figure.Caption>
                      <Image
                        fluid="true"
                        // width="100%"
                        alt={
                          plottype.label +
                          " not found for '" +
                          plotvar.label +
                          "' on season '" +
                          season.label +
                          "' and period '" +
                          period.label +
                          "'."
                        }
                        src={`${process.env.PUBLIC_URL}/images/${plotvar.value}/${plottype.value}_${plotvar.value}_${season.value}_${period.value}.png`}
                      />
                    </Figure>
                  </Card>
                </Container>
              ))
            )
          )
        )}
      </>
    );
  }
}

export default FigureRow;
