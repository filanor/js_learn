/*
создать объект student, в котором будут 3 свойства:

stack - массив из строк, где каждая строка - это технология. Изначально массив должен быть равен ['HTML'].
level - тип данных number. level отвечает за текущий уровень студента и изначально равен 1.
improveLevel() - функция, которая сначала увеличивает значение свойства level у студента на единицу. 
Если level равен 2-м, то тебе необходимо добавить в конец массива stack значение 'CSS', 
если 3-м - добавляем в конец stack значение 'JavaScript', 
4-м - 'React', 5-ти - 'NodeJS'. 
Если значение level стало больше 5-ти, то тебе необходимо вывести в модальном окне через alert() 

сообщение: “Студент выучил все технологии!”. Также функция improveLevel() должна возвращать в самом конце обновленный объект student.
В итоге, значение свойства stack после выполнения кода ниже должно быть равно ["HTML", "CSS", "JavaScript", "React", "NodeJS"]:
*/

const student = {
  stack: ["HTML"],
  level: 1,

  improveLevel() {
    this.level += 1;
    switch (this.level) {
      case 2:
        this.stack.push("CSS");
        break;
      case 3:
        this.stack.push("JavaScript");
        break;
      case 4:
        this.stack.push("React");
        break;
      case 5:
        this.stack.push("NodeJS");
        break;
      default:
        alert("Студент выучил все технологии!");
        break;
    }
    return this;
  },
};

student
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel();

console.log(student.stack);
