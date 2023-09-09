import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const MultiSelectField = ({
  options,
  onChange,
  name,
  label,
  defaultOptions
}) => {
  const handleChange = (value) => {
    onChange({ name: name, value });
  };

  return (
    { options } && (
      <div className="mb-3">
        {label && <label htmlFor={name}>{label}</label>}
        <Select
          closeMenuOnSelect={false}
          isMulti
          options={options}
          defaultValue={defaultOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleChange}
          name={name}
        />
      </div>
    )
  );
};

MultiSelectField.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  defaultOptions: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default React.memo(MultiSelectField);
