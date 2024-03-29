import { legacy_createStore as createStore } from "redux";
import taskReducer from "./task";

const initialState = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: false },
];

export function initiateStore() {
  return createStore(taskReducer, initialState);
}
