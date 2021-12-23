import React from 'react';
import Select from 'react-select';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// TODO: Some of these might not be relevant anymore
// TODO: Check grouping makes sense
const plotvarOptions = [
  {
    label: "Temperature",
    options: [
      { value: 'tas', label: 'tas - Daily Near-Surface Air Temperature' },
      { value: 'tasmax', label: 'tasmax - Daily Maximum Near-Surface Air Temperature' },
      { value: 'tasmin', label: 'tasmin - Daily Minimum Near-Surface Air Temperature' },
      { value: 'tas99', label: 'tas99 - 99th Percentile of Daily Mean Near-Surface Air Temperatures' },
      { value: 'tas01', label: 'tas01 - 1st Percentile of Daily Mean Near-Surface Air Temperatures' },
    ],
  },
  {
    label: "Precipitation",
    options: [
      { value: 'pr', label: 'pr - Daily precipitation rate' },
      { value: 'prc', label: 'prc - Daily rate of Convective Precipitation' },
      { value: 'prsn', label: 'prsn - Daily rate of precipitation falling as snow' },
      { value: 'fwd', label: 'fwd - Proportion of wet days' },
      { value: 'r99ptot', label: 'r99ptot - r99ptot' }
    ],
  },
  {
    label: "Wind",
    options: [
      { value: 'sfcWind', label: 'sfcWind - Near-Surface Wind Speed' },
      { value: 'wsgsmax', label: 'wsgsmax - Daily Maximum Near-Surface Wind Speed of Gust' },
      { value: 'uas', label: 'uas - Eastward Near-Surface Wind' },
      { value: 'vas', label: 'vas - Northward Near-Surface Wind' }
    ],
  },
  {
    label: "Other",
    options: [
      { value: 'clt', label: 'clt - Total Cloud Fraction' },
      { value: 'hurs', label: 'hurs - Near-Surface Relative humidity' },
      { value: 'psl', label: 'psl - Sea Level Pressure' },
      { value: 'rss', label: 'rss - Net surface long wave flux' },
      { value: 'rls', label: 'rls - Net surface long wave flux' }
    ]
  }
];

// TODO: This list will be updated as more plots are generated. It covers ~100
// years.
const periodOptions = [
  { value: '19890101-20081231', label: '1989-2008' }
]

// TODO: Check season names are OK with research team as typical users might be
// more familiar with value names e.g. DJF
const seasonOptions = [
  { value: 'DJF', label: 'DJF - Winter' },
  { value: 'MAM', label: 'MAM - Spring' },
  { value: 'JJA', label: 'JJA - Summer' },
  { value: 'SON', label: 'SON - Autumn' }
]

// TODO: More plot types to be added.
const plottypeOptions = [
  { value: 'eval-boxplots', label: 'Box plots of spread within each ensemble' },
  { value: 'eval-maps', label: 'Maps of observations & biases' },
  { value: 'eval-pca-gcm', label: 'PCA GCM plots' },
  { value: 'eval-pca-rcm', label: 'PCA RCM plots' },
  { value: 'eval-Taylor', label: 'Taylor plots' }
]


function OptionsRow({setPlotvars, setSeasons, setPeriods, setPlottypes}){
/*
  Displays 4 dropdown lists to let user make a selection. Users should be able
  to select several options in each least.
*/
  return(
    <Row className="pt-4">
       <Col xs={5}>
         <Select
           options={plotvarOptions}
           onChange={setPlotvars}
           placeholder="Select variable"
           isClearable = {false}
           isMulti
           />
       </Col>
       <Col>
         <Select
           options={seasonOptions}
           onChange={setSeasons}
           placeholder="Select season"
           isClearable = {false}
           isMulti
           />
       </Col>
       <Col>
         <Select
           options={periodOptions}
           onChange={setPeriods}
           placeholder="Select period"
           isClearable = {false}
           isMulti
           />
       </Col>
       <Col xs={3}>
         <Select
           options={plottypeOptions}
           onChange={setPlottypes}
           placeholder="Select plot type"
           isClearable = {false}
           isMulti
           />
       </Col>
     </Row>
  );
};

export default OptionsRow;