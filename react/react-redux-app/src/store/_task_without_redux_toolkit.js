/**
 *
 * !! НИЖЕ РЕАЛИЗАЦИЯ БЕЗ ИСПОЛЬЗОВАНИЯ REDUX TOOLKIT
 */

export const TASK_UPDATED = "task/update";
export const TASK_DELETED = "task/delete";

export function taskUpdated(id) {
  return {
    type: TASK_UPDATED,
    payload: { id: id, title: `Updated Title for ${id}` },
  };
}

export function taskCompleted(id) {
  return {
    type: TASK_UPDATED,
    payload: { id, completed: true },
  };
}

export function taskDeleted(id) {
  return {
    type: TASK_DELETED,
    payload: { id },
  };
}

function taskReducer(state, action) {
  switch (action.type) {
    case TASK_UPDATED:
      const newArray = [...state];
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      console.log("action.payload", action.payload);
      newArray[elementIndex] = { ...newArray[elementIndex], ...action.payload };
      console.log("!!!", newArray);
      return newArray;

    case TASK_DELETED:
      console.log("taskDeleted", action.payload);
      const delId = action.payload.id;
      return state.filter((e) => e.id !== delId);
    default:
      return state;
  }
}

export default taskReducer;
