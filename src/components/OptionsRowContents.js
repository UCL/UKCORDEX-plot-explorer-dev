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
      { tag: "core", value: "uas", label: "eastward wind at 10m" },
      { tag: "core", value: "vas", label: "northward wind at 10m" },
    ],
  },
  {
    label: "Temperature",
    options: [
      { tag: "temp", value: "tas", label: "mean daily near-surface air temperature", },
      { tag: "temp", value: "tasmax", label: "maximum daily near-surface air temperature", },
      { tag: "temp", value: "tasmin",   label: "minimum daily near-surface air temperature", },
      { tag: "temp", value: "csdi", label: "number of cold spell days" },
      { tag: "temp", value: "hwdi", label: "number of heatwave days" },
      { tag: "temp",
        value: "maxtmax",
        label: "maximum near-surface air temperature on the hottest day",
      },
      {
        tag: "temp",
        value: "mintmin",
        label: "minimum near-surface air temperature on the coldest day",
      },

      {
        tag: "temp",
        value: "tas01",
        label: "1st percentile of daily mean near-surface air temperatures",
      },
      {
        tag: "temp",
        value: "tas99",
        label: "99th percentile of daily mean near-surface air temperatures",
      },
      { tag: "temp", value: "tmax10p", label: "number of cold days" },
      { tag: "temp", value: "tmax90p", label: "number of hot days" },
      { tag: "temp", value: "tmin10p", label: "number of cold nights" },
      { tag: "temp", value: "tmin90p", label: "number of warm nights" },
    ],
  },
  {
    label: "Precipitation",
    options: [
      { tag: "precip", value: "pr", label: "daily precipitation rate" },
      { tag: "precip", value: "prcptot", label: "accumulated precipitation" },
      { tag: "precip", value: "fwd", label: "proportion of wet days" },
      { tag: "precip", value: "prc", label: "daily rate of convective precipitation ", },
      { tag: "precip", value: "prcprop", label: "proportion of rainfall due to convection", },
      { tag: "precip", value: "pdd", label: "proportion of dry days followed by a dry day", },
      { tag: "precip", value: "pww", label: "proportion of wet days followed by a wet day",},
      { tag: "precip", value: "r95ptot", label: "proportion of precipitation falling on days exceeding 95th percentile", },
      { tag: "precip", value: "r99ptot", label: "proportion of precipitation falling on days exceeding 99th percentile", },
      { tag: "precip", value: "rx1day", label: "maximum one-day precipitation",},
      { tag: "precip", value: "rx5day", label: "maximum five-day precipitation", },
      { tag: "precip", value: "r95ptot", label: "proportion of precipitation falling on days exceeding 95th percentile", },
      { tag: "precip", value: "sdii", label: "wet-day precipitation rate" },
      { tag: "precip", value: "dsmed", label: "median length of dry spell" },
      { tag: "precip", value: "dsmax", label: "maximum length of dry spell" },
      { tag: "precip", value: "wsmed", label: "median length of wet spell" },
      { tag: "precip", value: "wsmax", label: "maximum length of wet spell" },
    ],
  },
  {
    label: "Wind",
    options: [
      { tag: "wind", value: "sfcWind", label: "near-surface wind speed" },
      { tag: "wind", value: "uas", label: "eastward near-surface wind" },
      { tag: "wind", value: "vas", label: "northward near-surface wind" },
      { tag: "wind", value: "maxsfcWindmax", label: "maximum sustained wind speed", },
      { tag: "wind", value: "maxwsgsmax", label: "maximum speed of wind gust" },
      { tag: "wind", value: "ncalm", label: "number of calm days" },
      { tag: "wind", value: "nwindy", label: "number of windy days" },
    ],
  },
  {
    label: "Extreme Precipitation",
    options: [
      {
        tag: "extreme_pr",
        value: "rx1day_rl30",
        label: "30-year return level of 1-day precipitation",
      },
      {
        tag: "extreme_pr",
        value: "rx1day_rl50",
        label: "50-year return level of 1-day precipitation",
      },
      {
        tag: "extreme_pr",
        value: "rx1day_rp30",
        label:
          "30-year return period of current 30-year return level of 1-day precipitation ",
      },
      {
        tag: "extreme_pr",
        value: "rx1day_rp50",
        label:
          "50-year return period of current 50-year return level of 1-day precipitation ",
      },
      {
        tag: "extreme_pr",
        value: "rx1day_loc",
        label: "location parameter for extreme 1-day precipitation",
      },
      {
        tag: "extreme_pr",
        value: "rx1day_shape",
        label: "shape parameter for extreme 1-day precipitation",
      },
      {
        tag: "extreme_pr",
        value: "rx1day_scale",
        label: "scale parameter for extreme 1-day precipitation",
      },
      {
        tag: "extreme_pr",
        value: "rx5day_rl30",
        label: "30-year return level of 5-day accumulated precipitation",
      },
      {
        tag: "extreme_pr",
        value: "rx5day_rl50",
        label: "50-year return level of 5-day accumulated precipitation",
      },
      {
        tag: "extreme_pr",
        value: "rx5day_rp30",
        label:
          "30-year return period of current 30-year return level of 5-day accumulated precipitation",
      },
      {
        tag: "extreme_pr",
        value: "rx5day_rp50",
        label:
          "50-year return period of current 50-year return level of 5-day accumulated precipitation",
      },
      {
        tag: "extreme_pr",
        value: "rx5day_loc",
        label: "location parameter for extreme 5-day accumulated precipitation",
      },
      {
        tag: "extreme_pr",
        value: "rx5day_shape",
        label: "shape parameter for extreme 5-day accumulated precipitation",
      },
      {
        tag: "extreme_pr",
        value: "rx5day_scale",
        label: "scale parameter for extreme 5-day accumulated precipitation",
      },
    ],
  },
  {
    label: "Extreme Wind",
    options: [
      {
        tag: "extreme_wind",
        value: "maxwsgsmax_rl30",
        label: "30-year return level of gust speeds",
      },
      {
        tag: "extreme_wind",
        value: "maxwsgsmax_rl50",
        label: "50-year return level of gust speeds",
      },
      {
        tag: "extreme_wind",
        value: "maxwsgsmax_rp30",
        label:
          "30-year return period of current 30-year return level of gust speeds ",
      },
      {
        tag: "extreme_wind",
        value: "maxwsgsmax_rp50",
        label:
          "50-year return period of current 50-year return level of gust speeds ",
      },
      {
        tag: "extreme_wind",
        value: "maxwsgsmax_loc",
        label: "location parameter for extreme gust speeds",
      },
      {
        tag: "extreme_wind",
        value: "maxwsgsmax_shape",
        label: "shape parameter for extreme gust speeds",
      },
      {
        tag: "extreme_wind",
        value: "maxwsgsmax_scale",
        label: "scale parameter for extreme gust speeds",
      },
      {
        tag: "extreme_wind",
        value: "maxsfcWindmax_rl30",
        label: "30-year return level of extreme sustained wind speeds",
      },
      {
        tag: "extreme_wind",
        value: "maxsfcWindmax_rl50",
        label: "50-year return level of extreme sustained wind speeds",
      },
      {
        tag: "extreme_wind",
        value: "maxsfcWindmax_rp30",
        label:
          "30-year return period of current 30-year return level of extreme sustained wind speeds",
      },
      {
        tag: "extreme_wind",
        value: "maxsfcWindmax_rp50",
        label:
          "50-year return period of current 50-year return level of extreme sustained wind speeds",
      },
      {
        tag: "extreme_wind",
        value: "maxsfcWindmax_loc",
        label: "location parameter for extreme sustained wind speeds",
      },
      {
        tag: "extreme_wind",
        value: "maxsfcWindmax_shape",
        label: "shape parameter for extreme sustained wind speeds",
      },
      {
        tag: "extreme_wind",
        value: "maxsfcWindmax_scale",
        label: "scale parameter for extreme sustained wind speeds",
      },
    ],
  },
  {
    label: "Other",
    options: [
      { tag: "other", value: "gsl", label: "growing season length" },
      { tag: "other", value: "gdd", label: "growing degree-days" },
      { tag: "other", value: "cdd", label: "cooling degree-days" },
      { tag: "other", value: "hdd", label: "heating degree-days" },
      {
        tag: "other",
        value: "mrso",
        label: "soil moisture at depths of up to 1m",
      },
      { tag: "other", value: "ndhi", label: "number of dangerously hot days" },
      {
        tag: "other",
        value: "ndrought",
        label: "number of occurrences of drought",
      },
      { tag: "other", value: "pet", label: "potential evapotranspiration" },
      {
        tag: "other",
        value: "spi6",
        label: "6-month standardised precipitation index",
      },
      {
        tag: "other",
        value: "spei6",
        label: "6-month standardised precipitation-evapotranspiration index",
      },
      { tag: "other", value: "tr", label: "number of tropical nights (>20°C)" },
    ],
  },
];

// Region/Resolution
export const regionOptionsContents = [
  { value: "12km", label: "12km grid" },
  { value: "country", label: "Country" },
  { value: "region", label: "Administrative region" },
  { value: "river", label: "River basin" },
];

// Time Periods
export const periodOptionsContents = [
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
    label: "Maps of ensemble mean",
    icon: "/icons/obs_and_bias.png",
    title: "Ensemble mean",
  },
  {
    value: "ens-sd-maps",
    label: "Maps of ensemble SD",
    icon: "/icons/obs_and_bias.png",
    title: "Ensemble standard deviation of ",
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
    value: "Taylor-diagram",
    label: "Taylor diagram",
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
    label: "EuroCORDEX ANOVA",
    icon: "/icons/eurocordex-anova.png",
    title: "Decomposition of sources of variance in EuroCORDEX ensemble of ",
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
