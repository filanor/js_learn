let correctAnswers = 0;
const test = [
  { question: "Сколько будет 2 + 2?", answer: 4 },
  {
    question:
      "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?",
    answer: 1,
  },
  {
    question:
      "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?",
    answer: 12,
  },
  { question: "Сколько будет 2 + 2 * 2?", answer: 6 },
];

for (let i = 0; i < test.length; i++) {
  let answer = Number(prompt(test[i].question).trim());
  if (answer === test[i].answer) {
    alert("Ответ Верный");
    correctAnswers++;
  } else {
    alert("Ответ не верный");
  }
}

alert(
  `Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${
    correctAnswers - test.length
  }.`
);
