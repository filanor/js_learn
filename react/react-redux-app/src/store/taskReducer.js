import { taskDeleted, taskUpdated } from "./actionTypes";

export function taskReducer(state, action) {
  switch (action.type) {
    case taskUpdated:
      const newArray = [...state];
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      console.log("action.payload", action.payload);
      newArray[elementIndex] = { ...newArray[elementIndex], ...action.payload };
      console.log("!!!", newArray);
      return newArray;
    case taskDeleted:
      console.log("taskDeleted", action.payload);
      const delId = action.payload.id;
      return state.filter((e) => e.id !== delId);
    default:
      return state;
  }
}
