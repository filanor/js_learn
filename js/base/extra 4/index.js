let newPass = prompt("Введите пароль:");
console.log(newPass.search(/\d/));
if (
  newPass.length >= 3 &&
  newPass.length <= 30 &&
  newPass.search(/\d/) != -1 &&
  newPass.search(/\d/) != -1
) {
  alert("Пароль валидный. Добро пожаловать в аккаунт!");
} else {
  alert(
    "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз."
  );
}
