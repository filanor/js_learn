/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import PropTypes from "prop-types";
// import Users from "./components/users";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";
import NavBar from "./components/ui/navBar";
import UserPage from "./components/pages/userPage/userPage";
import EditUserPage from "./components/pages/editUserPage";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { ProfessionProvider } from "./hooks/useProfession";
import { QualityProvider } from "./hooks/useQuality";
import AuthProvider from "./hooks/useAuth";

const App = () => {
  return (
    <div className="main-div d-flex flex-column">
      <AuthProvider>
        <NavBar />
        <ProfessionProvider>
          <QualityProvider>
            <Switch>
              <Route exact path="/" component={Main} />

              <Route path="/login/:type?" component={Login} />
              <Route path="/user" component={UserPage} />
              <Route exact path="/users/:userId?" component={Users} />
              <Route path="/users/:userId?/edit" component={EditUserPage} />

              {/* <Users />; */}
            </Switch>
          </QualityProvider>
        </ProfessionProvider>
      </AuthProvider>

      <ToastContainer />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.string
};

export default App;
