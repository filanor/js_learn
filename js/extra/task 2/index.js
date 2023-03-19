/**
 * ! ЗАДАЧА
 *
 * Напиши функцию, которая принимает в аргументах 2 строки.
 * Она должна возвращать true, если эти строки состоят из одинаковых букв,
 * и false, если нет.
 */

console.log(isEqualSymbols("адрес", "среда")); // true
console.log(isEqualSymbols("нотбук", "программист")); // false

function isEqualSymbols(str1, str2) {
  return checkWord(str1) && checkWord(str2);
}

function checkWord(str) {
  for (let i = 0; i < str.length; i++) {
    const currentSymbol = str[i];
    for (let j = i + 1; j < str.length; j++) {
      if (currentSymbol === str[j]) {
        return false;
      }
    }
  }
  return true;
}
