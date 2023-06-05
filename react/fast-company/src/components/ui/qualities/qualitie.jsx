import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ color, name }) => {
  const className = `badge bg-${color} m-2`;

  return (
    <span className={className} key={color}>
      {name}
    </span>
  );
};

Qualitie.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Qualitie;
