import * as actions from "./actionTypes";

export function taskUpdated(id) {
  return {
    type: actions.taskUpdated,
    payload: { id: id, title: `Updated Title for ${id}` },
  };
}

export function taskCompleted(id) {
  return {
    type: actions.taskUpdated,
    payload: { id, completed: true },
  };
}

export function taskDeleted(id) {
  return {
    type: actions.taskDeleted,
    payload: { id },
  };
}
