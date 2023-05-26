/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import PropTypes from "prop-types";
// import Users from "./components/users";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";
import NavBar from "./components/navBar";
import UserPage from "./components/userPage";

const App = ({ location }) => {
  console.log("location", location);
  return (
    <div className="main-div d-flex flex-column">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/user" component={UserPage} />
        <Route path="/users/:userId?" component={Users} />
        {/* <Users />; */}
      </Switch>
    </div>
  );
};

App.propTypes = {
  location: PropTypes.string
};

export default App;
