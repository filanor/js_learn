import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";

const UseRefExercise = () => {
  const blockRef = useRef(null);

  const handleClick = () => {
    console.log("blockRef", blockRef.current);
    blockRef.current.style.height = "150px";
    blockRef.current.style.width = "150px";
    blockRef.current.innerHTML = "<small>text</small>";
    console.log("style", blockRef.current.style);
  };

  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть блок, у которого заданы ширина и высота. Добавьте кнопку, при
        нажатии которой изменятся следующие свойства:
      </p>
      <ul>
        <li>Изменится содержимое блока на &quot;text&quot;</li>
        <li>высота и ширина станут равны 150 и 80 соответственно</li>
      </ul>
      <div
        ref={blockRef}
        className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
        style={{
          height: 40,
          width: 60,
          color: "white",
        }}
      >
        <small>Блок</small>
      </div>
      <Divider />
      <button className="btn btn-secondary" onClick={handleClick}>
        Магия
      </button>
    </CollapseWrapper>
  );
};

export default UseRefExercise;
