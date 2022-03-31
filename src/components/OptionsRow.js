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
const formatSeasonLabel = ({ label, value }) => (
  <div style={{ display: "flex" }}>
    <div className={`tag  ${value}`}>{value}</div>
    <div className="description">{label}</div>
  </div>
);

// Styling Plot Type Dropdown
const formatPlotTypeLabel = ({ label, icon }) => (
  <div style={{ display: "flex" }}>
    <div className="icon">
      <img src={`${process.env.PUBLIC_URL}${icon}`} alt={icon} height={25} />
    </div>
    <div className="ptype-desc">{label}</div>
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
    <Row className="pt-4 mb-4">
      {/* Plot variables dropdown */}
      <Col sm={3} xs={5}>
        <Select
          options={plotvarOptionsContents}
          formatOptionLabel={formatPlotvarLabel}
          classNamePrefix={plotvarOptionsContents}
          onChange={setPlotvars}
          placeholder="Indices"
          isClearable={false}
          isMulti
          className="plotdropdown"
        />
      </Col>
      {/* Plot types dropdown */}
      <Col sm={3} xs={5}>
        <Select
          options={plottypeOptionsContents}
          onChange={setPlottypes}
          formatOptionLabel={formatPlotTypeLabel}
          placeholder="Plot types"
          isClearable={false}
          isMulti
          className="plotdropdown"
        />
      </Col>
      {/* Spatial aggregation dropdown */}
      <Col sm={2} xs={3}>
        <Select
          options={regionOptionsContents}
          onChange={setRegion}
          placeholder="Spatial aggregations"
          isClearable={false}
          isMulti
          className="plotdropdown"
        />
      </Col>
      {/* Season dropdown */}
      <Col sm={2} xs={3}>
        <Select
          options={seasonOptionsContents}
          formatOptionLabel={formatSeasonLabel}
          onChange={setSeasons}
          placeholder="Seasons"
          isClearable={false}
          isMulti
          className="plotdropdown"
        />
      </Col>
      {/* Period dropdown */}
      <Col sm={2} xs={3}>
        <Select
          options={periodOptionsContents}
          onChange={setPeriods}
          placeholder="Time periods"
          isClearable={false}
          isMulti
          className="plotdropdown"
        />
      </Col>
    </Row>
  );
}

export default OptionsRow;
