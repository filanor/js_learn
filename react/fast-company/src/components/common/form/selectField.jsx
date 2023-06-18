import React from "react";
import PropTypes from "prop-types";

const SelectField = ({
  options,
  label,
  defaultOption,
  name,
  classes,
  onChange,
  value,
  error
}) => {
  let optionsArray = [];
  if (!Array.isArray(options) && typeof options === "object") {
    optionsArray = Object.keys(options).map((optionName) => ({
      label: options[optionName].name,
      value: options[optionName]._id
    }));
  } else {
    optionsArray = options;
  }

  const getInputClasses = (classes) => {
    return classes + (error ? " is-invalid" : "");
  };

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className="mb-3">
      {label && <label htmlFor={name}>{label}</label>}
      <select
        className={getInputClasses(classes)}
        aria-label="Default select example"
        name={name}
        onChange={handleChange}
        value={value}
      >
        {/* <option value={defaultOption.value} disabled>
          {defaultOption.label}
        </option> */}

        {optionsArray &&
          optionsArray.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SelectField.defaultProps = {
  defaultOption: "Выберите...",
  classes: "form-select"
};

SelectField.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  label: PropTypes.string,
  defaultOption: PropTypes.object,
  classes: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
};

export default React.memo(SelectField);
