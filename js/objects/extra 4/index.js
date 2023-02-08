/*
Тебе необходимо создать функцию getWinner(), которая принимает в себя 2 параметра:

applicants - объект, в котором ключи - это номерки людей, по которым будет производится случайный отбор, 
а значения - это объекты кандидатов на выигрыш в лотерее.
winnerObject - объект, в котором хранится всего 1 ключ prize, хранящий значения размера выигрыша в лотерее.
Тебе необходимо случайным образом выбрать победный номерок (случайный ключ в объекте applicants) и вернуть 
из функции getWinner() объект, в котором будут хранится свойства из winnerObject и объект победителя.
*/

const getWinner = (applicants, winnerObject) => {
  const numbers = Object.keys(applicants);
  const winnerKey = numbers[getRandomNumberInRange(0, numbers.length)];

  return { ...winnerObject, ...applicants[winnerKey] };
};

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const todaysWinner = {
  prize: "10 000$",
};

const winnerApplicants = {
  "001": {
    name: "Максим",
    age: 25,
  },
  201: {
    name: "Светлана",
    age: 20,
  },
  304: {
    name: "Екатерина",
    age: 35,
  },
};

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log("resultWinner", resultWinner);
// { prize: '10 000$', name: 'Максим', age: 25 }
