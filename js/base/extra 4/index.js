const minPassLength = 3;
const maxPassLength = 30;

let newPass = prompt("Введите пароль:");
let isPassLengthValid = newPass.length >= 3 && newPass.length <= 30 &&;
let isPassContentValid = newPass.search(/\d/) != -1 && newPass.search(/[A-Z]/) != -1;

if (isPassLengthValid && isPassContentValid) {
  alert("Пароль валидный. Добро пожаловать в аккаунт!");
} else {
  alert(
    "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз."
  );
}
