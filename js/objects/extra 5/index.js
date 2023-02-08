/*
необходимо написать универсальную функцию getAdultUsers(), которая будет:

Принимать на вход массив или объект с пользователями
Выбирать из него только те элементы, у которых поле age больше или равно 18
Возвращать массив или объект со взрослыми пользователями. Если изначально был передан массив, 
то вернуть необходимо также массив. Если объект, то объект.
Примечание: в работе рекомендуем использовать Object.keys()
*/

const getAdultUsers = (users) => {
  if (Array.isArray(users)) {
    return users.filter((user) => user.age > 17);
  }

  const keys = Object.keys(users);
  const usersUnderEighteen = {};
  for (key of keys) {
    if (users[key].age > 17) {
      usersUnderEighteen[key] = users[key];
    }
  }
  return usersUnderEighteen;
};

const usersArray = [
  { id: "34rdca3eeb7f6fgeed471198", name: "Andrew", age: 25 },
  { id: "76rdca3eeb7f6fgeed471100", name: "Alexey", age: 15 },
  { id: "12rdca3eeb7f6fgeed4711012", name: "Egor", age: 13 },
  { id: "32rdca3eeb7f6fgeed471101", name: "Kate", age: 31 },
  { id: "98rdca3eeb7f6fgeed471102", name: "Elena", age: 18 },
];

const usersObject = {
  "34rdca3eeb7f6fgeed471198": {
    id: "34rdca3eeb7f6fgeed471198",
    name: "Andrew",
    age: 25,
  },
  "76rdca3eeb7f6fgeed471100": {
    id: "76rdca3eeb7f6fgeed471100",
    name: "Alexey",
    age: 15,
  },
  "12rdca3eeb7f6fgeed4711012": {
    id: "12rdca3eeb7f6fgeed4711012",
    name: "Egor",
    age: 13,
  },
  "32rdca3eeb7f6fgeed471101": {
    id: "32rdca3eeb7f6fgeed471101",
    name: "Kate",
    age: 31,
  },
  "98rdca3eeb7f6fgeed471102": {
    id: "98rdca3eeb7f6fgeed471102",
    name: "Elena",
    age: 18,
  },
};

console.log(getAdultUsers(usersArray));
/*
[
  { id: '34rdca3eeb7f6fgeed471198', name: 'Andrew', age: 25 },
  { id: '32rdca3eeb7f6fgeed471101', name: 'Kate', age: 31 },
  { id: '98rdca3eeb7f6fgeed471102', name: 'Elena', age: 18 }
]
*/

console.log(getAdultUsers(usersObject));
/*
{
  '34rdca3eeb7f6fgeed471198': { 
  id: '34rdca3eeb7f6fgeed471198', 
  name: 'Andrew', 
  age: 25 
  },
  '32rdca3eeb7f6fgeed471101': { 
  id: '32rdca3eeb7f6fgeed471101', 
  name: 'Kate', 
  age: 31 
  },
  '98rdca3eeb7f6fgeed471102': { 
  id: '98rdca3eeb7f6fgeed471102', 
  name: 'Elena', 
  age: 18 
  }
}
*/
