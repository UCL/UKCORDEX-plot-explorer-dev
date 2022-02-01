import React from "react";
import Select from "react-select";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./OptionsRow.css";
import {
  periodOptionsContents,
  plottypeOptionsContents,
  plotvarOptionsContents,
  regionOptionsContents,
  seasonOptionsContents,
} from "./OptionsRowContents";



// Styling for plotvar dropdown
const formatPlotvarLabel = ({ value, label, tag }) => (
  <div style={{ display: "flex" }}>
    <div className={`tag  ${tag}`}>{value}</div>
    <div className="description">{label}</div>
  </div>
);

// Styling Season Dropdown
const formatSeasonLabel = ({ label, extra }) => (
  <div style={{ display: "flex" }}>
    <div className={`tag  ${label}`}>{label}</div>
    <div className="description">{extra}</div>
  </div>
);

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
          options={regionOptionsContents}
          onChange={setRegion}
          placeholder="Select region"
          isClearable={false}
          isMulti
        />
      </Col>
      <Col xs={4}>
        <Select
          options={plotvarOptionsContents}
          formatOptionLabel={formatPlotvarLabel}
          classNamePrefix={plotvarOptionsContents}
          onChange={setPlotvars}
          placeholder="Select variable"
          isClearable={false}
          isMulti
        />
      </Col>
      <Col>
        <Select
          options={seasonOptionsContents}
          formatOptionLabel={formatSeasonLabel}
          onChange={setSeasons}
          placeholder="Select season"
          isClearable={false}
          isMulti
        />
      </Col>
      <Col>
        <Select
          options={periodOptionsContents}
          onChange={setPeriods}
          placeholder="Select period"
          isClearable={false}
          isMulti
        />
      </Col>
      <Col>
        <Select
          options={plottypeOptionsContents}
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
