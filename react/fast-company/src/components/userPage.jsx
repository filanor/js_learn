import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api";
import Loader from "./loader/loader";
import QualitiesList from "./qualitiesList";
import { Link } from "react-router-dom";

const UserPage = ({ id }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    api.users.getById(id).then((user) => {
      setUser(user);
    });
  }, []);

  const render = () => {
    return (
      <>
        <h1>{user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <div className="d-flex">
          <QualitiesList qualities={user.qualities} />
        </div>
        <p>Встретился, раз: {user.completedMeetings}</p>
        <p>Рэйтинг: {user.rate}</p>
        <Link to="/users" className="btn btn-primary">
          Все пользователи
        </Link>
      </>
    );
  };
  return (user && render()) || <Loader />;
};

UserPage.propTypes = {
  id: PropTypes.string.isRequired
};

export default UserPage;
