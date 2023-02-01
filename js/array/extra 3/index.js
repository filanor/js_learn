// С помощью циклов for тебе необходимо создать матрицу 3x5. В итоге она должна выглядеть следующим образом:

const arr = [];

for (let i = 0; i < 3; i++) {
  arr.push([]);
  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}

console.log(arr);
