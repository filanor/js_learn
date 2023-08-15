/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { loadQualitiesList } from "./store/qualities";
import { loadingProfissionsList } from "./store/professions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadQualitiesList());
    dispatch(loadingProfissionsList());
  }, []);

  return (
    <div className="main-div d-flex flex-column">
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

      <ToastContainer />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.string
};

export default App;
