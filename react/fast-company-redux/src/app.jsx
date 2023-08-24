/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import {
  Redirect,
  Route,
  Switch
} from "react-router-dom/cjs/react-router-dom.min";
import PropTypes from "prop-types";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";
import NavBar from "./components/ui/navBar";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./hooks/useAuth";
import ProtectedRoute from "./components/common/protectedRoute";
import LogOut from "./layouts/logOut";
import AppLoader from "./components/ui/hoc/appLoader";

const App = () => {
  return (
    <div className="main-div d-flex flex-column">
      <AppLoader>
        <AuthProvider>
          <NavBar />
          <Switch>
            <ProtectedRoute path="/users/:userId?/:edit?" component={Users} />
            <Route path="/login/:type?" component={Login} />
            <Route path="/logout" component={LogOut} />
            <Route exact path="/" component={Main} />
            <Redirect to="/" />
            {/* <Users />; */}
          </Switch>
        </AuthProvider>
      </AppLoader>
      <ToastContainer />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.string
};

export default App;
