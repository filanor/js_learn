import React, { useState } from "react";

const Counter = (props) => {
  // let value = 1;
  // const [value, setValue] = useState(props.value);
  const { id, value, onIncriment, onDicriment } = props;

  const formatvalueer = () => {
    return value === 0 ? "empty" : value;
  };

  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";

    return classes;
  };

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBageClasses()}>{formatvalueer()}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => onIncriment(id)}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => onDicriment(id)}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
