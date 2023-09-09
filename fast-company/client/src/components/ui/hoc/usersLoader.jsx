import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataStatus, loadUsersLists } from "../../../store/users";
import PropTypes from "prop-types";
import Loader from "../../common/loader";

const UsersLoader = ({ children }) => {
  const dispatch = useDispatch();
  const dataStatus = useSelector(getDataStatus());

  useEffect(() => {
    if (!dataStatus) dispatch(loadUsersLists());
  }, []);

  if (!dataStatus) {
    return <Loader />;
  }
  return children;
};

UsersLoader.propTypes = {
  children: PropTypes.oneOfType(
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  )
};

export default UsersLoader;
