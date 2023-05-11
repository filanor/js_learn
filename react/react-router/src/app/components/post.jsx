import React from "react";
import { useHistory } from "react-router-dom";

const Post = ({ id, posts }) => {
  const history = useHistory();

  const getPostBtId = (id) => {
    return posts.find((post) => post.id.toString() === id);
  };

  const handleSave = () => {
    history.replace("/posts");
  };

  const post = getPostBtId(id);

  return (
    <>
      {" "}
      <h2>{post ? post.title : `Post with id=${id} not found`}</h2>
      <button
        onClick={() => {
          handleSave();
        }}
      >
        Сохранить
      </button>
    </>
  );
};

export default Post;
