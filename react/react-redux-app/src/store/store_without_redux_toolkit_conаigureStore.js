import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import taskReducer from "./task";
import { logger } from "./middleware/logger";
import { thunk } from "./middleware/thunk";

const midlewarenhancer = applyMiddleware(logger, thunk);

export function initiateStore() {
  return createStore(
    taskReducer,
    compose(
      midlewarenhancer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
