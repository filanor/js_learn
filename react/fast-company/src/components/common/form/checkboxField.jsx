import React from "react";
import PropTypes from "prop-types";

const CheckboxField = ({ label, name, children, error, value, onChange }) => {
  const handleChange = ({ target }) => {
    onChange({ name: name, value: !value });
  };

  const getInputClasses = () => {
    return "form-check-input" + (error ? " is-invalid" : "");
  };

  return (
    <div className="form-check mb-3">
      {label && <label>{label}</label>}
      <input
        name={name}
        className={getInputClasses()}
        type="checkbox"
        value=""
        id={name}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor={name}>
        {children}
      </label>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

CheckboxField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  error: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func
};

export default CheckboxField;
