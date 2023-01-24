// Number
const age = 20;
console.log(String(age), Number(age), Boolean(age));

// String
const name = "John";
console.log(String(name), Number(name), Boolean(name));

// Simbol
const symbol = Symbol("id");
console.log(String(symbol), /*Number(symbol),*/ Boolean(symbol));

// Null
const nullObject = null;
console.log(String(nullObject), Number(nullObject), Boolean(nullObject));

// Undefined
const undefinedObject = undefined;
console.log(
  String(undefinedObject),
  Number(undefinedObject),
  Boolean(undefinedObject)
);

// Boolean
const booleanObject = true;
console.log(
  String(booleanObject),
  Number(booleanObject),
  Boolean(booleanObject)
);

// Object
const objectObject = { name: "John", age: 20 };
console.log(String(objectObject), Number(objectObject), Boolean(objectObject));

// BigInteger
const bigIntegerObject = BigInt("1234567890123456789012345678901234567890");
console.log(
  String(bigIntegerObject),
  Number(bigIntegerObject),
  Boolean(bigIntegerObject)
);
