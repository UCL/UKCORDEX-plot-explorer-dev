import React from "react";
import { Container, Table } from "react-bootstrap";
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
        <p>Heatwaves (<InlineMath math={"\\texttt{hwdi}"} />), tropical nights (<InlineMath math={"\\texttt{tr}"} />) and
          days with dangerously high heat index (<InlineMath math={"\\texttt{ndhi}"} />) do not occur in the UK during the winter months.
          Plots of these indices are therefore not available for winter.
        </p>
      </div>
      <div>
        <h1 id="missingruns">Model runs missing from particular plots</h1>
        <p>
          In some cases, plots are produced but individual model runs are missing. This is usually due to a particular variable being unavailable
          in the model output. Tables of indices missing from individual EuroCORDEX and CMIP5 runs are provided below.
        </p>
        <p>
          Plots of all UKCP18 12km ensemble members are available for all indices.
        </p>
        <p>
          The following indices are not available for the UKCP18 60km runs:{" "}
          <InlineMath math={"\\texttt{maxsfcWindmax}"} /> and extreme indices thereof;{" "}
          <InlineMath math={"\\texttt{maxwsgsmax}"} /> and extreme indices thereof;{" "}
          <InlineMath math={"\\texttt{mrso}"} />;{" "}
          <InlineMath math={"\\texttt{prcprop}"} />;{" "}
          <InlineMath math={"\\texttt{prsn}"} />;{" "}
          <InlineMath math={"\\texttt{snw}"} />.
        </p>
      </div>
      <div>
        <h5 id="eurocordex">Variables missing from EuroCORDEX regional simulations</h5>
        <Table striped size="sm">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Missing from</th>
              <th>Related indices</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><InlineMath math={"\\texttt{clt}"} /></td>
              <td>WRF381P</td>
              <td></td>
            </tr>
            <tr>
              <td><InlineMath math={"\\texttt{hurs}"} /></td>
              <td>CCLM4-8-17; EC-EARTH_r12i1p1_REMO2015, HadGEM2-ES_r1i1p1_REMO2015, ERAINT_r1i1p1_REMO2015</td>
              <td><InlineMath math={"\\texttt{ndhi}"} /></td>
            </tr>
            <tr>
              <td><InlineMath math={"\\texttt{mrso}"} /></td>
              <td>WRF381P</td>
              <td></td>
            </tr>
            <tr>
              <td><InlineMath math={"\\texttt{prsn}"} /></td>
              <td>CCLM4-8-17, RegCM4-6</td>
              <td></td>
            </tr>
            <tr>
              <td><InlineMath math={"\\texttt{snw}"} /></td>
              <td>CCLM4-8-17; EC-EARTH_r1i1p1_RCA4, EC-EARTH_r2i1p1_RCA4, MPI-ESM-LR_r2i1p1_RCA4, MPI-ESM-LR_r3i1p1_RCA4, NorESM1-M_r1i1p1_RCA4, ERAINT_r1i1p1_RCA4</td>
              <td></td>
            </tr>
            <tr>
              <td><InlineMath math={"\\texttt{wsgsmax}"} /></td>
              <td>ALADIN63, HIRHAM5, RegCM4-6, WRF381P</td>
              <td><InlineMath math={"\\texttt{maxwsgsmax}"} /> and extremes</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <h5 id="global">Variables missing from CMIP5 runs</h5>
        <p>
          Plots are not provided for EC-EARTH realisation r3i1p1 due to unavailability of the model output.
        </p>
        <p>
          The following indices are unavailable for all CMIP5 ensemble members:
          <InlineMath math={"\\texttt{hurs}"} />;{" "}
          <InlineMath math={"\\texttt{huss}"} />;{" "}
          <InlineMath math={"\\texttt{maxwsgsmax}"} /> and extremes thereof;{" "}
          <InlineMath math={"\\texttt{mrso}"} />;{" "}
          <InlineMath math={"\\texttt{ndhi}"} />;{" "}
          <InlineMath math={"\\texttt{snw}"} />. Any indices not appearing in this list or the table below are provided for all CMIP ensemble members.
        </p>
        <p>
          Cells marked with <InlineMath math={"\\texttt{x}"} /> in the following table denote indices that are missing from particular runs.
        </p>
        <Table striped size="sm">
          <thead>
            <tr>
              <th>CMIP5 member</th>
              <th>clt</th><th>prc</th><th>prsn</th><th>psl</th><th>rls</th><th>rss</th><th>sfcWind</th><th>sfcWindmax</th><th>uas</th><th>vas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ACCESS1-3_r1i1p1</td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>BCC-CSM1-1_r1i1p1</td><td></td><td></td><td></td><td></td><td></td><td></td><td>x</td><td>x</td><td></td><td></td>
            </tr>
            <tr>
              <td>CCSM4_r1i1p1</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td>
            </tr>
            <tr>
              <td>CESM1-BGC_r1i1p1</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td>
            </tr>
            <tr>
              <td>CMCC-CM_r1i1p1</td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>CNRM-CM5_r1i1p1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>CanESM2_r1i1p1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>EC-EARTH_r12i1p1</td><td>x</td><td></td><td>x</td><td></td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td>
            </tr>
            <tr>
              <td>EC-EARTH_r1i1p1</td><td>x</td><td></td><td>x</td><td></td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td>
            </tr>
            <tr>
              <td>GFDL-ESM2G_r1i1p1</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td></td><td>x</td><td>x</td><td>x</td>
            </tr>
            <tr>
              <td>HadGEM2-ES_r1i1p1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>IPSL-CM5A-MR_r1i1p1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>MPI-ESM-LR_r1i1p1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>x</td><td>x</td>
            </tr>
            <tr>
              <td>MPI-ESM-LR_r2i1p1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>MPI-ESM-LR_r3i1p1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>MPI-ESM-MR_r1i1p1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>MRI-CGCM3_r1i1p1</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td></td><td>x</td><td>x</td><td>x</td>
            </tr>
            <tr>
              <td>NorESM1-M_r1i1p1</td><td></td><td></td><td></td><td></td><td></td><td></td><td>x</td><td>x</td><td>x</td><td>x</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}