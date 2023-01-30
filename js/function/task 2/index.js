/**
 * Необходимо создать функцию getSumOfNumbers(). Она будет считать сумму от 0 до переданного числа. 
 * Выбери любой из 3 типов при создании функции.

getSumOfNumbers() принимает в себя 2 параметра: number и type.

Параметр number - это число, до которого будет считаться сумма. То есть, если было передано число 10, то функция 
должна посчитать сумму от 0 до 10 (0 + 1 + 2 + … + 10). Если параметр не передан или значение было не числом, 
то из функции необходимо вернуть NaN.

Параметр type отвечает за выбор чисел для подсчета суммы. Он может быть одним из 3-х значений: "odd", "even" и "". 
Если type равняется "odd", то в сумму должны входить только нечетные числа, "even" - четные числа, пустая строка "" - все числа. 
По умолчанию параметр type должен быть равен "odd".

Функция getSumOfNumbers() должна возвращать итоговую сумму с помощью return.

Возможные результаты функции getSumOfNumbers():
 */

function getSumOfNumbers(number, type = "odd") {
  // пррроверяем
  let isNumberValid = number === undefined || Number(number) === NaN;
  if (isNumberValid) {
    return NaN;
  }

  let sum = 0;

  // настраиваем цикл
  const step = type === "even" || type === "odd" ? 2 : 1;
  const i = type === "odd" ? 1 : 0;

  // считаем
  for (i; i <= number; i = i + step) {
    sum += i;
  }
  return sum;
}

console.log(getSumOfNumbers(10, "odd")); // 25
console.log(getSumOfNumbers(10, "even")); // 30
console.log(getSumOfNumbers(10, "")); // 55
