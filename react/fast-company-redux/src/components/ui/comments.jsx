import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { orderBy } from "lodash";

import CommentsList from "../common/comments/commentsList";
import AddComment from "../common/comments/addComment";
import CardWrap from "../common/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommentsLoadingStatus,
  getComments,
  loadСommentsList,
  removeComments,
  createComments
} from "../../store/comments";
import Loader from "../common/loader";
import { nanoid } from "nanoid";
import { getCurrentUserId } from "../../store/users";

const Comments = ({ userId }) => {
  const dispatch = useDispatch();
  const isCommentsLoaded = useSelector(getCommentsLoadingStatus());
  const commentsList = useSelector(getComments());
  const currentUserId = useSelector(getCurrentUserId());
  console.log("commentsList", commentsList);
  useEffect(() => {
    dispatch(loadСommentsList(userId));
  }, [userId]);

  const handleAddComment = (data) => {
    // createComments(comment);
    const comment = {
      _id: nanoid(),
      ...data,
      userId: currentUserId,
      created_at: Date.now(),
      pageId: userId
    };
    dispatch(createComments(comment));
  };

  const handleDeleteComment = (commentID) => {
    dispatch(removeComments(commentID));
  };

  const sortedComments = orderBy(commentsList, ["created_at"], ["desc"]);

  return (
    <>
      <CardWrap>
        <AddComment onAddComment={handleAddComment} />
      </CardWrap>
      <CardWrap>
        <h2>Comments</h2>
        <hr />
        {!isCommentsLoaded ? (
          sortedComments.length > 0 ? (
            <CommentsList
              comments={sortedComments}
              onDelete={handleDeleteComment}
            />
          ) : (
            <p>Комментариев пока нет</p>
          )
        ) : (
          <Loader />
        )}
      </CardWrap>
    </>
  );
};

Comments.propTypes = {
  userId: PropTypes.string
};

export default Comments;
