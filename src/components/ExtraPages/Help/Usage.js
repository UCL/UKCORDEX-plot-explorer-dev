import React from "react";
import { Container } from "react-bootstrap";
import "../ExtraPages.css";
import { UsageInfo } from "./Contents/UsageInfo";

export default function Usage() {
  return (
    <Container className="about">
      <div>
        <h1>{UsageInfo.title}</h1>
        <p>{UsageInfo.contents[0]}</p>
        <p>{UsageInfo.contents[1]}</p>

        <ul>
          <li>
            Having identified the most relevant{" "}
            <a href="/indices-help"> climate indices</a>, seasons and{" "}
            <a href="/#">time period</a>, examine the boxplots showing the
            corresponding overall UK-averaged distribution(s) of future changes
            for the time period of interest. This will indicate the extent to
            which any <a href="/plot-help">ensemble</a> captures the full range
            of variation; for the EuroCORDEX ensemble, the boxplots can also
            give a preliminary indication as to whether one potential source of
            variation (e.g. the GCMs) is highly dominant, since this will
            manifest itself via clustering of the plotted values by colour or
            plotting symbol.
          </li>
          <li>
            Examine maps showing the{" "}
            <a href="/plot-help">ANOVA decomposition</a> of the ensemble for the
            indices of interest. The plot titles quantify the overall
            partitioning of variation across the UK, and hence formalise the
            preliminary indications from the boxplots. Users working on
            applications in a specific part of the UK are advised to use the
            maps to determine whether the overall partitioning is representative
            of their area of interest — for example, for some indices the GCMs
            are dominant overall but the RCMs play a more important role in
            urban areas.
          </li>
          <li>
            For indices where the GCMs contribute an appreciable component of
            the total ensemble variation, examine maps of the first two GCM{" "}
            <a href="/plot-help">ensemble principal patterns</a> (EPPs) and
            their scores. If the first EPP accounts for most of the
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
            ensemble runs, or examine <a href="/plot-help">stamp plots</a> of
            the individual runs and select a sample that spans the range of
            values.
          </li>
          <li>
            In situations where the guidelines above do not allow users to
            identify a clear subset of ensemble members to use,{" "}
            <a href="/plot-help">Taylor diagrams</a> and{" "}
            <a href="/plot-help">maps of biases</a> for the selected indices
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
