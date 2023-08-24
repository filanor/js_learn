import { combineReducers, configureStore } from "@reduxjs/toolkit";
import qualitiesReducer from "./qualities";
import professionsReducer from "./professions";
import usersReducer from "./users";

const rootReducers = combineReducers({
  professions: professionsReducer,
  qualities: qualitiesReducer,
  users: usersReducer
});

function createStore() {
  return configureStore({
    reducer: rootReducers
  });
}

export default createStore;
