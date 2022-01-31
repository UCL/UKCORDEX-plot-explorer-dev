import React from "react";
import Select from "react-select";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./OptionsRow.css";
import { plotvarOptionsContents } from "./OptionsRowContents";
// TODO: Some of these might not be relevant anymore
// TODO: Check grouping makes sense
// const plotvarOptions = plotvarOptionsContents.map(({ section, options }) => (
//   {section = section, options = options, value = options.value, label = options.label}
// ))

// the following returns an error: Line 6:3:  Expected an assignment or function call and instead saw an expression
// const plotvarOptions = () => {
//   return (
//     <>
//       {plotvarOptionsContents.map(({ section, options, tag }) => [
//         {
//           section: section,
//           options: [
//             {
//               value: options.value,
//               label: (
//                 <>
//                   {" "}
//                   <span className={`tag ${tag}`}> {options.value} </span>
//                   <span>{options.label}</span>
//                 </>
//               ),
//             },
//           ],
//         },
//       ])}
//       ;
//     </>
//   );
// };

// this causes the same error
// plotvarOptionsContents.map(({ section, options, tag }) => {
//   const plotvarOptions = [
//     {
//       section: section,
//       options: [
//         {
//           value: options.value,
//           label: (
//             <>
//               {" "}
//               <span className={`tag ${tag}`}> {options.value} </span>
//               <span>{options.label}</span>
//             </>
//           ),
//         },
//       ],
//     },
//   ];
//   return <plotvarOptions />;
// });

// and again
// const plotvarOptions = () => {
//   return plotvarOptionsContents.map(({ section, options, tag }) => {
//     [
//       {
//         section: section,
//         options: [
//           {
//             value: options.value,
//             label: (
//               <>
//                 {" "}
//                 <span className={`tag ${tag}`}> {options.value} </span>
//                 <span>{options.label}</span>
//               </>
//             ),
//           },
//         ],
//       },
//     ];
//     return <plotvarOptions />;
//   });
// };

//[
//   {
//     label: "Temperature",
//     options: [
//       { value: 'tas', label: <> <span className="tag temp">tas</span><span className="description"> Daily Near-Surface Air Temperature</span> </> },
//       { value: 'tasmax', label: <><span className="tag temp">tasmax</span> <span className="description"> Daily Maximum Near-Surface Air Temperature</span></> },
//       { value: 'tasmin', label: <><span className="tag temp">tasmin</span> <span className="description"> Daily Minimum Near-Surface Air Temperature</span> </>},
//       { value: 'tas99', label: <> <span className="tag temp">tas99</span> <span className="description"> 99th Percentile of Daily Mean Near-Surface Air Temperatures</span> </>},
//       { value: 'tas01', label: <> <span className="tag temp">tas01</span> <span className="description"> 1st Percentile of Daily Mean Near-Surface Air Temperatures</span> </>},
//     ],
//   },
//   {
//     label: "Precipitation",
//     options: [
//       { value: 'pr', label: <> <span className="tag precip">pr</span> <span className="description"> Daily precipitation rate</span> </>},
//       { value: 'prc', label: <> <span className="tag precip">prc</span> <span className="description"> Daily rate of Convective Precipitation</span> </>},
//       { value: 'prsn', label: <> <span className="tag precip">prsn</span> <span className="description"> Daily rate of precipitation falling as snow</span> </>},
//       { value: 'fwd', label: <> <span className="tag precip">fwd</span> <span className="description"> Proportion of wet days</span></> },
//       { value: 'r99ptot', label: <> <span className="tag precip">r99ptot</span> <span className="description">r99ptot</span> </> }
//     ],
//   },
//   {
//     label: "Wind",
//     options: [
//       { value: 'sfcWind', label: <> <span className="tag wind">sfcWind</span> <span className="description"> Near-Surface Wind Speed</span> </>},
//       { value: 'wsgsmax', label: <> <span className="tag wind">wsgsmax</span> <span className="description"> Daily Maximum Near-Surface Wind Speed of Gust</span> </>},
//       { value: 'uas', label: <> <span className="tag wind">uas</span> <span className="description"> Eastward Near-Surface Wind</span> </>},
//       { value: 'vas', label: <> <span className="tag wind">vas</span> <span className="description"> Northward Near-Surface Wind</span> </>}
//     ],
//   },
//   {
//     label: "Other",
//     options: [
//       { value: 'clt', label: <> <span className="tag other">clt</span> <span className="description"> Total Cloud Fraction</span> </>},
//       { value: 'hurs', label: <> <span className="tag other">hurs</span> <span className="description"> Near-Surface Relative humidity</span> </>},
//       { value: 'psl', label: <> <span className="tag other">psl</span> <span className="description"> Sea Level Pressure</span> </>},
//       { value: 'rss', label: <> <span className="tag other">rss</span> <span className="description"> Net surface long wave flux</span> </>},
//       { value: 'rls', label: <> <span className="tag other">rls</span> <span className="description"> Net surface long wave flux</span> </>}
//     ]
//   }
// ];

// TODO: This list will be updated as more plots are generated. It covers ~100
// years.
const periodOptions = [{ value: "19890101-20081231", label: "1989-2008" }];

// TODO: Check season names are OK with research team as typical users might be
// more familiar with value names e.g. DJF
const seasonOptions = [
  { value: "DJF", label: "DJF - Winter" },
  { value: "MAM", label: "MAM - Spring" },
  { value: "JJA", label: "JJA - Summer" },
  { value: "SON", label: "SON - Autumn" },
];

// TODO: More plot types to be added.
const plottypeOptions = [
  { value: "eval-boxplots", label: "Box plots of spread within each ensemble" },
  { value: "eval-maps", label: "Maps of observations & biases" },
  { value: "eval-pca-gcm", label: "PCA GCM plots" },
  { value: "eval-pca-rcm", label: "PCA RCM plots" },
  { value: "eval-Taylor", label: "Taylor plots" },
];

// TODO: actual values to be added.
const regionOptions = [{ value: "region value", label: "region" }];

function OptionsRow({
  setPlotvars,
  setSeasons,
  setPeriods,
  setPlottypes,
  setRegion,
}) {
  /*
  Displays 4 dropdown lists to let user make a selection. Users should be able
  to select several options in each least.
*/
  return (
    <Row className="pt-4">
      <Col>
        <Select
          options={regionOptions}
          onChange={setRegion}
          placeholder="Select region"
          isClearable={false}
          isMulti
        />
      </Col>
      <Col xs={5}>
        <Select
          options={plotvarOptionsContents}
          onChange={setPlotvars}
          placeholder="Select variable"
          isClearable={false}
          isMulti
        />
      </Col>
      <Col>
        <Select
          options={seasonOptions}
          onChange={setSeasons}
          placeholder="Select season"
          isClearable={false}
          isMulti
        />
      </Col>
      <Col>
        <Select
          options={periodOptions}
          onChange={setPeriods}
          placeholder="Select period"
          isClearable={false}
          isMulti
        />
      </Col>
      <Col xs={2}>
        <Select
          options={plottypeOptions}
          onChange={setPlottypes}
          placeholder="Select plot type"
          isClearable={false}
          isMulti
        />
      </Col>
    </Row>
  );
}

export default OptionsRow;
