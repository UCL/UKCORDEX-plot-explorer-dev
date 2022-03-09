// This file contains the contents that will be displayed in the options row
// Any of these can be moved to a separate file if they grow too large
// Plot variables and seasons have extra parameters for styling

// Plot Variables
export const plotvarOptionsContents = [
  {
    label: "Temperature",
    options: [
      {
        tag: "temp",
        value: "tas",
        label: "Daily Near-Surface Air Temperature",
      },
      {
        tag: "temp",
        value: "tasmax",
        label: "Daily Maximum Near-Surface Air Temperature",
      },
      {
        tag: "temp",
        value: "tasmin",
        label: "Daily Minimum Near-Surface Air Temperature",
      },
      {
        tag: "temp",
        value: "tas99",
        label: "99th Percentile of Daily Mean Near-Surface Air Temperatures",
      },
      {
        tag: "temp",
        value: "tas01",
        label: "1st Percentile of Daily Mean Near-Surface Air Temperatures",
      },
    ],
  },
  {
    label: "Precipitation",
    options: [
      { tag: "precip", value: "pr", label: "Daily precipitation rate" },
      {
        tag: "precip",
        value: "prc",
        label: "Daily rate of Convective Precipitation",
      },
      {
        tag: "precip",
        value: "prsn",
        label: "Daily rate of precipitation falling as snow",
      },
      { tag: "precip", value: "fwd", label: "Proportion of wet day" },
      { tag: "precip", value: "r99ptot", label: "r99ptot" },
    ],
  },
  {
    label: "Wind",
    options: [
      { tag: "wind", value: "sfcWind", label: "Near-Surface Wind Speed" },
      {
        tag: "wind",
        value: "wsgsmax",
        label: "Daily Maximum Near-Surface Wind Speed of Gust",
      },
      { tag: "wind", value: "uas", label: "Eastward Near-Surface Wind" },
      { tag: "wind", value: "vas", label: "Northward Near-Surface Wind" },
    ],
  },
  {
    label: "Other",
    options: [
      { tag: "other", value: "clt", label: "Total Cloud Fraction" },
      { tag: "other", value: "hurs", label: "Near-Surface Relative humidity" },
      { tag: "other", value: "psl", label: "Sea Level Pressure" },
      { tag: "other", value: "rss", label: "Net surface short wave flux" },
      { tag: "other", value: "rls", label: "Net surface long wave flux" },
    ],
  },
];

// Region/Resolution
export const regionOptionsContents = [
  { value: "12km", label: "12km grid" },
  { value: "country", label: "Country" },
  { value: "admin", label: "Administrative region" },
  { value: "river", label: "River basin" },
];

// Time Periods
export const periodOptionsContents = [
  {
    value: "1.5",
    label: "1.5°C above pre-industrial",
    title: "after GMST increase of 1.5°C ",
  },
  {
    value: "2",
    label: "2°C above pre-industrial",
    title: "after GMST increase of 2°C ",
  },
  {
    value: "3",
    label: "3°C above pre-industrial",
    title: "after GMST increase of 3°C ",
  },
  {
    value: "19890101-20081231",
    label: "1989-2008",
    title: "19890101-20081231",
  },
  {
    value: "19891201-20191130",
    label: "1989-2019",
    title: "19891201-20191130",
  },
  {
    value: "19991201-20291130",
    label: "1999-2029",
    title: "19991201-20291130",
  },
  {
    value: "20091201-20391130",
    label: "2009-2039",
    title: "20091201-20391130",
  },
  {
    value: "20191201-20491130",
    label: "2019-2049",
    title: "20191201-20491130",
  },
  {
    value: "20291201-20591130",
    label: "2029-2059",
    title: "20291201-20591130",
  },
  {
    value: "20391201-20691130",
    label: "2039-2069",
    title: "20391201-20691130",
  },
  {
    value: "20491201-20791130",
    label: "2049-2079",
    title: "20491201-20791130",
  },
];

// Seasons
export const seasonOptionsContents = [
  { value: "DJF", label: "Winter" },
  { value: "MAM", label: "Spring" },
  { value: "JJA", label: "Summer" },
  { value: "SON", label: "Autumn" },
  { value: "annual", label: "Annual" },
];

// Plot Types
export const plottypeOptionsContents = [
  {
    value: "boxplots",
    label: "Box plots of spread within each ensemble",
    icon: "/icons/boxplots_of_spread.png",
    title: "Boxplots of ",
  },
  {
    value: "ens-mean-maps",
    label: "Mean Maps of observations & biases",
    icon: "/icons/obs_and_bias.png",
    title: "Ensemble mean",
  },
  {
    value: "ens-sd-maps",
    label: "SD Maps of observations & biases",
    icon: "/icons/obs_and_bias.png",
    title: "Ensemble standard deviation of ",
  },
  {
    value: "epp-gcm",
    label: "PCA GCM plots",
    icon: "/icons/pca_gcm.png",
    title: "EPP GCM of ",
  },
  {
    value: "epp-rcm",
    label: "PCA RCM plots",
    icon: "/icons/pca_rcm.png",
    title: "EPP RCM of ",
  },
  {
    value: "Taylor-diagram",
    label: "Taylor plots",
    icon: "/icons/taylor.png",
    title: "Taylor diagram of ",
  },
  {
    value: "epp-ukcp",
    label: "UKCP18 EPPs",
    icon: "/icons/ukcp-epp.png",
    title: "UKCP18 12km EPPs of ",
  },
  {
    value: "eurocordex-anova",
    label: "EuroCORDEX Anova",
    icon: "/icons/eurocordex-anova.png",
    title: "Decomposition of sources of variance in EuroCORDEX ensemble of ",
  },
  {
    value: "stampplots-cmip5",
    label: "CMIP5 Maps",
    icon: "/icons/cmip5.png",
    title: "Maps of ",
  },
  {
    value: "stampplots-eurocordex",
    label: "EuroCORDEX Maps",
    icon: "/icons/eurocordex-stampplots.png",
    title: "Maps of ",
  },
  {
    value: "stampplots-ukcp",
    label: "UKCP18 Maps",
    icon: "/icons/ukcp-stampplots.png",
    title: "Maps of ",
  },
];
