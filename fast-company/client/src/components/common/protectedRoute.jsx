/**
 * ! Обертка для Route, определяет, авторизован пользователь или нет
 */

import React from "react";

import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/users";

const ProtectedRoute = ({ component: Component, children, ...rest }) => {
  const isLoggetIn = useSelector(getIsLoggedIn());

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLoggetIn) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
        return Component ? <Component {...props} /> : children;
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default ProtectedRoute;
