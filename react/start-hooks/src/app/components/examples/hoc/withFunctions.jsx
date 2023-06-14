import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (props) => {
  const isAuth = localStorage.getItem("token");
  const handleLogin = () => {
    localStorage.setItem("token", "auth");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  return (
    <CardWrapper>
      <Component
        isAuth={isAuth}
        onLogin={handleLogin}
        onLogOut={handleLogout}
      />
    </CardWrapper>
  );
};

export default withFunctions;
