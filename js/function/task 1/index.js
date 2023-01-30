//Function declaration
function getName1(name) {
  return `Имя равно ${name}`;
}

//Function expression
const getName2 = function (name) {
  return `Имя равно ${name}`;
};

//Arrow function expression
const getName3 = (name) => `Имя равно ${name}`;

console.log(getName1("Ivan"));
console.log(getName2("Ivan"));
console.log(getName3("Ivan"));
