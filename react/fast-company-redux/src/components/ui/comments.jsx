import React from "react";
import PropTypes from "prop-types";
import { orderBy } from "lodash";

import CommentsList from "../common/comments/commentsList";
import AddComment from "../common/comments/addComment";
import CardWrap from "../common/Card";
import { useComments } from "../../hooks/useComents";

const Comments = ({ userId }) => {
  // const [comments, setComments] = useState();
  const { comments, createComments, removeComments } = useComments();

  const handleAddComment = (comment) => {
    createComments(comment);
    // const newComment = { ...comment, pageId: userId };
    // api.comments.add(newComment).then((data) => {
    //   setComments((prevComments) => [...prevComments, data]);
    // });
  };

  const handleDeleteComment = (commentID) => {
    removeComments(commentID);
    // api.comments.remove(commentID);
    // .then((id) =>
    //   // setComments((prevComments) => prevComments.filter((x) => x._id !== id))
    // );
  };

  const sortedComments = orderBy(comments, ["created_at"], ["desc"]);

  return (
    <>
      <CardWrap>
        <AddComment onAddComment={handleAddComment} />
      </CardWrap>

      {comments && comments.length > 0 && (
        <CardWrap>
          <h2>Comments</h2>
          <hr />
          <CommentsList
            comments={sortedComments}
            onDelete={handleDeleteComment}
          />
        </CardWrap>
      )}
    </>
  );
};

Comments.propTypes = {
  userId: PropTypes.string
};

export default Comments;
