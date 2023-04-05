import React, { useState } from "react";

const Counter = () => {
  // let count = 1;
  const [count, setCount] = useState(0);
  const [tags, setTags] = useState(["tags1", "tags2", "tags3"]);

  const formatCounter = () => {
    return count === 0 ? "empty" : count;
  };

  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += count === 0 ? "bg-warning" : "bg-primary";

    return classes;
  };

  const handleIncriment = () => {
    setCount((prevState) => prevState + 1);
  };
  const handleDicriment = () => {
    setCount((prevState) => prevState - 1);
  };
  const handleTagChange = (id) => {
    setTags((prevState) => prevState.filter((tag) => tag !== id));
  };

  const renderTags = () => {
    return tags.map((tag) => {
      return (
        <buttton
          className="btn btn-primary btn-sm m-2"
          key={tag}
          onClick={() => handleTagChange(tag)}
        >
          {tag}
        </buttton>
      );
    });
  };

  if (tags.length !== 0) {
    return <ul>{renderTags()}</ul>;
  }

  return (
    <>
      <h1 className={getBageClasses()}>{formatCounter()}</h1>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncriment}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDicriment}>
        -
      </button>
    </>
  );
};

export default Counter;
