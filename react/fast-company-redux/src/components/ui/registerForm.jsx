import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import {
  SelectField,
  RadioField,
  MultiSelectField,
  CheckboxField
} from "../common/form";

import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getQuality } from "../../store/qualities";
import { getProfessions } from "../../store/professions";

const RegisterForm = () => {
  const history = useHistory();
  const { signUp } = useAuth();
  const [errors, setErrors] = useState({});
  const professions = useSelector(getProfessions());
  const professionsList = professions.map((p) => ({
    value: p._id,
    label: p.name
  }));

  const qualities = useSelector(getQuality());
  const qualitiesList = qualities.map((q) => ({ value: q._id, label: q.name }));
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    profession: "",
    sex: "male",
    qualities: [],
    licence: false
  });

  const validateConfig = {
    name: {
      isRequired: {
        message: "Имя обязателено для заполнения"
      },
      min: {
        message: "минимальный размер пароля 3 символа",
        value: 3
      }
    },
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
    },
    profession: {
      isRequired: {
        message: "Поле обязательно для заполнения"
      }
    },
    licence: {
      isRequired: {
        message: "Для работы с сервисом обязательно принять условия"
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
    const newData = { ...data, qualities: data.qualities.map((q) => q.value) };
    try {
      await signUp(newData);
      history.push("/");
    } catch (error) {
      setErrors(error);
      // /console.log(error);
    }
  };

  return (
    professions &&
    qualities && (
      <>
        <h3 className="mb-4 text-center">Register</h3>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Введите Имя"
            name="name"
            value={data.name}
            onChange={handleChange}
            error={errors.name}
          />
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
          <SelectField
            options={professionsList}
            label="Выбирите профессию"
            name="profession"
            onChange={handleChange}
            value={data.profession}
            error={errors.profession}
          />
          <RadioField
            label="Выберите пол"
            onChange={handleChange}
            value={data.sex}
            name="sex"
            options={[
              { name: "Мужской", value: "male" },
              { name: "Женский", value: "female" },
              { name: "Пока не решил", value: "other" }
            ]}
          />
          <MultiSelectField
            options={qualitiesList}
            onChange={handleChange}
            name="qualities"
            label="Выберите качества"
          />

          <CheckboxField
            name="licence"
            error={errors.licence}
            value={data.licence}
            onChange={handleChange}>
            <p>
              Я согласен с <a href="/">лицензионным соглашением</a>
            </p>
          </CheckboxField>
          <button
            disabled={!isValid}
            className="d-block btn-primary w-50 mx-auto mb-3 p-1"
            type="submit">
            Зарегистрироваться
          </button>
        </form>
      </>
    )
  );
};

export default RegisterForm;
