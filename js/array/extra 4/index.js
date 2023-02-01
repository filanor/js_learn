/*
Тебе необходимо сделать из элементов вложенных массивов один массив. 
Итоговый результат должен выглядеть следующим образом: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ].

Условия:
Нельзя использовать метод массивов flat().
Необходимо, чтобы в решении использовался метод concat() либо оператор Spread.
*/

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const arr = [];
for (let i = 0; i < matrix.length; i++) {
  arr.push(...matrix[i]);
}

console.log(arr);
