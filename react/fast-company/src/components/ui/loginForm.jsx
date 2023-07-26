import React, { useEffect, useState } from "react";
import { TextField, CheckboxField } from "../common/form";
import { validator } from "../../utils/validator";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const LoginForm = () => {
  const { signIn } = useAuth();
  const history = useHistory();
  const [data, setData] = useState({ email: "", password: "", stayOn: false });
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

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return false;
    try {
      await signIn(data);
      history.push(
        history.location.state ? history.location.state.from.pathname : "/"
      );
    } catch (error) {
      setErrors(error);
    }
  };

  return (
    <>
      <h3 className="mb-4 text-center">Login</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Введите email"
          name="email"
          value={data.email}
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
        <CheckboxField
          name="stayOn"
          value={data.stayOn}
          onChange={handleChange}
        >
          <p>Оставаться в системе</p>
        </CheckboxField>
        <button
          disabled={!isValid}
          className="d-block btn-primary w-50 mx-auto mb-3 p-1"
          type="submit"
        >
          Войти
        </button>
      </form>
    </>
  );
};

export default LoginForm;
