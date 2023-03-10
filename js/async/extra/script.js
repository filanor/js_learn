/*
! Задача
создать функцию renderPost(), которая будет получать пост по id. Функция будет принимать 1 параметр postId 
и с помощью данного URL: ”https://jsonplaceholder.typicode.com/posts/1” получать данные 
о посте (в URL выше id поста равен 1).

После того, как ты получишь данные о посте, требуется получить все комментарии для конкретного поста. 
Чтобы, например, извлечь комментарии для поста с id равным 1, тебе необходимо использовать следующий 
url: “https://jsonplaceholder.typicode.com/comments?postId=1”
*/

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts/";
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments?postId=";
const container = document.querySelector("#data-container");
const loader = container.querySelector("#loader");

const getData = async (url, id) => {
  let result = {};
  try {
    const response = await fetch(url + id);
    result = await response.json();
  } catch (error) {
    console.log("cxvzxcvdfvdfv");
    console.error(`Ошибка получения данных с ${url}`, error);
  } finally {
    if (result) {
      return result;
    }
  }
};
createPost = ({ title, body }) => {
  const post = document.createElement("div");
  post.className = "post";
  post.setAttribute("id", "post");
  post.innerHTML = `
    <h1 class="post__title">${title}</h1>
    <p class="post__text">${body}</p>
    <b class="post__comments-text">Комментарии</b>
    <div class="post__comments"></div>    
  `;
  return post;
};

createComment = ({ email, body }) => {
  const comment = document.createElement("div");
  comment.className = "post-comment";
  comment.innerHTML = `    
    <span class="post-comment__author">${email}</span>
    <span class="post-comment__text">
      ${body}
    </span>
  `;
  return comment;
};

const renderPost = async (id) => {
  const post = await getData(POSTS_URL, id);
  container.append(createPost(post));

  if (post) {
    const comments_list = container.querySelector(".post__comments");
    const comments = await getData(COMMENTS_URL, id);
    console.log(comments);
    if (comments.length > 0) {
      comments.forEach((comment) => {
        comments_list.append(createComment(comment));
      });
    } else {
      comments_list.innerHTML = "<span>Комментариев пока нет</span>";
    }
  }
};

renderPost(1);
