import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../ExtraPages.css";
import "../HelpNav.css";

export default function Usage() {
  return (
    <Container className="help">
      {/* page contents */}
      <div>
        <h1>
          How to use this plot explorer to select a suitable subset of ensemble
          members
        </h1>
        <p>
          In situations where only a small number of ensemble members (i.e.
          model runs) can be used, it is recommended that they are chosen so as
          to be as representative as possible of the entire ensemble, with
          respect to the specific climate indices that are most relevant in the
          context of the application. To achieve this, users are advised to
          identify and focus on the dominant sources of variation of these
          indices within the ensemble. For example, in a situation where the
          GCMs are responsible for 90% of the variation in the indices of
          interest, the chosen sample of ensemble members should contain runs
          driven by contrasting GCMs but the choice of RCM is relatively
          unimportant.
        </p>
        <p>
          The dominant sources of variation in an ensemble are index-dependent.
          To identify a appropriate set of ensemble members for use in
          applications examining the impacts of, or adaptation to, future
          changes in UK climate, a suggested usage of this plot explorer tool
          is:
        </p>

        <ul>
          <li>
            Having identified the most relevant{" "}
            <Link to="/indices-help"> climate indices</Link>, seasons and{" "}
            <Link to="/time-help">time period</Link>, examine the boxplots
            showing the corresponding overall UK-averaged distribution(s) of
            future changes for the time period of interest. This will indicate
            the extent to which any{" "}
            <HashLink to="/plot-help#ensemble">ensemble</HashLink> captures the
            full range of variation; for the EuroCORDEX ensemble, the boxplots
            can also give a preliminary indication as to whether one potential
            source of variation (e.g. the GCMs) is highly dominant, since this
            will manifest itself via clustering of the plotted values by colour
            or plotting symbol.
          </li>
          <li>
            Examine maps showing the{" "}
            <HashLink to="/plot-help#anova">ANOVA decomposition</HashLink> of
            the ensemble for the indices of interest. The plot titles quantify
            the overall partitioning of variation across the UK, and hence
            formalise the preliminary indications from the boxplots. Users
            working on applications in a specific part of the UK are advised to
            use the maps to determine whether the overall partitioning is
            representative of their area of interest — for example, for some
            indices the GCMs are dominant overall but the RCMs play a more
            important role in urban areas.
          </li>
          <li>
            For indices where the GCMs contribute an appreciable component of
            the total ensemble variation, examine maps of the first two GCM{" "}
            <HashLink to="/plot-help#epp">ensemble principal patterns</HashLink>{" "}
            (EPPs) and their scores. If the first EPP accounts for most of the
            GCM-attributable variation, then this suggests choosing ensemble
            members driven by GCMs with scores extending along the range of the
            first EPP (horizontal axis); if the second EPP also accounts for a
            substantial amount of variation, then the selected GCMs should also
            have scores extending along the range of the second EPP (vertical
            axis). A similar approach can be used to identify an appropriate
            subset of RCMs, in situations where these contribute appreciably to
            the ensemble variation.
          </li>
          <li>
            For indices where the residual component of variation is dominant in
            the region of interest, users may either select a random sample of
            ensemble runs, or examine{" "}
            <HashLink to="/plot-help#stamp">stamp plots</HashLink> of the
            individual runs and select a sample that spans the range of values.
          </li>
          <li>
            In situations where the guidelines above do not allow users to
            identify a clear subset of ensemble members to use,{" "}
            <HashLink to="/plot-help#taylor">Taylor diagrams</HashLink> and{" "}
            <Link to="/plot-help">maps of biases</Link> for the selected indices
            over the evaluation period may be used to identify the runs that
            best reproduce relevant aspects of historical climate by comparison
            with observations: there is an argument for prioritising these runs
            for inclusion in any sample. It is worth noting, however, that a
            GCM:RCM combination that reproduces historical climate well is not
            necessarily guaranteed to provide the most reliable estimates of
            future change. Selecting runs solely on the basis of past
            performance is not necessarily the most appropriate strategy
            therefore: this is why we suggest first identifying the combinations
            that span the range of future change in an ensemble.
          </li>
        </ul>
      </div>
    </Container>
  );
}
