const text = "Привет! Как дела! Давно мы с тобой не виделись.";
checkTextOnErrorSymbol(text, "а", showSuccessMessage, showErrorMessage);

function showSuccessMessage(message) {
  console.log(message);
}

function showErrorMessage(message) {
  console.error(message);
}

function checkTextOnErrorSymbol(
  text,
  errorSymbol,
  successCallback,
  errorCallback
) {
  let flag = false;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === errorSymbol) {
      errorCallback(
        `Найден запрещенный символ "${errorSymbol}" под индексом ${i}`
      );
      flag = true;
    }
  }
  if (!flag) {
    successCallback("В данном тексте нет запрещенных символов");
  }
}
