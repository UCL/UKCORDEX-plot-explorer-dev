import React from "react";
import { Row, Col, Container, Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../ExtraPages.css";
import "../HelpNav.css";

export default function PlotHelp() {
  return (
    <Container className="help">
      <Row fluid="true">
        {/* sidenav for help pages */}
        <Col
          xs={3}
          sm={2}
          m={1}
          style={{ paddingLeft: 0, marginLeft: "-1%", marginRight: "7%" }}>
          <Container>
            <Nav
              className="flex-column"
              style={{ position: "fixed", overflow: "auto" }}>
              <ul className="subsection">
                <HashLink to="/plot-help#" className="page">
                  Plots{" "}
                </HashLink>
                <li>
                  {" "}
                  <HashLink
                    to="/plot-help#ensemble-means"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Maps of ensemble means
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/plot-help#ensemble-sd"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Maps of ensemble std dev{" "}
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/plot-help#boxplots"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Boxplots of UK avgs
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/plot-help#taylor"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Taylor diagrams
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/plot-help#anova"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Maps of sources of variation
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/plot-help#epp"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Ensemble principal patterns
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink
                    to="/plot-help#stamp"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "auto", block: "center" })
                    }>
                    Stamp plots
                  </HashLink>
                </li>
              </ul>
            </Nav>
          </Container>
        </Col>
        {/* page contents */}
        <Col>
          <div>
            {/* intro section */}
            <h1>Information on available plots</h1>
            <p>
              All plots are based on seasonal climatologies of each index during
              the selected time period, regridded to a common 12km grid. No bias
              correction has been carried out. For details of how indices are
              computed, see <Link to="/indices-help">this page</Link>
            </p>
            <p>
              For guidance on how to use these plots, see{" "}
              <Link to="/how-to-use">our help page</Link>
            </p>
          </div>
          <br></br>
          <p>
            The same legend (shown in the figure below) is used for the
            boxplots, Taylor diagrams and EPP score plots, in which each run is
            represented by a single point. Members of the CMIP5-EC ensemble are
            represented by symbols shaded in white, with members of the CMIP5-13
            ensemble filled in grey; where a model appears in both ensembles, a
            white symbol is used. Some symbols are used in both ensembles, but
            this does not necessarily connote any relationship between the
            corresponding runs. Members of the EuroCORDEX ensemble are
            represented by coloured symbols, with the shape indicating the
            member of the CMIP5-EC ensemble used to force the run, and the
            colour indicating the RCM. UKCP18 ensemble members are represented
            by dots in boxplots; by crosses (60km runs) or pluses (12km runs) in
            Taylor diagrams; and by ensemble member number in EPP score plots.
            In all cases the unperturbed member 01 is highlighted in orange.{" "}
          </p>
          <Image
            fluid="true"
            src={`${process.env.PUBLIC_URL}/content_images/legend.svg`}
            alt=""
          />
          {/* section about the plots */}
          {/* ensemble means */}
          <div>
            <h5 id="ensemble-means">Maps of ensemble mean bias/change</h5>
            <p>
              Systematic differences between the ensembles --- both in spatial
              patterns common to all ensemble members and in the magnitude of
              biases --- can be identified using maps of the mean biases/changes
              within each ensemble. During the evaluation period, the mean bias
              in each ensemble is presented as a map alongside the HadUK-Grid
              climatology, while for future periods, maps of the mean change
              with respect to the baseline period in each ensemble are provided.
            </p>
          </div>
          <br></br>
          {/* ensemble sd */}
          <div>
            <h5 id="ensemble-sd">
              Maps of standard deviations of biases/changes within each ensemble
            </h5>
            <p>
              The locations within the UK where the ensemble members are most
              strongly in agreement (or disagreement) can be identified using
              maps of the standard deviation of the biases/changes within each
              ensemble, after regridding to the common 12km OSGB grid. Areas
              where there is greater variation among the ensemble members appear
              as darker regions in these maps.
            </p>
          </div>
          <br></br>
          {/* boxplots */}
          <div>
            <h5 id="boxplots">Boxplots of UK average bias/change</h5>
            <p>
              The boxplots show the distribution of the mean changes in an index
              across the UK land surface within each ensemble. Each point
              represents the mean value of the index across the UK land surface
              for a single run, with points corresponding to the output of a
              single GCM offset horizontally for ease of viewing. The boxes
              indicate the central 50% of the distribution of UK-wide changes of
              the index within each ensemble, with both the mean and median
              values marked; the whiskers of the boxplot extend to values lying
              1.5 times the interquartile range beyond the upper and lower
              quartiles, with any values lying beyond the whiskers assumed to be
              outliers. The shaded region behind each boxplot shows a kernel
              density estimate of the empirical distribution of the values,
              which provides more detail about the shape of the distribution:
              for example, by highlighting bimodality within an ensemble. For
              plots of biases, the UK-wide average of the HadUK-Grid climatology
              is shown by a dashed red line; for plots of changes, the dashed
              red line indicates no change.
            </p>
          </div>
          <br></br>
          {/* taylor */}
          <div>
            <h5 id="taylor">Taylor diagrams</h5>
            <Row>
              <Col fluid="true">
                <Image
                  fluid="true"
                  src={`${process.env.PUBLIC_URL}/icons/taylor.png`}
                  alt=""
                />
              </Col>
              <Col>
                <p>
                  Taylor diagrams are used to evaluate which runs produce the
                  most realistic spatial variation of climate during the
                  evaluation period, using the HadUK-Grid climatology as a
                  reference; or to assess the extent of any changes in the
                  spatial patterns in the model climatology for future periods,
                  using the model climatology during the baseline period as a
                  reference.
                </p>
                <p>
                  For each run, two statistics are computed across all 12km grid
                  cells in the UK land surface: the Pearson correlation
                  coefficient between the simulated climatology and the
                  reference climatology, which measures the similarity between
                  the spatial patterns in the maps of simulated and reference
                  climate; and the standard deviation of the simulated
                  climatology, which measures the amplitude of the pattern.
                  These two statistics are plotted on radial axes, with the
                  correlation coefficient related to the azimuthal angle, and
                  the standard deviation proportional to the radial distance
                  from the origin. Where only positive correlations are
                  observed, the plot will cover a quarter circle; where one or
                  more runs has a negative correlation with the reference
                  climatology, the plot will be semicircular.
                </p>
              </Col>
              <Row>
                <p>
                  The standard deviation of the reference climatology is marked
                  with a heavy dashed arc: points lying close to this arc
                  represent runs with climatologies that have a similar
                  amplitude to the reference climatology, while points lying
                  closer to the origin represent runs that underestimate the
                  spatial variability, and points lying outside the arc
                  represent runs that overestimate the spatial variability.
                  Points close to the x-axis represent runs with high
                  correlation coefficients, indicating that those runs produce
                  similar spatial patterns to those in the reference
                  climatology; points that lie closer to the $y$-axis represent
                  runs with correlation coefficients close to zero, indicating
                  very different spatial patterns to those in the reference
                  field.
                </p>
                <p>
                  Runs represented by points closer to the black star more
                  closely replicate the the reference climatology in terms of
                  both the location of spatial features and the range of values
                  simulated across the UK. During the evaluation period, this is
                  a desirable trait, indicating that the runs produce realistic
                  spatial climatologies. For future periods, this indicates that
                  the spatial patterns are very similar to those produced during
                  the baseline period. The radial axes are scaled in such a way
                  that the distance from each point to the black star is
                  proportional to the centred root mean squared error in the
                  simulated field; however, note that this centred root mean
                  squared error excludes UK-wide biases in the runs, which must
                  be assessed separately using boxplots.
                </p>
              </Row>
            </Row>
          </div>
          <br></br>
          {/* anova */}
          <div>
            <h5 id="anova">
              Maps of sources of variation in the EuroCORDEX ensemble
            </h5>
            <p>
              Analysis of variance (ANOVA) can be used to partition the
              variation within the EuroCORDEX ensemble into contributions that
              can be attributed to either the GCMs or RCMs. The ANOVA plots
              consist of a map of the standard deviation of the model
              climatologies (or changes in the climatologies) within the
              EuroCORDEX ensemble, with darker areas indicating regions of
              higher variability, where there is less agreement between the
              ensemble members; and of maps of the proportion of this
              variability attributed to systematic differences between the GCMs
              and the RCMS, and of the residual variability. The plot titles
              also give the proportion of the variance over the whole of the UK
              explained by each component: note that, due to the unbalanced
              structure of the EuroCORDEX ensemble (as seen in the table of
              available GCM-RCM pairs at{" "}
              <HashLink to="data-help#eurocordex">
                table of available GCM-RCM pairs
              </HashLink>
              , where some combinations are missing), the proportions of
              variance attributed to each component do not sum to exactly 100%.
            </p>
            <p>
              For full details of the methodology used to accommodate the
              unbalanced structure of the EuroCORDEX ensemble, see{" "}
              <Link to="link-to-tech-report-or-later-paper">
                link-to-tech-report-or-later-paper
              </Link>
              .
            </p>
          </div>
          <br></br>
          {/* epp */}
          <div>
            <h5 id="epp">Ensemble principal patterns</h5>
            <p>
              These plots characterise the nature of the contributions from each
              GCM and each RCM, by displaying a small number of dominant `modes
              of variation' within the estimated effects used to partition the
              sources of variation in the ensemble. Each plot contains the
              ensemble mean bias/change in the index of interest, and two maps
              showing the spatial patterns that describe the largest proportion
              of the variance attributed to that model component in the ANOVA
              described above.
            </p>
            <p>
              The maps can be interpreted analogously to principal components
              (PCs) or empirical orthogonal functions (EOFs) in conventional
              analyses of space-time climate fields, but differ from PCs and
              EOFs in that here, the patterns are scaled to have the same units
              of measurement as the original index and hence can be interpreted
              directly as contributions to the overall variation of that index,
              while the scores are dimensionless and hence can be interpreted as
              `weights' attached to each pattern in a particular model's output.
              To distinguish these patterns from PCs and EOFs, and to highlight
              the fact that these patterns are computed across the members of an
              ensemble rather than across time, we refer to the patterns as
              ensemble principal patterns (EPPs).
            </p>
            <p>
              The numbers in brackets indicate the proportion of the attributed
              variance explained by that pattern: thus, if a GCM was found to
              explain 90% of the total variance, and the first GCM EPP explains
              50% of the variance attributable to the GCMs, then that pattern
              explains 45% of the total variance in the ensemble. The models
              with the largest scores (positive or negative) on either axis of
              the scatterplot are those for which the associated pattern
              contributes most to the estimated effects: the effects for models
              with positive scores tend to be positive in areas where the
              pattern itself is positive, and vice versa. The patterns are
              oriented such that positive scores tend to be associated overall
              with high values of the underlying index. A potential use of such
              plots is to help users select a small number of GCMs or RCMs that
              span the range of variation in an ensemble, or to identify members
              of the UKCP18 12km ensemble that display unusual patterns of
              behaviour in a particular index. A suggested sequence of analyses is given{" "}
              <Link to="/how-to-use">here</Link>.
            </p>
          </div>
          <br></br>
          {/* stamp */}
          <div>
            <h5 id="stamp">
              Stamp plots of seasonal climatologies for individual runs
            </h5>
            <p>
              Maps of the bias/change in seasonal climatology are provided for
              the individual runs in each ensemble. Plots can be downloaded for
              the CMIP5 global runs included in the CMIP5-EC and CMIP5-13
              ensembles; for the EuroCORDEX runs, alongside the corresponding
              CMIP5-EC climatologies; and for the UKCP18 runs at 60km and 12km
              resolution.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
