import { createAction, createSlice } from "@reduxjs/toolkit";
import userService from "../services/user.serviсe";
import authService from "../services/auth.service";
import localStorageService, {
  setTokens
} from "../services/localStorage.service";
import randomInt from "../utils/randomInt";
import history from "../utils/history";
import { generateAuthError } from "../utils/generateAuthErrors";

const initialState = localStorageService.getAccessToken()
  ? {
      entities: null,
      isLoading: true,
      error: null,
      isLoggedIn: true,
      auth: { userId: localStorageService.getUserId() },
      dataLoaded: false
    }
  : {
      entities: null,
      isLoading: false,
      error: null,
      isLoggedIn: false,
      auth: null,
      dataLoaded: false
    };

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersRequested: (state) => {
      state.isLoading = true;
    },
    usersReceived: (state, action) => {
      state.entities = action.payload;
      state.dataLoaded = true;
      state.isLoading = false;
    },
    usersRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    authRequestSuccess: (state, action) => {
      state.auth = { ...action.payload };
      state.isLoggedIn = true;
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    userCreated: (state, action) => {
      if (!Array.isArray(state.entities)) {
        state.entities = [];
      }
      state.entities.push(action.payload);
    },
    userUpdated: (state, action) => {
      state.entities = state.entities.map((u) => {
        if (u._id === action.payload._id) {
          return action.payload;
        }
        return u;
      });
    },
    userLoggedOut: (state) => {
      state.auth = null;
      state.entities = null;
      state.isLoggedIn = false;
      state.dataLoaded = false;
    },
    authRequested: (state) => {
      state.error = null;
    }
  }
});

const { reducer: usersReducer, actions } = usersSlice;
const {
  usersRequested,
  usersRequestFailed,
  usersReceived,
  authRequestFailed,
  authRequestSuccess,
  userCreated,
  userLoggedOut,
  userUpdated
} = actions;

const authRequested = createAction("users/authRequested");
const userCreateRequested = createAction("users/userCreateRequested");
const userCreatedFailed = createAction("users/userCreatedFailed");

// Регистрация
export const signUp =
  ({ password, email, ...rest }) =>
  async (dispatch) => {
    dispatch(authRequested());
    try {
      const data = await authService.register({ password, email });
      setTokens(data);
      dispatch(authRequestSuccess({ userId: data.localId }));
      dispatch(
        createUser({
          _id: data.localId,
          email,
          rate: randomInt(1, 5),
          completedMeetings: randomInt(0, 200),
          image: `https://avatars.dicebear.com/api/avataaars/${(
            Math.random() + 1
          )
            .toString(36)
            .substring(7)}.svg`,
          ...rest
        })
      );
    } catch (error) {
      dispatch(authRequestFailed(error.message));
    }
  };
// Создание зарегистрированого пользователя
function createUser(payload) {
  return async function (dispatch) {
    dispatch(userCreateRequested());
    try {
      const { content } = await userService.create(payload);
      dispatch(userCreated(content));
      history.push("/users  ");
    } catch (error) {
      dispatch(userCreatedFailed(error.message));
    }
  };
}

//

export const logIn =
  ({ payload, redirect }) =>
  async (dispatch) => {
    const { email, password } = payload;
    dispatch(authRequested());
    try {
      const data = await authService.login({ password, email });
      dispatch(authRequestSuccess({ userId: data.localId }));
      setTokens(data);
      history.push(redirect);
    } catch (error) {
      const { code, message } = error.response.data.error;
      if (code === 400) {
        const errorMessage = generateAuthError(message);
        dispatch(authRequestFailed(errorMessage));
      } else {
        dispatch(authRequestFailed(error.message));
      }
    }
  };

export const logOut = () => (dispatch) => {
  localStorageService.removeAuthData();
  dispatch(userLoggedOut());
  history.push("/");
};

export const updateUser = (data) => async (dispatch) => {
  try {
    const { content } = await userService.update(data);
    dispatch(userUpdated(content));
    history.push("/users/" + data._id);
  } catch (error) {}
};

// Селекторы
// Загрузка юзеров
export const loadUsersLists = () => async (dispatch) => {
  dispatch(usersRequested());
  try {
    const { content } = await userService.get();
    dispatch(usersReceived(content));
  } catch (error) {
    dispatch(usersRequestFailed(error.message));
  }
};
export const getCurrentUserData = () => (state) => {
  return state.users.entities
    ? state.users.entities.find((u) => u._id === state.users.auth.userId)
    : null;
};
export const getUserById = (id) => (state) => {
  if (state.users.entities) {
    return state.users.entities.find((user) => user._id === id);
  }
};
export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
export const getDataStatus = () => (state) => state.users.dataLoaded;
export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
export const getUsersList = () => (state) => state.users.entities;
export const getCurrentUserId = () => (state) => state.users.auth.userId;
export const getAuthError = () => (state) => state.users.error;

export default usersReducer;
