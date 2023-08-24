import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import config from "../config.json";
import { toast } from "react-toastify";
import userService from "../services/user.serviсe";
import Loader from "../components/common/loader";
import localStorageService, {
  setTokens
} from "../services/localStorage.service";

const AuthContext = React.createContext();

export const httpAuth = axios.create({
  // baseURL: config.authEndpoint,
  params: {
    key: process.env.REACT_APP_FIREBASE_KEY
  }
});

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  async function signUp({ password, email, ...rest }) {
    try {
      const { data } = await httpAuth.post(
        `${config.authEndpoint}accounts:signUp`,
        {
          password,
          email,
          returnSecurToken: true
        }
      );
      console.log(data);
      setTokens(data);
      await createUser({
        _id: data.localId,
        email,
        rate: randomInt(1, 5),
        completedMeetings: randomInt(0, 200),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
          .toString(36)
          .substring(7)}.svg`,
        ...rest
      });
    } catch (error) {
      errorCatcher(error);
      const { code, message } = error.response.data.error;
      if (code === 400) {
        if (message === "EMAIL_EXISTS") {
          const errorObject = {
            email: "пользователь с таким email уже существует!!!"
          };
          throw errorObject;
        }
      }
    }
  }

  async function signIn({ email, password }) {
    try {
      const { data } = await httpAuth.post(
        `${config.authEndpoint}accounts:signInWithPassword`,
        {
          password,
          email,
          returnSecureToken: true
        }
      );

      setTokens(data);
      await getUserData(localStorageService.getUserId());
    } catch (error) {
      errorCatcher(error);
      const { code, message } = error.response.data.error;
      if (code === 400) {
        if (message === "INVALID_PASSWORD") {
          const errorObject = {
            password: "неверный пароль"
          };
          throw errorObject;
        }
      }
    }
  }

  function logOut() {
    localStorageService.removeAuthDats();
    setCurrentUser(null);
    history.push("/");
  }

  async function createUser(data) {
    try {
      const { content } = await userService.create(data);
      setCurrentUser(content);
    } catch (error) {
      errorCatcher(error);
    }
  }

  async function updateUser(data) {
    try {
      const { content } = await userService.update(data);

      setCurrentUser(content);
      history.push("/users/" + data._id);
    } catch (error) {
      errorCatcher(error);
    }
  }

  function errorCatcher(error) {
    const msg = error.response.data;
    setError(msg);
  }

  async function getUserData(userId) {
    try {
      const { content } = await userService.getUserById(userId);
      setCurrentUser(content);
    } catch (error) {
      errorCatcher(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (localStorageService.getAccessToken()) {
      getUserData(localStorageService.getUserId());
    } else {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    if (error !== null) {
      toast.error(error);
      setError(null);
    }
  }, [error]);

  return (
    <AuthContext.Provider
      value={{ signIn, signUp, logOut, currentUser, updateUser }}
    >
      {!isLoading ? children : <Loader />}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default AuthProvider;
