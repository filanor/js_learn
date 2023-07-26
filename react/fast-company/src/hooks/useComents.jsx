import React, { useContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { useAuth } from "./useAuth";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import commentsService from "../services/comments.service";
import { toast } from "react-toastify";

const CommentsContext = React.createContext();

export const useComments = () => {
  return useContext(CommentsContext);
};

export const CommentsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const { currentUser } = useAuth();
  const { userId } = useParams();

  useEffect(() => {
    getComments();
  }, [userId]);
  useEffect(() => {
    if (error !== null) {
      toast.error(error);
      setError(null);
    }
  }, [error]);

  async function getComments() {
    try {
      const { content } = await commentsService.getCommetns(userId);
      setComments(content);
    } catch (error) {
      errorCatcher(error);
    } finally {
      setLoading(false);
    }
  }
  async function createComments(data) {
    const comment = {
      _id: nanoid(),
      ...data,
      userId: currentUser._id,
      created_at: Date.now(),
      pageId: userId
    };
    try {
      const { content } = await commentsService.create(comment);
      setComments((prevState) => [...prevState, content]);
    } catch (error) {
      errorCatcher(error);
    }
  }

  async function removeComments(id) {
    try {
      const { content } = await commentsService.removeComments(id);
      if (content === null) {
        setComments((prevState) => prevState.filter((q) => q._id !== id));
      }
    } catch (error) {
      errorCatcher(error);
    }
  }

  function errorCatcher(error) {
    console.log(error);
    const msg = error.response.data;
    setError(msg);
  }

  return (
    <CommentsContext.Provider
      value={{ loading, comments, createComments, removeComments }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

CommentsProvider.propTypes = {
  children: PropTypes.oneOfType(
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  )
};

export default CommentsProvider;
