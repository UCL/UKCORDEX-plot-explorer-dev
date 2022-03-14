// Information to populate the Indices Help page

export const IndicesInfoHead = {
  title: "Information about Indices",
  subtitle: "How the Indices are Calculated",
  intro:
    "Unless stated otherwise, a seasonal time series of each index is first computed from daily model output on the native grid, then averaged over each time period to obtain a set of seasonal model climatologies. These seasonal climatologies are then regridded onto a common 12km grid (OSGB) using area weighting, so that output from models on different grids can be compared directly. For regional climate model output (EuroCORDEX and UKCP18 12km runs), a land-sea mask is applied to remove any so that only cells with 1 more than 50% land coverage are included; values in these land surface cells are regridded onto the UK land surface grid. For global climate model output (CMIP5 and UKCP18 60km runs), the low-resolution data is regridded directly onto the land surface 12km grid. No bias correction has been carried out. To facilitate comparison between models that use different calendars, any indices that depend on the number of days in the season or year (for example, number of tropical nights tr or accumulated precipitation prcptot) are standardised by averaging over the number of days in the model output and multiplying by 90 (for seasonal indices) or 365 (for annual indices).",
  segue: "The following describes the indices for which plots are available.",
};

export const CoreVarsContents = {
  category: "Core Variables", // these go into a table
  tb1: [
    { value: "clt", label: "Total cloud cover", unit: "%" },
    {
      value: "hurs",
      label: "Near-surface relative humidity at 1.5m",
      unit: "%",
    },
    {
      value: "huss",
      label: "Near-surface specific humidity at 1.5,",
      unit: "",
    },
    { value: "snw", label: "Amount of snow on the ground", unit: "mm*" },
    { value: "psl", label: "Sea level pressure", unit: "hPa" },
    { value: "rls", label: "Net surface long wave flux", unit: "wm^-2" },
    { value: "rss", label: "Net surface short wave flux", unit: "wm^-2" },
    { value: "sfcWind", label: "Wind speed at 10m ", unit: "ms^-1" },
  ],
  tb2: [
    { value: "prsn", label: "Snowfall amount", unit: "mm/day" },
    { value: "uas", label: "Eastward wind at 10m ", unit: "ms^-1" },
    { value: "vas", label: "Northward wind at 10m", unit: "ms^-1" },
    { value: "pr", label: "Daily precipitation rate", unit: "mm/day" },
    {
      value: "tas",
      label: "Mean daily near-surface air temperature",
      unit: "°C",
    },
    {
      value: "tasmax",
      label: "Maximum daily near-surface air temperature",
      unit: "°C",
    },
    {
      value: "tasmin",
      label: "Minimum daily near-surface air temperature",
      unit: "°C",
    },
  ],
};

