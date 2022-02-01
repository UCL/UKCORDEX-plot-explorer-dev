// Information to populate the Plot Help page

export const PlotInfoHead = {
  title: "Information on Plots Used",
  intro:
    "Explanations of the various plots shown using the Plot Explorer can be found below",
};

export const PlotInfoContents = [
  {
    plot: "Maps of Observations and Biases",
    description:
      "Systematic differences between the ensembles — both in spatial patterns common to all ensemble members and in the magnitude of biases — are identified using maps of the mean biases within each ensemble, after regridding to the 12km OSGB grid. During the evaluation period, the mean bias in each ensemble is presented as a map alongside the HadUK-Grid climatology, while for future periods, maps of the mean change in each ensemble are provided ",
  },
  {
      plot: "Box plots of spread within each ensemble",
      description: 
        "The distribution of the average values of an index (or, when considering future periods, of the average changes in an index) across the UK are summarised in boxplots like that shown in the figure below. The boxes indicate the central 50% of the distribution of UK-averaged values of the index within each ensemble, with both the mean and median values marked; the whiskers of the boxplot extend to values lying 1.5 times the interquartile range beyond the upper and lower quartiles, with any values lying beyond the whiskers assumed to be outliers. The shaded region behind each boxplot shows a kernel density estimate of the empirical distribution of the values, which provides more detail about the shape of the distribution: for example, by highlighting bimodality within an ensemble. Each point represents the mean value of the index across the UK land surface for a single run, with points corresponding to the output of a single GCM jittered horizontally for ease of viewing. For plots of biases, the UK-wide average of the HadUK-Grid climatology is shown by a dashed red line; for plots of changes, the dashed red line indicates no change.",
    },
    {
      plot: "Plots of spread of biases in each run",
      description:
        "These plots help examine biases in the percentiles of the distributions of daily temperatures simulated by each run, in order to evaluate how well the models capture the natural variability of the climate. Biases in the mean temperature typically affect the whole temperature distribution, so boxplots of biases in each index tend to look rather similar, and it can be difficult to identify patterns in the behaviour of individual runs or models. Instead, it is convenient to visualise the information from all indices relating to a particular temperature distribution simultaneously, as in the spread plots in the figure below. In these plots, the distance between the first and 99th percentiles of the temperature distribution of each run is represented by a vertical line, with the mean temperature marked by a symbol denoting the run, with each ensemble appearing in a separate panel. The corresponding values from the HadUK-Grid dataset are marked with horizontal red lines across all panels. The width of the interval after subtracting the bias in the mean temperature is marked with red dashes, so that the width of the interval between the two percentiles can be compared directly for all runs. The same approach is used when evaluating the biases in the diurnal temperature range simulated by each run. Patterns of changes in the percentiles of the temperature distribution, and of changes in the diurnal temperature range, are less closely related to changes in the mean temperature, and so this approach is not used when considering changes in the distribution",
  },
];
