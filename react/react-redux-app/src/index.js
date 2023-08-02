import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import * as actions from "./store/actions";
import { initiateStore } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = initiateStore();

const App = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  const completeTask = (taskId) => {
    store.dispatch(actions.taskCompleted(taskId));
  };

  const changeTask = (taskId) => {
    store.dispatch(actions.taskUpdated(taskId));
  };
  const deleteTask = (taskId) => {
    store.dispatch(actions.taskDeleted(taskId));
  };

  return (
    <>
      <h1>APP</h1>
      {state.map((el) => (
        <li key={el.id}>
          <p>{el.title}</p>
          <p>{`Status: ${el.completed}`}</p>
          <button onClick={() => completeTask(el.id)}>Завершить</button>
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
