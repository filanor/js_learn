import { combineReducers, configureStore } from "@reduxjs/toolkit";
import qualitiesReducer from "./qualities";
import professionsReducer from "./professions";
import usersReducer from "./users";
import commentsReducer from "./comments";

const rootReducers = combineReducers({
  professions: professionsReducer,
  qualities: qualitiesReducer,
  users: usersReducer,
  comments: commentsReducer
});

function createStore() {
  return configureStore({
    reducer: rootReducers
  });
}

export default createStore;
