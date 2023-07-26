import React from "react";
import {
  useHistory,
  useParams
} from "react-router-dom/cjs/react-router-dom.min";
// import api from "../../../api";
import FormComponent, {
  TextField,
  RadioField,
  MultiSelectField,
  SelectField
} from "../../common/form";

import Loader from "../../common/loader";
import { useProfessions } from "../../../hooks/useProfession";
import { useQuality } from "../../../hooks/useQuality";
import { useAuth } from "../../../hooks/useAuth";

const EditUserPage = () => {
  const history = useHistory();
  const { userId } = useParams();

  console.log("id in userEdit", userId);

  const { currentUser, updateUser } = useAuth();
  const { professions, loading: professionsLoading } = useProfessions();
  const { qualities, loading: qualitiesLoading } = useQuality();

  console.log("currentUser", currentUser);
  // const [data, setData] = useState({
  //   name: currentUser.name,
  //   email: currentUser.email,
  //   profession: currentUser.profession,
  //   sex: currentUser.sex,
  //   qualities: currentUser.qualities
  // });

  const transformData = (data) => {
    return data.map((qual) => ({ label: qual.name, value: qual._id }));
  };

  // const getProfessionById = (id) => {
  //   for (const prof of professions) {
  //     if (prof.value === id) {
  //       return { _id: prof.value, name: prof.label };
  //     }
  //   }
  // };
  const getQualities = (elements) => {
    const qualitiesArray = [];
    elements.forEach((elem) => {
      for (const quality in qualities) {
        if (elem === qualities[quality]._id) {
          qualitiesArray.push({
            value: qualities[quality]._id,
            label: qualities[quality].name,
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
    const qualitiesArray = [];
    for (const q of newData.qualities) {
      q.value ? qualitiesArray.push(q.value) : qualitiesArray.push(q);
    }
    updateUser({ ...newData, qualities: qualitiesArray });
    // console.log();
  };

  if (currentUser && !professionsLoading && !qualitiesLoading) {
    return (
      <div className="mt-3 container">
        <div className="row">
          <div className="col-md-6 offset-md-3 shadow p-3">
            <h1>Cтраница редактирования пользователя</h1>
            <FormComponent
              onSubmit={handleSubmit}
              validatorConfig={validateConfig}
              defaultData={currentUser}
            >
              <TextField
                label="Имя"
                name="name"
                // defaultValue={data.name}
                autoFocus
              />
              <TextField label="Email" name="email" />
              <SelectField
                options={transformData(professions)}
                label="Выбирите профессию"
                name="profession"
                // defaultValue={data.profession}
                defaultOption={currentUser.profession}
              />
              <RadioField
                label="Выберите пол"
                name="sex"
                defaultValue={currentUser.sex}
                options={[
                  { name: "Мужской", value: "male" },
                  { name: "Женский", value: "female" },
                  { name: "Пока не решил", value: "other" }
                ]}
              />
              <MultiSelectField
                options={transformData(qualities)}
                defaultOptions={getQualities(currentUser.qualities) || []}
                name="qualities"
                label="Выберите качества"
              />
              <div className="d-flex gap-3">
                <button
                  type="button"
                  className="d-block btn btn-secondary w-50 mx-auto mb-3 p-1"
                  onClick={() => history.push(`/users/${currentUser._id}`)}
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
