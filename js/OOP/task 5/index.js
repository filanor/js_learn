/*
создать класс Developer, конструктор которого будет принимать 3 параметра:

fullName - имя разработчика
age - возраст разработчика
position- текущая позиция разработчика в компании (например, Junior, Middle, Senior)
Инициализируй все параметры при помощи this. Также создай внутри конструктора поле technologies, которое по умолчанию будет равно 
пустому массиву.

Кроме этого, в классе Developer тебе необходимо создать 2 метода:

code - метод, у которого тело изначально пустое (в фигурных скобках ничего нет).
learnNewTechnologies() - данный метод принимает в себя 1 параметр technology, который должен добавляться в конец массива technologies.
После проделанных действий у тебя должен получиться шаблон Developer, благодаря которому ты будешь создавать дочерние классы.

Тебе сейчас необходимо создать 3 дочерних класса от класса Developer:

JuniorDeveloper. Конструктор данного класса принимает 2 параметра: fullName и age. Вызови конструктор родительского класса и 
передай туда эти 2 параметра. В качестве 3-го у нас выступает position. Тебе необходимо его указать по умолчанию. Напиши значение 
"Junior" в качестве 3-го параметра вызова родительского конструктора. Кроме этого, необходимо переопределить метод code(), 
чтобы он выводил в консоль строку: “Junior разработчик пишет код...”. Массив technologies должен содержать следующие технологии: 
'HTML', 'CSS', 'JavaScript'.
MiddleDeveloper. Проделай ту же самую работу в конструкторе, что и в JuniorDeveloper. Только на место position передавай значение 
"Middle". Метод code() у класса MiddleDeveloper должен выводить в консоль строку: “Middle-разработчик пишет код...”. 
Массив technologies должен содержать следующие технологии: 'HTML', 'CSS', 'JavaScript', ‘React’.
SeniorDeveloper. Проделай ту же самую работу в конструкторе, что и в JuniorDeveloper. Только на место position передавай значение 
"Senior". Метод code() у класса SeniorDeveloper должен выводить в консоль строку: “Senior-разработчик пишет код...”. 
Массив technologies должен содержать следующие технологии: 'HTML', 'CSS', 'JavaScript', ‘React’, ‘NodeJS’.
*/
class Developer {
  constructor(fullName, age, position) {
    this.fullName = fullName;
    this.age = age;
    this.position = position;
    this.technologies = new Array();
  }
  code() {}
  learnNewTechnologies(technology) {
    this.technologies.push(technology);
  }
}
class JuniorDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age, "Junior");
    this.technologies = ["HTML", "CSS", "JavaScript"];
  }
  code() {
    console.log("Junior разработчик пишет код...");
  }
}

class MiddleDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age, "Midle");
    this.technologies = ["HTML", "CSS", "JavaScript", "React"];
  }
  code() {
    console.log("Middle-разработчик пишет код...");
  }
}

class SeniorDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age, "Senior");
    this.technologies = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];
  }
  code() {
    console.log("Senior-разработчик пишет код...");
  }
}

const juniorDeveloper = new JuniorDeveloper("Анастасия", 20);
const middleDeveloper = new MiddleDeveloper("Игорь", 25);
const seniorDeveloper = new SeniorDeveloper("Максим", 30);

juniorDeveloper.code(); // Junior разработчик пишет код...
middleDeveloper.code(); // Middle разработчик пишет код...
seniorDeveloper.code(); // Senior разработчик пишет код...

seniorDeveloper.learnNewTechnologies("Docker");

console.log(
  juniorDeveloper.fullName,
  juniorDeveloper.age,
  juniorDeveloper.position,
  juniorDeveloper.technologies
);
// 'Анастасия' 20 'Junior' ['HTML', 'CSS', 'JavaScript']

console.log(
  middleDeveloper.fullName,
  middleDeveloper.age,
  middleDeveloper.position,
  middleDeveloper.technologies
);
// 'Игорь' 25 'Middle' ['HTML', 'CSS', 'JavaScript', 'React']

console.log(
  seniorDeveloper.fullName,
  seniorDeveloper.age,
  seniorDeveloper.position,
  seniorDeveloper.technologies
);
// 'Максим' 30 'Senior' ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'Docker']
