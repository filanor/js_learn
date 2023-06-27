import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import Loader from "../../common/loader";
import QualitiesList from "../../ui/qualities/qualitiesList";
import { Link } from "react-router-dom";
import CardWrap from "../../common/Card";
import Comments from "../../ui/comments";

const UserPage = ({ id }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    api.users.getById(id).then((user) => {
      setUser(user);
    });
  }, []);

  const render = () => {
    return (
      <div className="mt-3 container">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <CardWrap>
              <Link
                to={`/users/${id}/edit`}
                // className="btn btn-primary"
                user={user}
              >
                <button className="position-absolute top-0 end-0 btn btn-light btn-sm">
                  <i className="bi bi-gear"></i>
                </button>
              </Link>
              <div className="d-flex flex-column align-items-center text-center position-relative">
                <img
                  src="https://avatars.dicebear.com/api/avataaars/qweqwdas.svg"
                  className="rounded-circle"
                  width="150"
                />
                <h1>{user.name}</h1>
                <p className="text-secondary mb-1">{user.profession.name}</p>
                <div className="text-muted">
                  <i
                    className="bi bi-caret-down-fill text-primary"
                    role="button"
                  ></i>
                  <i
                    className="bi bi-caret-up text-secondary"
                    role="button"
                  ></i>
                  <span className="ms-2">{user.rate}</span>
                </div>
              </div>
            </CardWrap>

            <CardWrap>
              <div className="d-flex flex-column justify-content-center text-center">
                <h5 className="card-title">
                  <span>Qualities</span>
                </h5>
                <p className="card-text">
                  <QualitiesList qualities={user.qualities} />
                </p>
              </div>
            </CardWrap>

            <CardWrap>
              <div className="d-flex flex-column justify-content-center text-center">
                <h5 className="card-title">
                  <span>Встретился, раз: </span>
                </h5>
                <p className="display-1">{user.completedMeetings}</p>
              </div>
            </CardWrap>
            {/* <Link to="/users" className="btn btn-primary">
              Все пользователи
            </Link> */}
          </div>

          <div className="col-md-8">
            <Comments userId={id} />
          </div>
        </div>
      </div>
    );
  };
  return (user && render()) || <Loader />;
};

UserPage.propTypes = {
  id: PropTypes.string.isRequired
};

export default UserPage;
