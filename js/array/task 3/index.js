/*
С помощью функции prompt() тебе необходимо запрашивать название кофе. Передай в prompt() сообщение “Поиск кофе по названию:”. 
Сохрани значение, которое ввел пользователь в переменную coffeeName.

Если введенное пользователем название кофе существует, то отобрази сообщение с помощью alert(): 
“Держите ваш любимый кофе coffee. Он number-й по популярности в нашей кофейне.”, 
где coffee - название найденного кофе, number - номер найденного кофе в массиве coffees. 
Если же кофе не был найден, то отобрази сообщение: “К сожалению, такого вида кофе нет в наличии”.

Условия:

Название кофе должно быть регистронезависимым, т.е. если пользователь напечатает “lATte”, то должен показаться результат с кофе “Latte”.
Необходимо использовать findIndex().
*/
const coffees = ["Latte", "Cappuccino", "Americano"];

const coffeeName = prompt("Поиск кофе по названию").toLowerCase();

const index = coffees.findIndex((coffee) => {
  return coffee.toLowerCase() === coffeeName;
});

message =
  index >= 0
    ? `Держите ваш любимый кофе ${coffees[index]}. Он ${
        index + 1
      }-й по популярности в нашей кофейне.`
    : "К сожалению, такого вида кофе нет в наличии";

alert(message);
