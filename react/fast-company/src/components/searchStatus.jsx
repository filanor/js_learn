import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ qtty }) => {
  const getTitleBage = () => {
    const mans =
      [2, 3, 4].includes(qtty) || ([2, 3, 4].includes(qtty % 10) && qtty > 20)
        ? `человека`
        : `человек`;

    return `${qtty} ${mans} тусанет с тобой сегодня`;
  };

  return <span className="badge fs-4 bg-primary m-2">{getTitleBage()}</span>;
};

SearchStatus.propTypes = {
  qtty: PropTypes.number.isRequired
};

export default SearchStatus;
