const userName = prompt("Как вас зовут?").trim().toLowerCase();
let userAge = prompt("Сколько вам лет?").trim();
userAge = Number(userAge.replace(/\D/g, ""));
alert(`Вас зовут ${userName} и вам ${userAge} лет`);
