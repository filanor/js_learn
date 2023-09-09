import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ bookmark, onBook, id }) => {
  const className =
    bookmark !== false ? "bi-bookmark-check-fill" : "bi-bookmark";
  return <i className={className} onClick={() => onBook(id)}></i>;
};

Bookmark.propTypes = {
  bookmark: PropTypes.bool,
  onBook: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default Bookmark;
