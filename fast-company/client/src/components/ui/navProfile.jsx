import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { getCurrentUserData } from "../../store/users";
import Loader from "../common/loader";

const NavProfile = () => {
  const currentUser = useSelector(getCurrentUserData());
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  if (!currentUser) return <Loader />;

  return (
    <div className="dropdown" onClick={toggleMenu}>
      <div className="btn dropdown-toggle d-flex align-items-center">
        <img
          src={currentUser.image}
          className="imd-responsive rounded-circle"
          height="40"
        />
        <div className="me-2">{currentUser.name}</div>
      </div>
      <div className={"w-100 dropdown-menu" + (isOpen ? " show" : "")}>
        <Link to={`/users/${currentUser._id}`} className="dropdown-item">
          Profile
        </Link>
        <Link to="/logout" className="dropdown-item">
          LogOut
        </Link>
      </div>
    </div>
  );
};

export default NavProfile;
