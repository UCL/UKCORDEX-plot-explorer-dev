// This file contains the contents that will be displayed in the options row
// Any of these can be moved to a separate file if they grow too large
// Plot variables and seasons have extra parameters for styling

// Plot Variables
export const plotvarOptionsContents = [
  {
    label: "Core variables",
    options: [
      { tag: "core", value: "clt", label: "cloud cover (%)" },
      { tag: "core", value: "hurs", label: "relative humidity at 1.5m" },
      { tag: "core", value: "huss", label: "specific humidity at 1.5m" },
      { tag: "core", value: "pr", label: "daily precipitation rate" },
      { tag: "core", value: "prsn", label: "daily snowfall rate" },
      { tag: "core", value: "psl", label: "sea level pressure" },
      { tag: "core", value: "rls", label: "net surface long wave flux" },
      { tag: "core", value: "rss", label: "net surface short wave flux" },
      { tag: "core", value: "sfcWind", label: "wind speed at 10m" },
      { tag: "core", value: "snw", label: "lying snow" },
      { tag: "core", value: "tas", label: "mean daily air temperature at 1.5m" },
      { tag: "core", value: "tasmax", label: "maximum daily air temperature at 1.5m" },
      { tag: "core", value: "tasmin", label: "minimum daily air temperature at 1.5m" },
      //     { tag: "core", value: "uas", label: "eastward wind at 10m" },
      //     { tag: "core", value: "vas", label: "northward wind at 10m" },
    ],
  },
  {
    label: "Temperature",
    options: [
      { tag: "temp", value: "csdi", label: "number of cold spell days" },
      { tag: "temp", value: "dtr", label: "diurnal temperature range" },
      { tag: "temp", value: "hwdi", label: "number of heatwave days" },
      { tag: "temp", value: "maxtmax", label: "maximum near-surface air temperature on the hottest day" },
      { tag: "temp", value: "mintmin", label: "minimum near-surface air temperature on the coldest day" },
      { tag: "temp", value: "str", label: "seasonal temperature range" },
      { tag: "temp", value: "tas", label: "mean daily near-surface air temperature", },
      { tag: "temp", value: "tasmax", label: "maximum daily near-surface air temperature", },
      { tag: "temp", value: "tasmin", label: "minimum daily near-surface air temperature", },
      { tag: "temp", value: "tas01", label: "1st percentile of daily mean near-surface air temperatures" },
      { tag: "temp", value: "tas99", label: "99th percentile of daily mean near-surface air temperatures" },
      { tag: "temp", value: "tmax10p", label: "number of cold days" },
      { tag: "temp", value: "tmax90p", label: "number of hot days" },
      { tag: "temp", value: "tmin10p", label: "number of cold nights" },
      { tag: "temp", value: "tmin90p", label: "number of warm nights" },
    ],
  },
  {
    label: "Precipitation",
    options: [
      { tag: "precip", value: "dsmax", label: "maximum length of dry spell" },
      // { tag: "precip", value: "dsmed", label: "median length of dry spell" },
      { tag: "precip", value: "fwd", label: "proportion of wet days" },
      { tag: "precip", value: "pdd", label: "proportion of dry days followed by a dry day", },
      { tag: "precip", value: "pr", label: "daily precipitation rate" },
      { tag: "precip", value: "prc", label: "daily rate of convective precipitation ", },
      { tag: "precip", value: "prcprop", label: "proportion of rainfall due to convection", },
      { tag: "precip", value: "prcptot", label: "accumulated precipitation" },
      { tag: "precip", value: "pww", label: "proportion of wet days followed by a wet day", },
      { tag: "precip", value: "rx1day", label: "maximum one-day precipitation", },
      { tag: "precip", value: "rx5day", label: "maximum five-day precipitation", },
      { tag: "precip", value: "r95ptot", label: "proportion of precipitation falling on days exceeding 95th percentile", },
      { tag: "precip", value: "r99ptot", label: "proportion of precipitation falling on days exceeding 99th percentile", },
      { tag: "precip", value: "sdii", label: "wet-day precipitation rate" },
      { tag: "precip", value: "wsmax", label: "maximum length of wet spell" },
      // { tag: "precip", value: "wsmed", label: "median length of wet spell" },
    ],
  },
  {
    label: "Wind",
    options: [
      { tag: "wind", value: "maxsfcWindmax", label: "maximum sustained wind speed", },
      { tag: "wind", value: "maxwsgsmax", label: "maximum speed of wind gust" },
      { tag: "wind", value: "ncalm", label: "number of calm days" },
      { tag: "wind", value: "nwindy", label: "number of windy days" },
      { tag: "wind", value: "sfcWind", label: "near-surface wind speed" },
      // { tag: "wind", value: "uas", label: "eastward near-surface wind" },
      // { tag: "wind", value: "vas", label: "northward near-surface wind" },
    ],
  },
  {
    label: "Extreme Precipitation",
    options: [
      { tag: "extreme_pr", value: "rx1dayrl20", label: "20-year return level of 1-day precipitation" },
      { tag: "extreme_pr", value: "rx1dayrl50", label: "50-year return level of 1-day precipitation" },
//       { tag: "extreme_pr", value: "rx1dayrp20", label: "20-year return period of current 20-year return level of 1-day precipitation " },
//       { tag: "extreme_pr", value: "rx1dayrp50",  label: "50-year return period of current 50-year return level of 1-day precipitation" },
      { tag: "extreme_pr", value: "rx1dayloc", label: "location parameter for extreme 1-day precipitation" },
      { tag: "extreme_pr", value: "rx1dayshape", label: "shape parameter for extreme 1-day precipitation" },
      { tag: "extreme_pr", value: "rx1dayscale", label: "scale parameter for extreme 1-day precipitation" },
      { tag: "extreme_pr", value: "rx5dayrl20", label: "20-year return level of 5-day accumulated precipitation" },
      { tag: "extreme_pr", value: "rx5dayrl50", label: "50-year return level of 5-day accumulated precipitation" },
//       { tag: "extreme_pr", value: "rx5dayrp20", label: "20-year return period of current 20-year return level of 5-day accumulated precipitation" },
//       { tag: "extreme_pr", value: "rx5dayrp50", label: "50-year return period of current 50-year return level of 5-day accumulated precipitation" },
      { tag: "extreme_pr", value: "rx5dayloc", label: "location parameter for extreme 5-day accumulated precipitation" },
      { tag: "extreme_pr", value: "rx5dayshape", label: "shape parameter for extreme 5-day accumulated precipitation" },
      { tag: "extreme_pr", value: "rx5dayscale", label: "scale parameter for extreme 5-day accumulated precipitation" },
    ],
  },
  {
    label: "Extreme Wind",
    options: [
      { tag: "extreme_wind", value: "placeholder", label: "indices of extreme wind speeds will appear here" },
      // {
      //   tag: "extreme_wind",
      //   value: "maxwsgsmaxrl20",
      //   label: "20-year return level of gust speeds",
      // },
      // {
      //   tag: "extreme_wind",
      //   value: "maxwsgsmaxrl50",
      //   label: "50-year return level of gust speeds",
      // },
      // {
      //   tag: "extreme_wind",
      //   value: "maxwsgsmaxrp20",
      //   label:
      //     "20-year return period of current 20-year return level of gust speeds ",
      // },
      // {
      //   tag: "extreme_wind",
      //   value: "maxwsgsmaxrp50",
      //   label:
      //     "50-year return period of current 50-year return level of gust speeds ",
      // },
      // {
      //   tag: "extreme_wind",
      //   value: "maxwsgsmaxloc",
      //   label: "location parameter for extreme gust speeds",
      // },
      // {
      //   tag: "extreme_wind",
      //   value: "maxwsgsmaxshape",
      //   label: "shape parameter for extreme gust speeds",
      // },
      // {
      //   tag: "extreme_wind",
      //   value: "maxwsgsmaxscale",
      //   label: "scale parameter for extreme gust speeds",
      // },
      // {
      //   tag: "extreme_wind",
      //   value: "maxsfcWindmaxrl20",
      //   label: "20-year return level of extreme sustained wind speeds",
      // },
      // {
      //   tag: "extreme_wind",
      //   value: "maxsfcWindmaxrl50",
      //   label: "50-year return level of extreme sustained wind speeds",
      // },
      // {
      //   tag: "extreme_wind",
      //   value: "maxsfcWindmaxrp20",
      //   label:
      //     "20-year return period of current 20-year return level of extreme sustained wind speeds",
      // },
      // {
      //   tag: "extreme_wind",
      //   value: "maxsfcWindmaxrp50",
      //   label:
      //     "50-year return period of current 50-year return level of extreme sustained wind speeds",
      // },
      // {
      //   tag: "extreme_wind",
      //   value: "maxsfcWindmaxloc",
      //   label: "location parameter for extreme sustained wind speeds",
      // },
      // {
      //   tag: "extreme_wind",
      //   value: "maxsfcWindmaxshape",
      //   label: "shape parameter for extreme sustained wind speeds",
      // },
      // {
      //   tag: "extreme_wind",
      //   value: "maxsfcWindmaxscale",
      //   label: "scale parameter for extreme sustained wind speeds",
      // },
    ],
  },
  {
    label: "Other",
    options: [
      { tag: "other", value: "cdd", label: "cooling degree-days" },
      { tag: "other", value: "gdd", label: "growing degree-days" },
      { tag: "other", value: "gsl", label: "growing season length" },
      { tag: "other", value: "hdd", label: "heating degree-days" },
      // { tag: "other", value: "mrso", label: "soil moisture at depths of up to 1m", },
      // { tag: "other", value: "ndhi", label: "number of dangerously hot days" },
      // { tag: "other", value: "ndrought", label: "number of occurrences of drought", },
      { tag: "other", value: "pet", label: "potential evapotranspiration" },
      // { tag: "other", value: "spei6", label: "6-month standardised precipitation-evapotranspiration index", },
      { tag: "other", value: "spi6", label: "6-month standardised precipitation index", },
      { tag: "other", value: "tr", label: "number of tropical nights (> 20°C)" },
    ],
  },
];

