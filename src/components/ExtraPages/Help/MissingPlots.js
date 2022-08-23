import React from "react";
import { Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { InlineMath } from "react-katex";
import "../ExtraPages.css";
import "../HelpNav.css";

export default function MissingPlots() {
  return (
    <Container className="help">
      {/* page contents */}
      <div>
        <h1>Plots not available from UKCORDEX Plot Explorer</h1>
        <p>
          Some combinations of the available options will result in an error message that the selected plots do not exist.
          Common reasons for this are given below.
        </p>
      </div>
      {/* section about the missing plots */}
      <div>
        <h5 id="evalplots">Missing evaluation plots where suitable observations are unavailable</h5>
        <p>Plots of biases during the evaluation period are provided where appropriate observations are available.
          At present, all biases are calculated with respect to
          the <HashLink to="/data-help#haduk">HadUK-Grid dataset</HashLink>,
          which provides daily time series of rainfall and of daily maximum and minimum temperature,
          from which a daily mean temperature is derived; and monthly time series of relative humidity, sea level pressure,
          surface wind speeds and snow depth. Plots of other variables, or of indices requiring daily time series of variables
          other than temperature or precipitation, are therefore not available.
        </p>
      </div>
      <div>
        <h5 id="Taylorbl">Taylor diagrams not produced for baseline period</h5>
        <p><HashLink to="/plot-help#taylor">Taylor diagrams</HashLink> compare
          the spatial patterns in the model output with a reference field.
          During the evaluation period, model output is compared to the observed climatology, and for future periods,
          to the climatology during the baseline period: plots for the baseline period have no reference, so Taylor diagrams cannot be produced.
        </p>
      </div>
      <div>
        <h5 id="annualonly">Degree-days and growing season length are only available at annual timescales</h5>
        <p>As noted in the <HashLink to="/indices-help#degree">indices reference</HashLink>, season lengths and degree-days are calculated
          per calendar year, and seasonal plots are not available.
        </p>
      </div>
      <div>
        <h5 id="heatwaves">Indices of occurrences of extreme heat are not computed for the winter months</h5>
        <p>Heatwaves (<InlineMath math={"\\texttt{hwdi}"}/>), tropical nights (<InlineMath math={"\\texttt{tr}"}/>) and
        days with dangerously high heat index (<InlineMath math={"\\texttt{ndhi}"}/>) do not occur in the UK during the winter months. 
        Plots of these indices are therefore not available for winter.
        </p>
      </div>
      <div>
        <h1 id="missingruns">Model runs missing from particular plots</h1>
        <p>
          In some cases, plots are produced but individual model runs are missing. This is usually due to a particular variable being unavailable
          in the model output. A table of missing variables is under construction and will be provided here when complete.
        </p>
      </div>
    </Container>
  );
}