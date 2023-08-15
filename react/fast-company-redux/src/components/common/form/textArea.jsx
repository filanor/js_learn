import React from "react";
import PropTypes from "prop-types";

const TextArea = ({
  label,
  id,
  name,
  value,
  onChange,
  error,
  rows,
  placeholder,
  labelClasses,
  ...rest
}) => {
  id = id || name;

  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "");
  };

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={name} className={labelClasses}>
          {label}
        </label>
      )}
      <div className="input-group has-validation">
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          className={getInputClasses()}
          placeholder={placeholder}
          rows={rows}
          {...rest}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

TextArea.defaultProps = {
  id: undefined,
  rows: 3
};

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  rows: PropTypes.number,
  labelClasses: PropTypes.string
};

export default React.memo(TextArea);
