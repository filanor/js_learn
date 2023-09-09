import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Qualitie from "./qualitie";
import { useDispatch, useSelector } from "react-redux";
import {
  getQualitiesByIds,
  getQualitiesLoadingStatus,
  loadQualitiesList
} from "../../../store/qualities";

const QualitiesList = ({ userQualities }) => {
  const dispatch = useDispatch();
  const loading = useSelector(getQualitiesLoadingStatus());
  const qualitiesList = useSelector(getQualitiesByIds(userQualities));
  useEffect(() => {
    dispatch(loadQualitiesList());
  }, []);
  if (loading) return "Loading";

  return (
    <>
      {qualitiesList.map((qual) => (
        <Qualitie key={qual._id} {...qual} />
      ))}
    </>
  );
};

QualitiesList.propTypes = {
  userQualities: PropTypes.array
};

export default QualitiesList;
