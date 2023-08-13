import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
// import * as actions from "./store/actions";

import createStore from "./store/store";
import { completeTask, getTasks, taskDeleted, taskUpdated } from "./store/task";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore();

const App = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.dispatch(getTasks());
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  // const completeTask = (taskId) => {
  //   store.dispatch(taskCompleted(taskId));
  // };

  const changeTask = (taskId) => {
    store.dispatch(taskUpdated(taskId));
  };
  const deleteTask = (taskId) => {
    store.dispatch(taskDeleted(taskId));
  };

  return (
    <>
      <h1>APP</h1>
      {state.map((el) => (
        <li key={el.id}>
          <p>{el.title}</p>
          <p>{`Status: ${el.completed}`}</p>
          <button onClick={() => store.dispatch(completeTask(el.id))}>
            Завершить
          </button>
          <button onClick={() => changeTask(el.id)}>Обновить</button>
          <button onClick={() => deleteTask(el.id)}>Удалить</button>
          <hr />
        </li>
      ))}
    </>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
