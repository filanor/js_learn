/*
принимает в себя 1 параметр expression, который является массивом и всегда состоит из 3-х элементов.
1-й и 3-й элементы в массиве expression - это числа, которые могут записывать как тип данных number 
либо string (например, 100 или '100'). 2-й элемент - это математический знак, который является типом данных string. 
Математический знак может быть исключительно следующими строками: ">", "<", "=", "+", "-", "*", "/". Если был знак, 
которого не существует в данной последовательности, то функция getMathResult() должна возвращать ошибку в виде строки “Ошибка”.
*/

// Константа с валидными математическими знаками
const mathSign = [">", "<", "=", "+", "-", "*", "/"];

// Считаем математику
function getMathResult(expression) {
  expression = clearArray(expression);
  if (!expression) {
    console.error("Ошибка");
    return "Ошибка";
  }
  let rez = 0;
  const a = Number(expression[0]);
  const b = Number(expression[2]);

  switch (expression[1]) {
    case ">":
      rez = a > b;
      break;
    case "<":
      rez = a < b;
      break;
    case "=":
      rez = a === b;
      break;
    case "+":
      rez = a + b;
      break;
    case "-":
      rez = a - b;
      break;
    case "*":
      rez = a * b;
      break;
    case "/":
      rez = a / b;
      break;
  }
  console.log(rez);
  return rez;
}

// Функция удаляет лишнее из массива и проверяем его валидность. Если не валиден - возвращаем false
function clearArray(array) {
  const clearedArray = array.filter((el) => {
    return !isNaN(Number(el)) || isMathSignValid(el) > -1;
  });

  const isArrayValid =
    isMathSignValid(clearedArray[1]) > -1 &&
    !isNaN(Number(clearedArray[0])) &&
    !isNaN(Number(clearedArray[2]));

  if (clearedArray.length != 3 || !isArrayValid) {
    return false;
  }
  return clearedArray;
}

// Функция проверяет, поддерживается ли математический символ
function isMathSignValid(sign) {
  return mathSign.findIndex((item) => {
    return item === sign;
  });
}

getMathResult(["200", "+", 300]); // 500
getMathResult(["200", "+", 300, "asdf", "213   123"]); // 500
getMathResult(["200", "200", 300, "asdf", "213   123"]); // ошибка
getMathResult(["200", "+", "+", "asdf", "213   123"]); // ошибка
getMathResult(["20", "-", "5"]); // 15
getMathResult([100, "/", 100]); // 1
getMathResult([2, "-", 2]); // 0
getMathResult(["5", ">", "10"]); // false
getMathResult(["5", "<", "10"]); // true
getMathResult(["1", "=", 1]); // true
getMathResult(["1", "**", 1]); // 'Ошибка'
getMathResult(["+", "100", 10]); // 'Ошибка'
