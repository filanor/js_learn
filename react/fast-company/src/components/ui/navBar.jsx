import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import NavProfile from "./navProfile";

const NavBar = () => {
  const { pathname } = useLocation();
  const { currentUser } = useAuth();

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
          {currentUser && (
            <li className="nav-item">
              <Link className={getTabClass("/users")} to="/users">
                Users
              </Link>
            </li>
          )}
        </ul>
        <div className="d-flex">
          {currentUser ? (
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
