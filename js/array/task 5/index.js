/*
Для начала тебе необходимо создать пустой массив clientsEstimations, в котором будут хранится оценки клиентов кофейни. 
Также создай функцию askClientToGiveEstimation(), которая должна выводить сообщение: “Как вы оцениваете нашу кофейню от 1 до 10?” 
через prompt(). Конечный результат, который введет пользователь, должен быть типом данных number. Если было введено число от 1 до 10, 
то добавь эту оценку в массив clientsEstimations, иначе же никаких действий не совершай.

Для добавления оценок вызови функцию askClientToGiveEstimation() 5 раз. Рекомендуется это сделать через цикл for.

После того, как оценки будут добавлены, тебе необходимо посчитать положительные и отрицательных оценки. 
Положительной оценкой является число больше 5, отрицательной - число, меньшее либо равное 5. Выведи через alert() сообщение: 
“Всего положительных оценок: goodEstimations; Всего отрицательных оценок: notGoodEstimations”, где goodEstimations - количество 
положительных оценок, а notGoodEstimations - количество отрицательных оценок.

Условия:

В решение должен быть использован метод массивов filter().
*/

const clientsEstimations = [];

function askClientToGiveEstimation() {
  const estimation = Number(
    prompt("Как вы оцениваете нашу кофейню от 1 до 10?")
  );
  const isEstimationCorrect =
    estimation >= 1 && estimation <= 10 && estimation !== NaN;
  if (isEstimationCorrect) {
    return estimation;
  }
  return false;
}

for (let i = 0; i < 5; i++) {
  let currentEstimation = askClientToGiveEstimation();
  if (currentEstimation) {
    clientsEstimations.push(currentEstimation);
  }
}
console.log(clientsEstimations);
