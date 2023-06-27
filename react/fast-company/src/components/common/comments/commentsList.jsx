import React from "react";
import PropTypes from "prop-types";
import Comment from "../../ui/comment";

const CommentsList = ({ comments, onDelete }) => {
  return comments.map((comment) => (
    <Comment key={comment._id} {...comment} onDelete={onDelete} />
  ));
};

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func
};
export default CommentsList;
