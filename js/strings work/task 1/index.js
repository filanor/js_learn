const myName = "filanor";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Result School";
const reasonText = "Like it";
const numberOfMonth = "undefind";

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} 
на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. 
До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`;

console.log(myInfoText);

myInfoText = myInfoText.replaceAll("JavaScript", "javascript");
myInfoText = myInfoText.replaceAll("курс", "КУРС");
const myInfoTextLength = myInfoText.length;

console.log(myInfoText, `Длина строки ${myInfoTextLength}`);

console.log(
  `Первый симол строки: ${myInfoText[0]}`,
  `Последний символ строки: ${myInfoText[myInfoTextLength - 1]}`
);
