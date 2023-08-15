export function toArray(options) {
  let optionsArray = [];
  if (!Array.isArray(options) && typeof options === "object") {
    optionsArray = Object.keys(options).map((option) => ({
      label: options[option].name,
      value: options[option]._id
    }));
    return optionsArray;
  }
  return options.map((option) => {
    return {
      label: option.name,
      value: option._id
    };
  });
}
