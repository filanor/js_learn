import React from "react";
import PropTypes from "prop-types";
import { useProfessions } from "../../hooks/useProfession";

const Profession = ({ id, classes }) => {
  const { getProfession, loading } = useProfessions();

  if (loading) return "Loading";

  const profession = getProfession(id);

  return <p className={classes}>{profession.name}</p>;
};

Profession.propTypes = {
  id: PropTypes.string,
  classes: PropTypes.string
};

export default Profession;