// Region/Resolution
export const regionOptionsContents = [
  { value: "12km", label: "12km grid" },
  // { value: "country", label: "Country" },
  // { value: "region", label: "Administrative region" },
  // { value: "river", label: "River basin" },
];

// Time Periods
export const periodOptionsContents = [
  {
    value: "19890101-20081231",
    label: "Evaluation period: 1989-2008",
    title: "(1989-2008)",
  },
  {
    value: "19801201-20101130",
    label: "Baseline period: 1981-2010",
    title: "(1981-2010)",
  },
  {
    value: "19891201-20191130",
    label: "1990-2019",
    title: "(1990-2019 vs 1981-2010)",
  },
  {
    value: "19991201-20291130",
    label: "2000-2029",
    title: "(2000-2029 vs 1981-2010)",
  },
  {
    value: "20091201-20391130",
    label: "2010-2039",
    title: "(2010-2039 vs 1981-2010)",
  },
  {
    value: "20191201-20491130",
    label: "2020-2049",
    title: "(2020-2049 vs 1981-2010)",
  },
  {
    value: "20291201-20591130",
    label: "2030-2059",
    title: "(2030-2059 vs 1981-2010)",
  },
  {
    value: "20391201-20691130",
    label: "2040-2069",
    title: "(2040-2069 vs 1981-2010)",
  },
  {
    value: "20491201-20791130",
    label: "2050-2079",
    title: "(2050-2079 vs 1981-2010)",
  },
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
];

