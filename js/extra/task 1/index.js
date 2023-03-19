/**
 * ! ЗАДАЧА
 *  Найти максимальное число из диапазона [1016, 1937]:
 * Делится на 3 и 7
 * Не делится на 5 и 2
 */

const MIN_NUMBER = 1016;
const MAX_NUMBER = 1937;

const searchWinNumber = () => {
  for (let i = MAX_NUMBER; i >= MIN_NUMBER; i--) {
    const isDividesBy3and7 = i % 3 === 0 && i % 7 === 0;
    const isNotDividesBy5and2 = i % 5 !== 0 && i % 2 !== 0;

    if (isDividesBy3and7 && isNotDividesBy5and2) {
      return i;
    }
  }
};

console.log(searchWinNumber());
