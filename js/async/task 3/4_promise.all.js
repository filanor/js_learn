/**
* !! ЗАДАЧА
Создай функцию getFastestLoadedPhoto(), которая принимает в себя 1 параметр ids, являющийся массивом 
параметров id у объекта photo. Чтобы получить информацию о фото, тебе необходимо использовать 
следующий url: “https://jsonplaceholder.typicode.com/photos/1”)(1 - это id фотографии). 
С помощью массива ids получи данные о фотографии, которая быстрее всего загрузилась при fetch() запросе. 
Для решения поставленной задачи используй Promise.race().

Для удобства необходимо добавить элемент <span> с текстом “Загрузка...” перед загрузкой фотографии, 
и спрятать этот элемент после загрузки данных.
 */

const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos";
const usersList = document.querySelector("#data-container");
const userListLoader = usersList.querySelector("#loader");

const renderPhoto = ({ title, url }) => {
  const li = document.createElement("li");
  li.className = "photo-item";
  li.innerHTML = `
    <img class="photo-item__image" src="${url}">
    <h3 class="photo-item__title">
      ${title}
    </h3>
  `;
  return li;
};

const getFastestLoadedPhoto = (ids) => {
  const fetchArray = [];
  for (const id of ids) {
    fetchArray.push(fetch(`${PHOTOS_URL}/${id}`));
  }
  Promise.race(fetchArray)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка получения данных");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      usersList.append(renderPhoto(data));
    });
};

getFastestLoadedPhoto([60, 12, 55]);