// Seasons
export const seasonOptionsContents = [
  { value: "DJF", label: "winter" },
  { value: "MAM", label: "spring" },
  { value: "JJA", label: "summer" },
  { value: "SON", label: "autumn" },
  { value: "annual", label: "annual" },
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
    label: "Maps of ensemble mean",
    icon: "/icons/obs_and_bias.png",
    title: "Ensemble mean of ",
  },
  {
    value: "ens-sd-maps",
    label: "Maps of ensemble SD",
    icon: "/icons/obs_and_bias.png",
    title: "Ensemble standard deviation of ",
  },
  {
    value: "eurocordex-anova",
    label: "EuroCORDEX ANOVA",
    icon: "/icons/eurocordex-anova.png",
    title: "Decomposition of sources of variance in EuroCORDEX ensemble: ",
  },
  {
    value: "epp-gcm",
    label: "GCM EPPs",
    icon: "/icons/pca_gcm.png",
    title: "GCM EPPs of ",
  },
  {
    value: "epp-rcm",
    label: "RCM EPPs",
    icon: "/icons/pca_rcm.png",
    title: "RCM EPPs of ",
  },
  {
    value: "epp-ukcp",
    label: "UKCP18 EPPs",
    icon: "/icons/ukcp-epp.png",
    title: "UKCP18 12km EPPs of ",
  },
  {
    value: "Taylor-diagram",
    label: "Taylor diagram",
    icon: "/icons/taylor.png",
    title: "Taylor diagram of ",
  },
  {
    value: "stampplots-cmip5",
    label: "Maps of CMIP5 ensemble members",
    icon: "/icons/cmip5.png",
    title: "Maps of ",
  },
  {
    value: "stampplots-eurocordex",
    label: "Maps of EuroCORDEX ensemble members",
    icon: "/icons/eurocordex-stampplots.png",
    title: "Maps of ",
  },
  {
    value: "stampplots-ukcp",
    label: "Maps of UKCP18 ensemble members",
    icon: "/icons/ukcp-stampplots.png",
    title: "Maps of ",
  },
];
