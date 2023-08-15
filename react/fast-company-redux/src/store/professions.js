import { createSlice } from "@reduxjs/toolkit";
import professionService from "../services/profession.service";

const professionsSlice = createSlice({
  name: "professions",
  initialState: {
    entities: null,
    isLoading: true,
    errors: null,
    lastFetch: null
  },
  reducers: {
    professionsRequested: (state) => {
      state.isLoading = true;
    },
    professionsReceived: (state, action) => {
      state.entities = action.payload;
      state.lastFetch = Date.now();
      state.isLoading = false;
    },
    professionsRequestFailed: (state, action) => {
      state.errors = action.payload;
    }
  }
});

const { actions, reducer: professionsReducer } = professionsSlice;
const { professionsRequested, professionsReceived, professionsRequestFailed } =
  actions;

function isOutDate(date) {
  if (Date.now() - date > 10 * 60 * 1000) {
    return true;
  }
  return false;
}

export const loadingProfissionsList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().professions;
  if (isOutDate(lastFetch)) {
    dispatch(professionsRequested());
    try {
      const { content } = await professionService.get();
      dispatch(professionsReceived(content));
    } catch (error) {
      dispatch(professionsRequestFailed(error.message));
    }
  }
};

export const getProfessions = () => (state) => state.professions.entities;
export const getProfessionsLoadingStatus = () => (state) =>
  state.professions.isLoading;
export const getProfessionById = (id) => (state) =>
  state.professions.entities.find((p) => p._id === id);

export default professionsReducer;
