export function validator(data, config) {
  console.log(config);
  const errors = {};

  function validate(validateMethod, data, config) {
    let statusValidation;
    switch (validateMethod) {
      case "isRequired": {
        statusValidation = data.trim() === "";
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
  }

  for (const fieldName in data) {
    console.log(fieldName);

    for (const validateMethod in config[fieldName]) {
      console.log("dsfasdfdsfa");
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

  return errors;
}
