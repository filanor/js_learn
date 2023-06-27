import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { validator } from "../../../utils/validator";

const FormComponent = ({
  children,
  validatorConfig,
  onSubmit,
  defaultData
}) => {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState(defaultData || {});

  const validate = useCallback(
    (data) => {
      const errors = validator(data, validatorConfig);
      setErrors(errors);
      return Object.keys(errors).length === 0;
    },
    [validatorConfig, setErrors]
  );

  const handleChange = useCallback((target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  }, []);

  const handleKeydown = useCallback((e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const form = e.target.form;
      const indexField = Array.prototype.indexOf.call(form, e.target);
      form.elements[indexField + 1].focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate(data);
    if (!isValid || Object.keys(data).length === 0) return;
    onSubmit(data);
    setData({});
  };

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      validate(data);
    }
  }, [data]);

  const isValid = Object.keys(errors).length === 0 && errors;

  const clonedElements = React.Children.map(children, (child) => {
    let config = {};

    const hasDefaultValue = child.props.defaultValue !== undefined;
    if (hasDefaultValue && !data[child.props.name]) {
      setData((prevState) => ({
        ...prevState,
        [child.props.name]: child.props.defaultValue
      }));
    }

    const childType = typeof child.type;

    if (childType === "object") {
      if (!child.props.name) {
        throw new Error("Name property is required fro field component", child);
      }

      config = {
        ...child.props,
        onChange: handleChange,
        value: data[child.props.name] || "",
        error: errors[child.props.name],
        onKeyDown: handleKeydown
      };
    }
    if (childType === "string") {
      if (child.type === "button") {
        if (child.props.type === "submit" || child.props.type === undefined) {
          config = {
            ...child.props,
            disabled: !isValid
          };
        }
      }
    }

    return React.cloneElement(child, config);
  });

  return <form onSubmit={handleSubmit}>{clonedElements}</form>;
};

FormComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onSubmit: PropTypes.func,
  validatorConfig: PropTypes.object,
  defaultData: PropTypes.object
};
export default FormComponent;
