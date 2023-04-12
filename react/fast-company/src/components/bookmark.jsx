import React from "react";

const Bookmark = ({ bookmark, onBook, id }) => {
  const className =
    bookmark !== false ? "bi-bookmark-check-fill" : "bi-bookmark";
  return <i className={className} onClick={() => onBook(id)}></i>;
};

export default Bookmark;
