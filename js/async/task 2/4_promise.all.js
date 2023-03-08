/**
* !! ЗАДАЧА
Тебе необходимо создать функцию getUsersByIds(), которая будет принимать массив, 
состоящий из id пользователей. Тебе нужно получить всех пользователей, у которых есть 
данные значения id. Используй некоторый код из предыдущего задания и 
Promise.all() для решения поставленной задачи.

Добавь данные об имени каждого пользователя внутрь html-элемента с id="data-container". 
Также для удобства необходимо добавить элемент <span> с текстом “Загрузка...” перед загрузкой пользователей, 
и спрятать этот элемент после загрузки данных о пользователях.

<li><a href="#">Имя пользователя</a></li>
 */

const USER_URL = "https://jsonplaceholder.typicode.com/users";
const usersList = document.querySelector("#data-container");
const userListLoader = usersList.querySelector("#loader");

const renderUserLink = (user) => {
  const userLi = document.createElement("li");
  const userLiA = document.createElement("a");
  userLiA.href = "#";
  userLiA.innerText = user;
  userLi.append(userLiA);
  return userLi;
};

const getUsersByIds = (users) => {
  userListLoader.removeAttribute("hidden");

  const fetchArray = [];
  for (id of users) {
    fetchArray.push(fetch(`${USER_URL}/${id}`));
  }

  Promise.all(fetchArray)
    .then((responses) => {
      const users = responses.map((responseObject) => {
        if (!responseObject.ok) {
          throw new Error("Ошибка получения данных");
        }
        return responseObject.json();
      });
      return Promise.all(users);
    })
    .then((users) => {
      users.forEach((user) => {
        usersList.append(renderUserLink(user.name));
      });
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      userListLoader.setAttribute("hidden", "true");
    });
};

getUsersByIds([5, 6, 2, 1]);
