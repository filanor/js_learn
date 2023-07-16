import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import config from "../config.json";
import { toast } from "react-toastify";
import userService from "../services/user.serviсe";
import { setTokens } from "../services/localStorage.service";

const AuthContext = React.createContext();

const httpAuth = axios.create();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState(null);

  async function signUp({ password, email, ...rest }) {
    try {
      const { data } = await httpAuth.post(
        `${config.authEndpoint}${process.env.REACT_APP_FIREBASE_KEY}`,
        {
          password,
          email,
          returnSecurToken: true
        }
      );
      setTokens(data);
      await createUser({ _id: data.localId, email, ...rest });
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

  async function createUser(data) {
    try {
      const { content } = await userService.create(data);
      setCurrentUser(content);
    } catch (error) {
      errorCatcher(error);
    }
  }

  async function signIn({ email, password }) {
    try {
      const data = await httpAuth.post(
        `${config.signInEndpoint}${process.env.REACT_APP_FIREBASE_KEY}`,
        {
          password,
          email,
          returnSecurToken: true
        }
      );
      setTokens(data);
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

  function errorCatcher(error) {
    const msg = error.response.data;
    setError(msg);
  }

  useEffect(() => {
    if (error !== null) {
      toast.error(error);
      setError(null);
    }
  }, [error]);

  return (
    <AuthContext.Provider value={{ signIn, signUp, currentUser }}>
      {children}
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
