import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();

  const getTabClass = (to) => {
    if (to === pathname) {
      return "nav-link active";
    }
    return "nav-link";
  };
  return (
    <ul
      className="d-flex justify-content-center nav nav-tabs"
      // onClick={changePage}
    >
      <li className="nav-item">
        <Link className={getTabClass("/")} to="/">
          Main
        </Link>
      </li>
      <li className="nav-item">
        <Link className={getTabClass("/login")} to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className={getTabClass("/users")} to="/users">
          Users
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
