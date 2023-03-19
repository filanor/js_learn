/**
 * ! ыЗАДАЧА
 * Напиши функцию, которая будет принимать в себя массив целых чисел
 * и возвращать новый массив, состоящий только из уникальных элементов
 * переданного массива:
 */

const unique = (arr) => {
  const resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];

    if (!resultArray.includes(currentNumber)) {
      resultArray.push(currentNumber);
    }
  }
  return resultArray;
};

console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3])); // => [1, 2, 4, 3, 7]
