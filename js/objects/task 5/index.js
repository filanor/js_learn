/*
Напиши функцию sum(), которая будет принимать неограниченное количество аргументов и возвращать их сумму:
*/

function sum(...arr) {
  return arr.reduce((acc, el) => acc + el, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(2, 2)); // 4
console.log(sum(10, 15, 249, 653, 846)); // 1773
