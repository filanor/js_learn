// Программа скидок работает следующим образом:
// Если клиент потратил от 100$ до 300$, то скидка 10%;
// Если клиент потратил от 300$ до 500$, то скидка 20%;
// Если клиент потратил от 500$, то скидка 30%;

const clientName = prompt("Введите имя клиента");
let clientSpentForAllTime = 0;
let clientSpentToday = 0;

do {
  clientSpentToday = Number(prompt("Сколько клиент потратил сегодня?").trim());
  console.log(clientSpentToday);
  if (Number.isNaN(clientSpentToday)) {
    alert("Сумма, которую клиент потратил сегодня, должна быть числом!");
  }
} while (Number.isNaN(clientSpentToday));

do {
  clientSpentForAllTime = Number(
    prompt("Сколько клиент потратил за все время?").trim()
  );
  console.log(clientSpentForAllTime);
  if (Number.isNaN(clientSpentForAllTime)) {
    alert("Сумма, которую клиент потратил за все время, должна быть числом!");
  }
} while (Number.isNaN(clientSpentForAllTime));

let discount = 0;
if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
  discount = 10;
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
  discount = 20;
} else if (clientSpentForAllTime >= 500) {
  discount = 30;
}

alert(`Вам предоставляется скидка в ${discount}%!`);

clientSpentToday = (clientSpentToday / 100) * (100 - discount);
clientSpentForAllTime += clientSpentToday;

alert(
  `“Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`
);
