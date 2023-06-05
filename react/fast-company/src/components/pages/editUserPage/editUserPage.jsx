import React, { useState, useEffect } from "react";
import {
  useHistory,
  useParams
} from "react-router-dom/cjs/react-router-dom.min";
import api from "../../../api";
import TextField from "../../common/form/textField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
import SelectField from "../../common/form/selectField";
import { validator } from "../../../utils/validator";
import Loader from "../../common/loader";
import _ from "lodash";

const EditUserPage = () => {
  const history = useHistory();
  const { userId } = useParams();

  const [errors, setErrors] = useState({});
  const [professions, setProfessions] = useState();
  const [qualities, setQualities] = useState({});
  const [user, setUser] = useState();
  useEffect(() => {
    api.users.getById(userId).then((user) => {
      setUser(user);
    });
    api.qualities.fetchAll().then((data) => setQualities(data));
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  const handleChange = (target) => {
    let value;
    if (target.name === "profession") {
      value = _.find(professions, { _id: target.value });
    } else if (target.name === "qualities") {
      console.log("target.value", target.value);
      value = target.value.map((qual) => {
        return _.find(qualities, { _id: qual.value });
      });
      console.log("handleChange", user);
    } else {
      value = target.value;
    }
    setUser((prevState) => ({ ...prevState, [target.name]: value }));
  };

  const validate = () => {
    const errors = validator(user, validateConfig);

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return false;
    api.users.update(userId, user);
    history.goBack();
  };

  if (user) {
    return (
      user && (
        <div className="mt-3 container">
          <div className="row">
            <div className="col-md-6 offset-md-3 shadow p-3">
              <h1>Cтраница редактирования пользователя</h1>
              <form onSubmit={handleSubmit}>
                <TextField
                  value={user.name}
                  label="Имя"
                  name="name"
                  onChange={handleChange}
                />
                <TextField
                  label="Email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <SelectField
                  options={professions}
                  label="Выбирите профессию"
                  name="profession"
                  // defaultOption={user.profession._id}
                  onChange={handleChange}
                  value={user.profession._id}
                  error={errors.profession}
                />
                <RadioField
                  label="Выберите пол"
                  onChange={handleChange}
                  value={user.sex}
                  name="sex"
                  options={[
                    { name: "Мужской", value: "male" },
                    { name: "Женский", value: "female" },
                    { name: "Пока не решил", value: "other" }
                  ]}
                />
                <MultiSelectField
                  options={qualities}
                  value={user.qualities}
                  defaultOptions={user.qualities}
                  onChange={handleChange}
                  name="qualities"
                  label="Выберите качества"
                />
                <button
                  className="d-block btn-primary w-50 mx-auto mb-3 p-1"
                  type="submit"
                >
                  Изменить
                </button>
              </form>
            </div>
          </div>
        </div>
      )
    );
  } else {
    return <Loader />;
  }
};

// EditUserPage.propTypes = {
//   // id: PropTypes.string.isRequired
// };

export default EditUserPage;
