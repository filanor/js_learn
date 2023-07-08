import React from "react";
import PropTypes from "prop-types";
import Qualitie from "./qualitie";
import { useQuality } from "../../../hooks/useQuality";

const QualitiesList = ({ userQualities }) => {
  const { loading } = useQuality();

  if (loading) return "Loading";
  return (
    <>
      {userQualities.map((qual) => (
        <Qualitie id={qual} key={qual} />
      ))}
    </>
  );
};

QualitiesList.propTypes = {
  userQualities: PropTypes.array
};

export default QualitiesList;
