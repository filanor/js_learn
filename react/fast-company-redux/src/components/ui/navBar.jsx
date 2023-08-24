import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavProfile from "./navProfile";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/users.js";

const NavBar = () => {
  const { pathname } = useLocation();
  const IsLoggedIn = useSelector(getIsLoggedIn());

  const getTabClass = (to) => {
    if (to === pathname) {
      return "nav-link active";
    }
    return "nav-link";
  };
  return (
    <nav className="navbar bg-light mb-3">
      <div className="container-fluid d-flex justify-content-center">
        <ul
          className="d-flex justify-content-center nav nav-tabs"
          // onClick={changePage}
        >
          <li className="nav-item">
            <Link className={getTabClass("/")} to="/">
              Main
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className={getTabClass("/login")} to="/login">
              Login
            </Link>
          </li> */}
          {IsLoggedIn && (
            <li className="nav-item">
              <Link className={getTabClass("/users")} to="/users">
                Users
              </Link>
            </li>
          )}
        </ul>
        <div className="d-flex">
          {IsLoggedIn ? (
            <NavProfile />
          ) : (
            <Link className={getTabClass("/login")} to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
