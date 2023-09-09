import React from "react";
import PropTypes from "prop-types";
// import Loader from "../../common/loader";
import { Link } from "react-router-dom";
import CardWrap from "../../common/Card";
import Comments from "../../ui/comments";

import Profession from "../../ui/profession";
import QualitiesList from "../../ui/qualities/qualitiesList";

import { useSelector } from "react-redux";
import { getCurrentUserId, getUserById } from "../../../store/users";

const UserPage = ({ id }) => {
  const currentUserId = useSelector(getCurrentUserId());
  const user = useSelector(getUserById(id));

  const render = () => {
    return (
      <div className="mt-3 container">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <CardWrap>
              {currentUserId === user._id && (
                <Link to={`/users/${id}/edit`} user={user}>
                  <button className="position-absolute top-0 end-0 btn btn-light btn-sm">
                    <i className="bi bi-gear"></i>
                  </button>
                </Link>
              )}
              <div className="d-flex flex-column align-items-center text-center position-relative">
                <img src={user.image} className="rounded-circle" width="150" />
                <h1>{user.name}</h1>

                <Profession
                  id={user.profession}
                  classes="text-secondary mb-1"
                />

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
                  <QualitiesList userQualities={user.qualities} />
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
  if (user) {
    return render();
  }
  // return <Loader />;
};

UserPage.propTypes = {
  id: PropTypes.string
};

export default UserPage;
