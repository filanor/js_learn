/*
создать функцию getKiller(). Она принимает в себя 2 параметра:

suspectInfo - объект, в котором ключи - это подозреваемые в преступлении люди, а значения - массивы людей, 
которых видели подозреваемые в день убийства.
deadPeople - массив с именами людей, которых убил преступник.
Преступником является тот, кто видел всех убитых людей в день убийства. Функция getKiller() 
должна возвращать имя преступника.
*/

const getKiller = (suspectInfo, deadPeople) => {
  for (suspect in suspectInfo) {
    let isKiller = true;
    for (man of deadPeople) {
      if (!suspectInfo[suspect].includes(man)) {
        isKiller = false;
        break;
      }
    }

    if (isKiller) {
      return `The killer is ${suspect}`;
    }
  }
};

console.log(
  getKiller(
    {
      James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"],
    },
    ["Lucas", "Bill"]
  )
); // Убийца James

console.log(
  getKiller(
    {
      Brad: [],
      Megan: ["Ben", "Kevin"],
      Finn: [],
    },
    ["Ben"]
  )
); // Убийца Megan
