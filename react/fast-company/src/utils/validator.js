export function validator(data, config) {
  const errors = {};

  function validate(validateMethod, data, config) {
    let statusValidation;
    switch (validateMethod) {
      case "isRequired": {
        if (typeof data === "boolean") {
          statusValidation = !data;
        } else {
          statusValidation = data.trim() === "";
        }
        break;
      }
      case "isEmail": {
        const emailReg = /^\S+@\S+\.\S+$/g;
        statusValidation = !emailReg.test(data.trim());
        break;
      }
      case "isCapitalSymbol": {
        const capitalLetterReg = /[A-Z]+/g;
        statusValidation = !capitalLetterReg.test(data.trim());
        break;
      }
      case "isContainNumber": {
        const digitReg = /\d+/g;
        statusValidation = !digitReg.test(data.trim());
        break;
      }
      case "min": {
        statusValidation = config.value > data.length;
        break;
      }
      default:
        break;
    }
    if (statusValidation) return config.message;
    return null;
  }

  if (config) {
    for (const fieldName in data) {
      for (const validateMethod in config[fieldName]) {
        const error = validate(
          validateMethod,
          data[fieldName],
          config[fieldName][validateMethod]
        );

        if (error && !errors[fieldName]) {
          errors[fieldName] = error;
        }
      }
    }

    for (const ruleName in config) {
      if (!data[ruleName]) {
        errors[ruleName] = "Поле обязательно для заполнения";
      }
    }
  }

  return errors;
}
