import React, { useEffect } from "react";

import PropTypes from "prop-types";
import Loader from "../../common/loader";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsLoggedIn,
  loadUsersLists,
  getUsersLoadingStatus
} from "../../../store/users";
import { loadQualitiesList } from "../../../store/qualities";
import { loadingProfissionsList } from "../../../store/professions";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn());
  const usersLoadingStatus = useSelector(getUsersLoadingStatus());

  useEffect(() => {
    dispatch(loadQualitiesList());
    dispatch(loadingProfissionsList());
    if (isLoggedIn) dispatch(loadUsersLists());
  }, [isLoggedIn]);

  if (usersLoadingStatus) return <Loader />;
  return children;
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType(
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  )
};

export default AppLoader;
