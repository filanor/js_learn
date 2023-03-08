/*
! Задача
Требуется переписать данный код, использующий .then(), .catch() и .finally() в код, который 
использует исключительно async/await. и try...catch...finally:
*/
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
// const getTodosByIds = (ids) => {
//   const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//   Promise.all(requests)
//     .then((responses) => {
//       const dataResults = responses.map((data) => data.json());
//       return Promise.all(dataResults);
//     })
//     .then((allTasks) => {
//       console.log(allTasks);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

const getTodosByIds = async (ids) => {
  const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));

  try {
    const responses = await Promise.all(requests);
    const dataResults = responses.map((data) => data.json());
    const allTasks = await Promise.all(dataResults);
    console.log(allTasks);
  } catch (err) {
    console.log(err);
  }
};

getTodosByIds([43, 21, 55, 100, 10]);
