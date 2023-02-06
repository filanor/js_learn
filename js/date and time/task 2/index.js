/*
создать функцию getDaysBeforeBirthday(), которая будет возвращать количество дней до следующего дня рождения. 
Данная функция должна принимать 1 параметр nextBirthdayDate, который является экземпляром класса Date и указывает 
на дату твоего ближайшего дня рождения. Год стоит указывать ближайший к текущей дате, а не год твоего рождения.

Также рекомендуется создать вспомогательную функцию convertMsToDays(), которая переводит миллисекунды в дни. 
Для округления итогового числа используй Math.round().
*/

// считаем
const getDaysBeforeBirthday = (nextBirthdayDate) => {
  const currendDate = new Date().getTime();
  return convertMsToDays(nextBirthdayDate - currendDate);
};

// конвертируем
const convertMsToDays = (ms) => Math.round(ms / 1000 / 60 / 60 / 24);

const date = new Date("February 18, 2023 2:05:56");

console.log(getDaysBeforeBirthday(date));
