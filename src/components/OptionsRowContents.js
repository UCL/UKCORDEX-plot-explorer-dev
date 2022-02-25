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
  { value: "value", label: "12km grid" },
  { value: "value", label: "Country" },
  { value: "value", label: "Administrative region" },
  { value: "value", label: "River basin" },
];

// Time Periods
export const periodOptionsContents = [
  { value: "19890101-20081231", label: "1989-2008" },
];

// Seasons
export const seasonOptionsContents = [
  { value: "DJF", label: "Winter", extra: "Dec/Jan/Feb" },
  { value: "MAM", label: "Spring", extra: "Mar/Apr/May" },
  { value: "JJA", label: "Summer", extra: "Jun/Jul/Aug" },
  { value: "SON", label: "Autumn", extra: "Sep/Oct/Nov" },
];

// Plot Types
export const plottypeOptionsContents = [
  {
    value: "eval-boxplots",
    label: "Box plots of spread within each ensemble",
    icon: "/icons/boxplots_of_spread.png",
  },
  {
    value: "eval-maps",
    label: "Maps of observations & biases",
    icon: "/icons/obs_and_bias.png",
  },
  {
    value: "eval-pca-gcm",
    label: "PCA GCM plots",
    icon: "/icons/pca_gcm.png",
  },
  {
    value: "eval-pca-rcm",
    label: "PCA RCM plots",
    icon: "/icons/pca_rcm.png",
  },
  {
    value: "eval-Taylor",
    label: "Taylor plots",
    icon: "/icons/taylor.png",
  },
];
