/**
 * Необходимо посчитать сумму кубов всех чисел в массиве. Например, 
 * для массива [1, 5, 9] должен быть следующий результат: 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

Реши данную задачу 4-мя способами:

Через цикл for
Через цикл for...of
Через метод forEach()
Через метод reduce()
Для данного массива numbers сумма кубов должна равняться 1158411.
 */

const numbers = [10, 4, 100, -5, 54, 2];

//for
let forAnswer = 0;
for (let i = 0; i < numbers.length; i++) {
  forAnswer += numbers[i] ** 3;
}
console.log("при for: ", forAnswer);

//for...of
let forOfAnswer = 0;
for (const number of numbers) {
  forOfAnswer += number ** 3;
}
console.log("при for..of: ", forOfAnswer);

// Через метод forEach()
let forEachAnswer = 0;
numbers.forEach((number) => (forEachAnswer += number ** 3));
console.log("при forEach: ", forEachAnswer);

//reduce()
let reduceAnswer = numbers.reduce((sum, num) => {
  return sum + num ** 3;
}, 0);

console.log("При reduce: ", reduceAnswer);
