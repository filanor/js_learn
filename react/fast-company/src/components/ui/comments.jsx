import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../api";
import CommentsList from "../common/comments/commentsList";
import AddComment from "../common/comments/addComment";
import CardWrap from "../common/Card";

const Comments = ({ userId }) => {
  const [comments, setComments] = useState();

  useEffect(() => {
    api.comments
      .fetchCommentsForUser(userId)
      .then((comments) => setComments(comments));
  }, []);

  const handleAddComment = (comment) => {
    const newComment = { ...comment, pageId: userId };
    api.comments.add(newComment).then((data) => {
      setComments((prevComments) => [...prevComments, data]);
    });
  };

  const handleDeleteComment = (commentID) => {
    api.comments
      .remove(commentID)
      .then((id) =>
        setComments((prevComments) => prevComments.filter((x) => x._id !== id))
      );
  };

  console.log("before", comments);
  const sortArr = (a, b) => {
    if (a.created_at < b.created_at) return 1;
    if (a.created_at === b.created_at) return 0;
    if (a.created_at > b.created_at) return -1;
  };
  comments.sort(sortArr);

  console.log("after", comments);

  return (
    <>
      <CardWrap>
        <AddComment onAddComment={handleAddComment} />
      </CardWrap>

      {comments && comments.length > 0 && (
        <CardWrap>
          <h2>Comments</h2>
          <hr />
          <CommentsList comments={comments} onDelete={handleDeleteComment} />
        </CardWrap>
      )}
    </>
  );
};

Comments.propTypes = {
  userId: PropTypes.string
};

export default Comments;
