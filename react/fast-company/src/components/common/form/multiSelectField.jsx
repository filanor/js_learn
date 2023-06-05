import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { toArray } from "../../../utils/toArray";

const MultiSelectField = ({
  options,
  onChange,
  name,
  label,
  defaultOptions
}) => {
  const optionsArray = toArray(options);
  let defaultOptionsArray = [];
  if (defaultOptions) {
    defaultOptionsArray = toArray(defaultOptions);
  }

  const handleChange = (value) => {
    onChange({ name: name, value });
  };

  return (
    <div className="mb-3">
      {label && <label htmlFor={name}>{label}</label>}
      <Select
        closeMenuOnSelect={false}
        isMulti
        options={optionsArray}
        defaultValue={defaultOptionsArray}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
        name={name}
      />
    </div>
  );
};

MultiSelectField.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  defaultOptions: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default MultiSelectField;
