// const javaScriptDescription =
// "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.";

const javaScriptDescription = "Привет";

const sliceIndex =
  javaScriptDescription.length % 2 === 0
    ? javaScriptDescription.length / 2
    : Math.floor(javaScriptDescription.length / 2);

let newLine = javaScriptDescription
  .slice(0, sliceIndex)
  .replace(" ", "")
  .replace("а", "A")
  .repeat(3);

console.log("Новая строка:", newLine);
console.log("Средний символ строки: ", Math.floor(newLine.length / 2));
