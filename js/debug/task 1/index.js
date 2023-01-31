let health = Number(prompt('Введите число параметра "здоровье" для персонажа'));
if (health < 0 || !health) {
  console.log("health <0");
  alert('Параметр "здоровье" должен быть больше нуля!');
} else {
  console.log("health >= 0");
  alert(`Параметр "здоровье" равен ${health}`);
}
