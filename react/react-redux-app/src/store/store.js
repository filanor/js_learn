// !! thunk.js не используется так как он вшит в configureStore
// ?? В файле store_without_redux_toolkit_conаigureStore
// ?? пример варианта без использования configureStore
// ?? там нужен файл thunk.js

import { logger } from "./middleware/logger";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task";
import errorReducer from "./error";

const rootReducer = combineReducers({
  errors: errorReducer,
  tasks: taskReducer,
});

function createStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
  });
}

export default createStore;
