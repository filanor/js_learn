import { combineReducers, configureStore } from "@reduxjs/toolkit";
import qualitiesReducer from "./qualities";
import professionsReducer from "./professions";

const rootReducers = combineReducers({
  professions: professionsReducer,
  qualities: qualitiesReducer
});

function createStore() {
  return configureStore({
    reducer: rootReducers
  });
}

export default createStore;
