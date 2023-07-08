import React, { useState, useEffect } from "react";
import {
  useHistory,
  useParams
} from "react-router-dom/cjs/react-router-dom.min";
import api from "../../../api";
import FormComponent, {
  TextField,
  RadioField,
  MultiSelectField,
  SelectField
} from "../../common/form";

import Loader from "../../common/loader";

const EditUserPage = () => {
  const history = useHistory();
  const { userId } = useParams();

  const [professions, setProfessions] = useState();
  const [qualities, setQualities] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    profession: "",
    sex: "",
    qualities: []
  });
  const transformData = (data) => {
    return data.map((qual) => ({ label: qual.name, value: qual._id }));
  };

  useEffect(() => {
    // setIsLoading(true);
    api.users.getById(userId).then(({ profession, qualities, ...data }) =>
      setData((prevState) => ({
        ...prevState,
        ...data,
        qualities: transformData(qualities),
        profession: profession._id
      }))
    );
    api.professions.fetchAll().then((data) => {
      const professionsList = Object.keys(data).map((professionName) => ({
        label: data[professionName].name,
        value: data[professionName]._id
      }));
      setProfessions(professionsList);
    });
    api.qualities.fetchAll().then((data) => {
      const qualitiesList = Object.keys(data).map((optionName) => ({
        value: data[optionName]._id,
        label: data[optionName].name,
        color: data[optionName].color
      }));
      setQualities(qualitiesList);
    });
  }, []);

  const getProfessionById = (id) => {
    for (const prof of professions) {
      if (prof.value === id) {
        return { _id: prof.value, name: prof.label };
      }
    }
  };
  const getQualities = (elements) => {
    const qualitiesArray = [];
    elements.forEach((elem) => {
      for (const quality in qualities) {
        if (elem.value === qualities[quality].value) {
          qualitiesArray.push({
            _id: qualities[quality].value,
            name: qualities[quality].label,
            color: qualities[quality].color
          });
        }
      }
    });
    return qualitiesArray;
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

    profession: {
      isRequired: {
        message: "Поле обязательно для заполнения"
      }
    }
  };

  const handleSubmit = (newData) => {
    const { profession, qualities } = newData;

    const dataToUpdate = {
      ...newData,
      profession: getProfessionById(profession),
      qualities: getQualities(qualities)
    };

    api.users
      .update(userId, {
        ...dataToUpdate
      })
      .then((data) => history.push(`/users/${data._id}`));
  };

  if (data && professions && qualities) {
    return (
      <div className="mt-3 container">
        <div className="row">
          <div className="col-md-6 offset-md-3 shadow p-3">
            <h1>Cтраница редактирования пользователя</h1>
            <FormComponent
              onSubmit={handleSubmit}
              validatorConfig={validateConfig}
              defaultData={data}
            >
              <TextField
                label="Имя"
                name="name"
                // defaultValue={data.name}
                autoFocus
              />
              <TextField label="Email" name="email" />
              <SelectField
                options={professions}
                label="Выбирите профессию"
                name="profession"
                // defaultValue={data.profession}
                defaultOption={getProfessionById(data.profession)}
              />
              <RadioField
                label="Выберите пол"
                name="sex"
                // defaultValue={data.sex}
                options={[
                  { name: "Мужской", value: "male" },
                  { name: "Женский", value: "female" },
                  { name: "Пока не решил", value: "other" }
                ]}
              />
              <MultiSelectField
                options={qualities}
                // defaultValue={data.qualities || []}
                defaultOptions={data.qualities || []}
                name="qualities"
                label="Выберите качества"
              />
              <div className="d-flex gap-3">
                <button
                  type="button"
                  className="d-block btn btn-secondary w-50 mx-auto mb-3 p-1"
                  onClick={() => history.push(`/users/${data._id}`)}
                >
                  Отмена
                </button>
                <button
                  className="d-block btn btn-primary w-50 mx-auto mb-3 p-1"
                  type="submit"
                >
                  Изменить
                </button>
              </div>
            </FormComponent>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default EditUserPage;
