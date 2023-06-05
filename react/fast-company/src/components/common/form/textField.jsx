import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({
  label,
  type,
  id,
  name,
  value,
  onChange,
  error,
  placeholder
}) => {
  const [showPassword, setShowPassword] = useState(false);

  id = id || name;

  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "");
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <div className="mb-3">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="input-group has-validation">
        <input
          type={showPassword ? "text" : type}
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          className={getInputClasses()}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={toggleShowPassword}
          >
            <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}></i>
          </button>
        )}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

TextField.defaultProps = {
  type: "text",
  id: undefined
};

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string
};

export default TextField;
