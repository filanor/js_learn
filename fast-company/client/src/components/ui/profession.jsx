import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
  getProfessionById,
  getProfessionsLoadingStatus
} from "../../store/professions";

const Profession = ({ id, classes }) => {
  const loading = useSelector(getProfessionsLoadingStatus());

  if (loading) return "Loading";

  const profession = useSelector(getProfessionById(id));

  return <p className={classes}>{profession.name}</p>;
};

Profession.propTypes = {
  id: PropTypes.string,
  classes: PropTypes.string
};

export default Profession;
