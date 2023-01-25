// for (let i = 0; i < 3; i += 1) {
//   let newStudent = prompt('Введите имя нового студента!');
//   if (newStudent) {
//     newStudent = newStudent.trim();
//     alert(`Добро пожаловать, ${newStudent}!`)
//   }
// }

const students = [];

// let i = 0;
// do {
//   let newStudent = prompt("Введите имя нового студента!");
//   if (newStudent) {
//     newStudent = newStudent.trim();
//     alert(`Добро пожаловать, ${newStudent}!`);
//   }
//   i += 1;
// } while (i < 3);

let j = 0;
while (j < 3) {
  let newStudent = prompt("Введите имя нового студента!").trim();
  do {
    if (newStudent) {
      if (students.includes(newStudent)) {
        alert("такой студент уже есть");
        break;
      }
      students.push(newStudent);
      alert(`Добро пожаловать, ${newStudent}!`);
    }
    j += 1;
  } while (newStudent === "");
}
