import React, { useEffect, useState } from "react";
import TextField from "../components/textField";
import { validator } from "../utils/validator";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validateConfig = {
    email: {
      isRequired: {
        message: "Email обязателен для заполнения"
      },
      isEmail: {
        message: "Email введен не корректно"
      }
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения"
      },
      isCapitalSymbol: {
        message: "Пароль должен содержать заглавную букву"
      },
      isContainNumber: {
        message: "Пароль должен содержать цифру"
      },
      min: {
        message: "минимальный размер пароля 8 символов",
        value: 8
      }
    }
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validateConfig);

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(e);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-4 text-center">Login</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Введите email"
              name="email"
              value={data.login}
              onChange={handleChange}
              error={errors.email}
            />
            <TextField
              type="password"
              label="Введите пароль"
              name="password"
              value={data.password}
              onChange={handleChange}
              error={errors.password}
            />
            <button disabled={!isValid} className="w-100 mx-auto" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
