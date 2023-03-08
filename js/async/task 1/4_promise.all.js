/**
* !! ЗАДАЧА
Твои коллеги-разработчики реализовали систему, благодаря которой можно 
получать список пользователей по url.

Тебе необходимо получить всех пользователей с помощью fetch() и добавить данные 
об имени каждого пользователя внутрь html-элемента с id="data-container".

Для удобства необходимо добавить элемент <span> с текстом “Загрузка...” перед загрузкой пользователей, 
и спрятать этот элемент после загрузки данных о пользователях.

Шаблон для HTML-элемента пользователя выглядит следующим образом:

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

const getAllUsers = () => {
  userListLoader.removeAttribute("hidden");
  const users = fetch(USER_URL);

  users
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("Ошибка получения данных");
      }
      return response.json();
    })
    .then((users) => {
      users.forEach((user) => {
        usersList.append(renderUserLink(user.name));
      });
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      userListLoader.setAttribute("hidden", "");
    });
};

getAllUsers();