export const IndicesInfoContents = [
  {
    category: "Temperature",
    foreword:
      "In defining the following indices of temperature, let tas_ij be the daily mean temperature on day i in season j; the daily minimum and maximum temperature on day i in season j are denoted by tmin_ij and tmax_ij respectively.",
    options: [
      {
        value: "tas",
        label: "mean daily near-surface air temperature",
      },
      {
        value: "csdi",
        label: "number of cold spell days",
        description:
          "Count the number of days in season j where tasij < 2◦C for more than two consecutive days",
      },
      {
        value: "hwdi",
        label: "number of heatwave days",
        description:
          "Count the number of days in season j where tmax_ij > t_1 and tmin_ij > t_2 for two or more consecutive days, where t_1 and t_2 are thresholds defined for each region as in the table below.  These thresholds are taken from thePublic Health England heatwave plan.",
        image: "/content_images/hwdi_table.png",
        link: "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/888668/Heatwave_plan_for_England_2020.pdf",
      },
      {
        value: "maxtmax",
        label: "maximum near-surface air temperature on the hottest day",
        description: "The highest daily temperature tmax_ij in each season j.",
      },
      {
        value: "mintmin",
        label: "minimum near-surface air temperature on the coldest day",
        description: "The lowest daily temperature tmin_ij in each season j.",
      },
      {
        value: "tasmax",
        label: "maximum daily near-surface air temperature",
      },
      {
        value: "tasmin",
        label: "minimum daily near-surface air temperature",
      },
      {
        value: "tas01",
        label: "1st percentile of daily mean near-surface air temperatures",
        description:
          "This index is not computed by averaging a seasonal time series over the period of interest. Instead, the daily mean temperatures tas during the season of interest for all years in the selected time period are pooled, and the 1st percentile of the pooled seasonal temperatures is calculated",
      },
      {
        value: "tas99",
        label: "99th percentile of daily mean near-surface air temperatures",
        description:
          "This index is not computed by averaging a seasonal time series over the period of interest. Instead, the daily mean temperatures tas during the season of interest for all years in the selected time period are pooled, and the 99th percentile of the pooled seasonal temperatures is calculated.",
      },
      {
        value: "tmax10p",
        label: "number of cold days",
        description:
          "Let q_{10}(tmax_ir) be the c10th percentile of daily maximum temperatures in a five-day window centred on calendar day i in the reference period r (1980-2010). Count the number of days where tmax_ij < q_{10}(tmax_ir) for the season of interest j.",
      },
      {
        value: "tmax90p",
        label: "number of hot days",
        description:
          "Let q_{90}(tmax_ir) be the 90th percentile of daily maximum temperatures in a five-day window centred on calendar day i in the reference period r (1980-2010). Count the number of days where tmax_ij > q_{90}(tmax_ir) for the season of interest j.",
      },
      {
        value: "tmin10p",
        label: "number of cold nights",
        description:
          "Let q_{10}(tmin_ir) be the 10th percentile of daily minimum temperatures in a five-day window centred on calendar day i in the reference period r (1980-2010). Count the number of days where tmin_ij < q_{10}(tmin_ir) for the season of interest j.",
      },
      {
        value: "tmin90p",
        label: "number of warm nights",
        description:
          "Let q_{90}(tmin[ir]) be the 90th percentile of daily minimum temperatures in a five-day window centred on calendar day i in the reference period r (1980-2010). Count the number of days where tmin_ij > q_{90}(tmin_ir) for the season of interest j.",
      },
    ],
  },
  {
    category: "Precipitation",
    foreword:
      "In defining the following indices of precipitation, let pr_ij be the daily precipitation amount in mm on day i in period j, and let prc_ij be the daily precipitation amount arising from convective processes in mm on day i in period j. pr_ij geq 1 denotes the subset of the pr_ij for which pr_ij geq 1.",
    options: [
      { value: "pr", label: "daily precipitation rate" },
      {
        value: "prcptot",
        label: "accumulated precipitation",
        description: "Sum of pr_ij geq 1 in season j.",
      },
      {
        value: "fwd",
        label: "proportion of wet days",
        description: "The proportion of days for which pr_ij geq 1.",
      },
      {
        value: "prc",
        label: "daily rate of convective precipitation ",
      },
      {
        value: "prcprop",
        label: "proportion of rainfall due to convection",
        description:
          "Let prc_ij be the daily precipitation amount due to convective rainfall on day i in period j. The proportion of total precipitation due to convective processes in period j is the sum of prc_ij geq 1 in period j divided by the total precipitation in period j, prcptot.",
      },
      {
        value: "pww",
        label: "proportion of wet days followed by a wet day",
        description:
          "Where n is the total number of days in period j, and pr_ij > 1 is an indicator function with value one if pr_ij > 1, and zero otherwise. The complementary transition probability is P_j(wd) = 1-P_j(ww)",
        image: "/content_images/pww_math.png",
      },
      {
        value: "pdd",
        label: "proportion of dry days followed by a dry day",
        description:
          "Where n is the total number of days in period j, and pr_ij > 1 is an indicator function with value one if pr_ij > 1, and zero otherwise. The complementary transition probability is P_j(dw) = 1-P_j(dd)",
        image: "/content_images/pdd_math.png",
      },
      {
        value: "rx1day",
        label: "maximum one-day precipitation",
        description:
          "The maximum one-day precipitation for season j is max (pr_ij).",
      },
      {
        value: "rx5day",
        label: "maximum five-day precipitation",
        description:
          "Let pr5_ij be the total precipitation amount for the five-day interval ending on day i in season j. The maximum five-day values for period j are max(pr5_ij).",
      },
      {
        value: "r95ptot",
        label:
          "proportion of precipitation falling on days exceeding 95th percentile",
        description:
          "Let q_{95}(pr_r) be the 95th percentile of daily wet-day precipitation in the reference period r (1980-2010). The total precipitation exceeding the 95th percentile is the sum of  pr_ij geq q_{95}(pr_r).",
      },
      {
        value: "r99ptot",
        label:
          "proportion of precipitation falling on days exceeding 99th percentile",
        description:
          "Let q_{99}(pr_r) be the 99th percentile of daily wet-day precipitation in the reference period r (1980-2010). The total precipitation exceeding the 99th percentile is the sum of  pr_ij geq q_{99}(pr_r).",
      },
      {
        value: "sdii",
        label: "wet-day precipitation rate",
        description: "Mean of pr_ij geq 1 in season j.",
      },
      {
        value: "dsmed",
        label: "median length of dry spell",
        description:
          "Count the median number of consecutive days where pr_ij < 1.",
      },
      {
        value: "dsmax",
        label: "maximum length of dry spell",
        description:
          "Count the largest number of consecutive days where pr_ij < 1.",
      },
      {
        value: "wsmed",
        label: "median length of wet spell",
        description:
          "Count the median number of consecutive days where pr_ij geq 1.",
      },
      {
        value: "wsmax",
        label: "maximum length of wet spell",
        description:
          "Count the largest number of consecutive days where pr_ij geq 1.",
      },
    ],
  },
  {
    category: "Wind",
    foreword:
      "In defining the following indices of wind speed, let swind be the  mean daily wind speed on day i in season j, let maxwind be the maximum daily wind speed on day i in season j, and let maxgust be the maximum gust strength on day i in season j.",
    options: [
      { value: "sfcWind", label: "near-surface wind speed" },
      { value: "uas", label: "eastward near-surface wind" },
      { value: "vas", label: "northward near-surface wind" },
      {
        value: "maxsfcWindmax",
        label: "maximum sustained wind speed",
        description:
          "The maximum sustained daily wind speed for season j is max(maxwind).",
      },
      {
        value: "maxwsgsmax",
        label: "maximum speed of wind gust",
        description:
          "The maximum daily gust speed for season j is max(maxgust).",
      },
      {
        value: "ncalm",
        label: "number of calm days",
        description:
          "The number of calm days in  season j is the count of days where swind leq 2ms^{-1}.",
      },
      {
        value: "nwindy",
        label: "number of windy days",
        description:
          "The number of windy days in  season j is the count of days where swind geq 10.8ms^{-1}.",
      },
    ],
  },
  {
    category: "Extreme Events",
    foreword:
      "Indices of extreme wind and precipitation are not calculated per season and then averaged over the selected time period. Instead, let max(idx_j) be the maximum daily value of some index idx_ij in each season j, and let {max(idx_j)} denote the set of all such maxima during the time period of interest: this set contains 30 seasonal maxima for future periods, and 20 maxima for the evaluation period. A generalised extreme value distribution citep[GEV:][]{Coles2001} is fitted to the seasonal maxima {max(idx_j)} at each grid cell, and the parameters of this distribution are used to calculate selected return periods (the expected number of years between occurrences of  events of a given magnitude) and return levels (the magnitude of a once-in-x-years event).    Indices of extreme events are available for precipitation indices rx1day and rx5day, and for wind indices sfcWindmax and wsgsmax. For any of these indices, denoted here by the generic index 'idx', the following plots are available:",
    options: [
      {
        value: "idx_rl30",
        label: "30-year return level of idx",
      },
      {
        value: "idx_rl50",
        label: "50-year return level of idx",
      },
      {
        value: "idx_rp30",
        label:
          "30-year return level of idx rl30 from the baseline period (1980-2010)",
      },
      {
        value: "idx_rp50",
        label:
          "Future return period of idx rl50 from the baseline period (1980-2010)",
      },
      {
        value: "idx_loc",
        label: "Location parameter of fitted GEV distribution",
      },
      {
        value: "idx_shape",
        label: "Shape parameter of fitted GEV distribution",
      },
      {
        value: "idx_scale",
        label: "Scale parameter of fitted GEV distribution",
      },
    ],
  },
  {
    category: "Impact Relevant Indices",

    options: [
      {
        value: "mrso",
        label: "soil moisture at depths of up to 1m",
        description:
          "Let mrso_ij be the total soil moisture at a depth of up to 1m for day i in period j. The mean soil moisture in season j is the average of mrso_ij in season j.",
      },
      {
        value: "ndhi",
        label: "number of dangerously hot days",
        description:
          "Let T denote the daily maximum surface air temperature tasmaxij and R the relative humidity hursij for day i in period j. Then the heat index for day i in period j is HI_ij = c1 + c2T + c3R + c4TR + c5T2 + c6R2 + c7T2R + c8TR2 + c9T2R2 where the {ci}are constants as given in equation 1 of ?. The heat index is only valid for air temperatures above 20◦C and will be reported as NA when T ≤20◦C. The number of days in period j on which the heat index is dangerously high is given by the count of HIij ≥32◦C.",
      },
      {
        value: "ndrought",
        label: "number of occurrences of drought",
        description:
          "Drought occurrences will be the count of the number of occasions on which the monthly time series of spei6 falls below a threshold in the interval (-2, -1.5) in each season.",
      },
      {
        value: "pet",
        label: "potential evapotranspiration",
        description:
          "PET is computed for each day i in season j using the REC: McGuinness-Bordne equation, where λ is a constant representing the latent heat of vaporisation and S(i) 0 is the extraterrestrial radiation on day i, estimated from the time of year and latitude. Seasonal PET time series are computed by averaging the daily values within season j.",
        image: "/content_images/pet_math.png",
      },
      {
        value: "spi6",
        label: "6-month standardised precipitation index",
        description:
          "This index is computed in the same way as spei6, but using a six-month rolling average of prcptot rather than the climatic water balance.",
      },
      {
        value: "spei6",
        label: "6-month standardised precipitation-evapotranspiration index",
        description:
          "The climatic water balance is calculated for each month by subtracting the total PET in that month from the total accumulated precipitation prcptot, and computing a six-month rolling average. This six-month average water balance is fitted to a log-logistic distribution in order to transform the original values to standardised units. Seasonal time series of spei6 are computed by averaging the monthly values within each season.",
      },
      {
        value: "tr",
        label: "number of tropical nights (>20°C)",
        description: "the number of days in season j where tasmin_ij > 20◦C.",
      },
    ],
  },
  {
    category: "Degree Days and Season Lengths",
    foreword:
      "Plots of these indices are only provided at annual frequency. Note that, unlike all other indices, the growing season length and degree-days are based on calendar years, rather than meteorological years",
    options: [
      {
        value: "gsl",
        label: "growing season length",
        description:
          "The growing season length for year y is the count of the number of days between the first occurrence of at least six consecutive days where tasiy > 5.6◦C and the first occurrence after 1 July of at least six consecutive days where tasiy < 5.6◦C.",
      },
      {
        value: "gdd",
        label: "growing degree-days",
        description:
          "The number of growing degree-days in year y is ∑i max(0,tasiy −5.6).",
      },
      {
        value: "cdd",
        label: "cooling degree-days",
        description:
          "The number of cooling degree-days in year y is ∑i max(0,tasiy −22).",
      },
      {
        value: "hdd",
        label: "heating degree-days",
        description:
          "The number of heating degree-days in year y is ∑i max(0,15.5 −tasiy).",
      },
    ],
  },
];
