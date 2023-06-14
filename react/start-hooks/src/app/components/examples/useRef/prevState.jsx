import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const PrevStateExample = () => {
  const prevState = useRef(0);
  const [otherState, setOtherState] = useState("false");
  const toggleOtherState = () => {
    setOtherState((prevState) => (prevState === "false" ? "true" : "false"));
  };

  useEffect(() => {
    prevState.current = otherState;
  }, [otherState]);

  return (
    <CardWrapper>
      <SmallTitle>Предыдущее состояние</SmallTitle>
      <Divider />

      <p>Предыдущее состояние: {prevState.current}</p>
      <p>Текущее состояние: {otherState}</p>
      <button onClick={toggleOtherState}>сфв</button>
    </CardWrapper>
  );
};

export default PrevStateExample;
