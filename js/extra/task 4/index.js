/**
 * ! ЗАДАЧА
 * Напиши функцию, которая будет проверять, является ли строка палиндромом.

  Палиндром — слово, которое одинаково читается слева направо и справа налево. Например,«топот», «racecar»:
 */

const isPalindrome = (word) => {
  const length = word.length - 1;
  for (let i = 0; i <= length / 2; i++) {
    if (word[i] !== word[length - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("programmer")); // false
