import React from "react";
import PropTypes from "prop-types";

const CardWrap = ({ children, mb, classes }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">{children}</div>
    </div>
  );
};

CardWrap.defaultProps = {
  mb: "3"
};
CardWrap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  mb: PropTypes.string,
  classes: PropTypes.string
};

export default CardWrap;
