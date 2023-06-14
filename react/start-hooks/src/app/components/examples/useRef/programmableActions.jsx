import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammableActionsExample = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    console.log("123412341234", inputRef.current);
    inputRef.current.focus();
  };
  const handleClickWidth = () => {
    inputRef.current.style.width = "50%";
  };
  return (
    <CardWrapper>
      <SmallTitle className="card-title">
        Программируемые действия и свойства
      </SmallTitle>
      <Divider />
      <label htmlFor="email">Введите Email:</label>
      <input ref={inputRef} type="email" className="form-control" id="email" />
      <button onClick={handleClick}>Фокус на input</button>
      <button onClick={handleClickWidth}>Изменить ширину</button>
    </CardWrapper>
  );
};

export default ProgrammableActionsExample;
