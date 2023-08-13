/**
 *
 *  используем DUCKS патерн, так как у нас достаточно небольшой *  файл.
 *
 *  При больших объема (большн 400-500 строк ) лучше использовать файловое разделение: *  папка task, в которой отдельные файлы reducer, action,*  *  *  actionTypes
 *
 * ?? РЕАЛИЗАЦИЯ С ИСПОЛЬЗОВАНИЕМ REDUX TOOLKIT
 * ?? Пример реализации с использованиес createSlice (совмещает в себе createAction и createReducer)
 *
 * ?? в _task_without_redux_toolkit показана реализация без TOOLKIT
 *
 * ?? в _task_redux_toolkit_without_createSlice показана реализация без createSlice - иcпользуя createReducer и createAction
 */

import { createSlice } from "@reduxjs/toolkit";
import todosService from "../services/todos.service";
import { setError } from "./error";

const initialState = {
  entities: [],
  isLoading: true,
};
// Изначально делали начальные значения для примера
// const initialState = [
//   { id: 1, title: "Task 1", completed: false },
//   { id: 2, title: "Task 2", completed: false },
// ];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    recived(state, action) {
      state.entities = action.payload;
      state.isLoading = false;
    },
    update(state, action) {
      const elementIndex = state.entities.findIndex(
        (el) => el.id === action.payload.id
      );
      state.entities[elementIndex] = {
        ...state.entities[elementIndex],
        ...action.payload,
      };
    },
    remove(state, action) {
      const delId = action.payload.id;
      state.entities = state.entities.filter((el) => el.id !== delId);
      // return state.entities.filter((e) => e.id !== delId);
    },
    create(state, action) {
      state.entities.unshift(action.payload);
    },
    taskRequested(state) {
      state.isLoading = true;
    },
    taskRequestFailed(state, action) {
      state.isLoading = false;
    },
  },
});

const { actions, reducer: taskReducer } = taskSlice;
const { update, remove, recived, taskRequested, taskRequestFailed, create } =
  actions;

// const taskRequested = createAction("task/requested");
// const taskRequestFailed = createAction("task/requestFailed");

export const loadTasks = () => async (dispatch) => {
  dispatch(taskRequested());
  try {
    const data = await todosService.fetch();
    dispatch(recived(data));
  } catch (error) {
    dispatch(taskRequestFailed());
    dispatch(setError(error.message));
  }
};

export const completeTask = (id) => (dispatch, getState) => {
  dispatch(update({ id, completed: true }));
};

export function taskUpdated(id) {
  return update({ id: id, title: `Updated Title for ${id}` });
}

export const taskCreated = (payload) => async (dispatch) => {
  try {
    const data = await todosService.create(payload);

    dispatch(create(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
  return create(payload);
};

// export function taskCompleted(id) {
//   return update({ id, completed: true });
// }

export function taskDeleted(id) {
  return remove({ id });
}

export const getTasks = () => (state) => state.tasks.entities;
export const getTasksLoadingStatus = () => (state) => state.tasks.isLoading;

export default taskReducer;
