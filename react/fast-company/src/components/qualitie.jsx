import React from "react";

const Qualitie = ({ color, name }) => {
  const className = `badge bg-${color} m-2`;

  return (
    <span className={className} key={color}>
      {name}
    </span>
  );
};

export default Qualitie;
