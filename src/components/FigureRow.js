import React from "react";
import Figure from "react-bootstrap/Figure";
import { Container, Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { makeTitle } from "./Utils/Translate";

function FigureRow({ plotvars, seasons, periods, plottypes, images, regions }) {
  /*
  This displays the plots after checking the options chosen by the user.
  It will display something as soon as there's a choice made for each of the 4
  drowdowns. It will also automatically delete images as user deselects a
  choice.
*/

  // Don't try to show a plot until the user has selected at least one value of
  // each dropdown
  if (
    [plotvars, seasons, periods, plottypes, regions].some(
      (el) => el.length === 0
    )
  ) {
    return null;
  } else {
    // Once selection is made, group plots by plot type, then delve into the
    // other selected options.
    // TODO: check with research team this is the best way to proceed.
    return (
      <>
        {images.map((plot, i) => (
          <Container key={i}>
            <Card
              className="mb-4"
              style={{ border: "none", width: "65%", margin: "auto" }}>
              <Figure>
                <Figure.Caption
                  style={{
                    marginLeft: "-20%",
                    textAlign: "center",
                    width: "150%",
                  }}>
                  {makeTitle(plot.slice(plot.lastIndexOf("/") + 1))}
                </Figure.Caption>
                <Image
                  fluid="true"
                  alt={`plot ${makeTitle(
                    plot.slice(plot.lastIndexOf("/") + 1)
                  )} not found`}
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
