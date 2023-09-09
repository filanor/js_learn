import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ _id, color, name }) => {
  const className = `badge bg-${color} m-2`;
  return (
    <span className={className} key={_id}>
      {name}
    </span>
  );
};

Qualitie.propTypes = {
  _id: PropTypes.string.isRequired,
  color: PropTypes.string,
  name: PropTypes.string
};

export default Qualitie;
