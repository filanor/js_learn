import { createSlice } from "@reduxjs/toolkit";
import commentsService from "../services/comments.service";

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    commentsRequested: (state) => {
      state.isLoading = true;
    },
    commentsReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    commentsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    commentsCreated: (state, action) => {
      state.entities.push(action.payload);
    },
    commentsRemoved: (state, action) => {
      state.entities = state.entities.filter((q) => q._id !== action.payload);

      // state.entities = null;
    }
  }
});

const { actions, reducer: commentsReducer } = commentsSlice;
const {
  commentsReceived,
  commentsRequested,
  commentsRequestFailed,
  commentsCreated,
  commentsRemoved
} = actions;

export const loadСommentsList = (userId) => async (dispatch) => {
  dispatch(commentsRequested());
  try {
    const { content } = await commentsService.getCommetns(userId);
    dispatch(commentsReceived(content));
  } catch (error) {
    dispatch(commentsRequestFailed(error.message));
  }
};

export const removeComments = (id) => async (dispatch) => {
  try {
    const { content } = await commentsService.removeComments(id);
    console.log("asdf", content);
    if (content === null) {
      dispatch(commentsRemoved(id));
    }
  } catch (error) {
    commentsRequestFailed(error.message);
  }
};

export const createComments = (comment) => async (dispatch) => {
  try {
    const { content } = await commentsService.create(comment);
    console.log(content);
    dispatch(commentsCreated(comment));
  } catch (error) {
    commentsRequestFailed(error.message);
  }
};

export const getComments = () => (state) => state.comments.entities;
export const getCommentsLoadingStatus = () => (state) =>
  state.comments.isLoading;

export default commentsReducer;
