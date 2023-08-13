/**
 *
 * ?? РЕАЛИЗАЦИЯ С ИСПОЛЬЗОВАНИЕМ REDUX TOOLKIT
 * ?? Используются createAction, createReducer
 * !! БЕЗ ИСПОЛЬЗОВАНИЯ createSlice
 */

import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: false },
];

const update = createAction("task/update");
const remove = createAction("task/remove");

export function taskUpdated(id) {
  return update({ id: id, title: `Updated Title for ${id}` });
}

export function taskCompleted(id) {
  return update({ id, completed: true });
}

export function taskDeleted(id) {
  return remove({ id });
}

const taskReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(update, (state, action) => {
      const elementIndex = state.findIndex((el) => el.id === action.payload.id);
      state[elementIndex] = { ...state[elementIndex], ...action.payload };
    })
    .addCase(remove, (state, action) => {
      const delId = action.payload.id;
      return state.filter((e) => e.id !== delId);
    });
});

export default taskReducer;
