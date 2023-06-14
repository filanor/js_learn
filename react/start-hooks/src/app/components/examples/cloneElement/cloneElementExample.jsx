import React from "react";
import CardWrapper from "../../common/Card";

import SmallTitle from "../../common/typografy/smallTitle";
import TextField from "../../common/form/textField";
const CloneElementExample = () => {
  const field = <TextField name="email" label="email" />;
  const handleChange = ({ target }) => {
    console.log("change", target);
  };
  return (
    <CardWrapper>
      <SmallTitle>Пример</SmallTitle>
      {field}
      {React.cloneElement(field, {
        onChange: handleChange,
        label: "Cloned Email",
      })}
    </CardWrapper>
  );
};

export default CloneElementExample;
