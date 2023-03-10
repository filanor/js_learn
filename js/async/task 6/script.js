/*
! Задача
еобходимо создать функцию renderAlbums(), которая будет отображать данные об альбомах в DOM-дереве. 
Для получения данных используй следующий url: “https://jsonplaceholder.typicode.com/albums”

HTML-шаблон для элемента альбома выглядит следующим образом:

<li>название альбома</li>
Итоговые HTML-элементы c информацией об имени альбома помести в тег <ol> с классом, равным "data-container".
Используй исключительно async/await и try...catch...finally. Если при загрузке альбомов произошла ошибка, 
то внутрь тега с классом равным "data-container" помести текст: «Произошла ошибка в получении данных об альбомах...».
*/

const URL = "https://jsonplaceholder.typicode.com/albums";
const container = document.querySelector("#data-container");
const loader = container.querySelector("#loader");

const render = (albums) => {
  for (const album of albums) {
    const li = document.createElement("li");
    li.innerText = album.title;
    container.append(li);
  }
};
const renderAlbums = async (ids) => {
  loader.removeAttribute("hidden");

  try {
    const response = await fetch(URL);
    const albums = await response.json();
    render(albums);
  } catch (err) {
    const errorSpan = document.createElement("span");
    errorSpan.className = "error";
    errorSpan.innerText = "Произошла ошибка в получении данных об альбомах...";
    container.append(errorSpan);
    console.log("error", err);
  } finally {
    loader.setAttribute("hidden", "");
  }
};

renderAlbums();

const getData = (callback) => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((user) => {
      console.log("Success");
      callback(user);
    })
    .catch((error) => {
      console.log(error);
    });
};
getData(() => {
  console.log("user received");
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("promise resolved");
    }, 500);
    console.log("in promise");
    setTimeout(() => {
      console.log("last set timeout");
    }, 400);
  });
  promise.then((result) => {
    console.log(result);
  });
});
console.log("End");
// End
// Success
// user received
// in promise
// last set timeout
// promise resolved
