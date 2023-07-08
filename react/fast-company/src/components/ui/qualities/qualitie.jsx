import React from "react";
import PropTypes from "prop-types";
import { useQuality } from "../../../hooks/useQuality";

const Qualitie = ({ id }) => {
  const { loading, getQualityById } = useQuality();

  const quality = getQualityById(id);

  const className = `badge bg-${quality.color} m-2`;
  if (!loading) {
    return (
      <span className={className} key={quality.color}>
        {quality.name}
      </span>
    );
  }
  return "Loading";
};

Qualitie.propTypes = {
  id: PropTypes.string.isRequired
};

export default Qualitie;
