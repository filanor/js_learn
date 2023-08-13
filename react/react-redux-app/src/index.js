import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
// import * as actions from "./store/actions";

import createStore from "./store/store";
import {
  completeTask,
  getTasks,
  taskDeleted,
  taskUpdated,
  loadTasks,
  getTasksLoadingStatus,
  taskCreated,
} from "./store/task";
import { Provider, useDispatch, useSelector } from "react-redux";
import { getErrors } from "./store/error";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore();

const App = () => {
  const state = useSelector(getTasks());
  const isLoading = useSelector(getTasksLoadingStatus());
  // Если селекторы не созданы, то использовать следующиую запись
  // const isLoading = useSelector((state) => state.tasks.isLoading);
  const error = useSelector(getErrors());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  // const completeTask = (taskId) => {
  //   store.dispatch(taskCompleted(taskId));
  // };

  const changeTask = (taskId) => {
    dispatch(taskUpdated(taskId));
  };
  const deleteTask = (taskId) => {
    dispatch(taskDeleted(taskId));
  };

  const createTask = () => {
    dispatch(
      taskCreated({
        title: "New Test Task",
        completed: false,
      })
    );
  };

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>APP</h1>
      <button onClick={() => createTask()}>Создать TODO</button>
      {state.map((el) => (
        <li key={el.id}>
          <p>{el.title}</p>
          <p>{`Status: ${el.completed}`}</p>
          <button onClick={() => dispatch(completeTask(el.id))}>
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
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
