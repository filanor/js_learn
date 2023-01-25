const userString = prompt("Введите текст").trim();

const wordFromText = prompt("Введите слово из текста").trim();

const indexOfWord = userString.indexOf(wordFromText);
alert(`Результат: ${userString.slice(0, indexOfWord).trim()}`);
