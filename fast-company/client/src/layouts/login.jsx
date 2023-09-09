import React, { useState } from "react";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );

  const toggleFormType = () => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          {formType === "register" ? (
            <>
              <RegisterForm />
              <p>
                Already have account?{" "}
                <a role="button" onClick={toggleFormType} className="link">
                  Sign In
                </a>
              </p>
            </>
          ) : (
            <>
              <LoginForm />
              <p>
                Dont have account?{" "}
                <a role="button" onClick={toggleFormType} className="link">
                  Sign Up
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
