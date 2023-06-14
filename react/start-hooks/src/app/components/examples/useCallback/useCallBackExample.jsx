import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
  const [data, setData] = useState({});
  const withoutCallback = useRef(0);
  const withCallback = useRef(0);

  // Without Callback
  const validateWithOutCallback = (data) => {
    console.log(data);
  };
  useEffect(() => {
    withoutCallback.current++;
  }, [validateWithOutCallback]);

  // With Callbacks
  const validateWithCallback = useCallback((data) => {
    console.log(data);
  }, []);
  useEffect(() => {
    withCallback.current++;
  }, [validateWithCallback]);

  useEffect(() => {
    validateWithOutCallback(data);
  }, [data]);

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  return (
    <CardWrapper>
      <SmallTitle>Example</SmallTitle>
      <p>Render With Callback: {withCallback.current}</p>
      <label htmlFor="email">Введите Email:</label>
      <p>Render Without Callback: {withoutCallback.current}</p>
      <label htmlFor="email">Введите Email:</label>
      <input
        onChange={handleChange}
        value={data.email || ""}
        type="email"
        className="form-control"
        id="email"
        name="email"
      />
    </CardWrapper>
  );
};

export default UseCallBackExample;
