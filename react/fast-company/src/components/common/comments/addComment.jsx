import React, { useEffect, useState } from "react";
import TextArea from "../form/textArea";
import SelectField from "../form/selectField";
import FormComponent from "../form/form";
import PropTypes from "prop-types";
import API from "../../../api";

const AddComment = ({ onAddComment }) => {
  const [users, setUsers] = useState();

  useEffect(() => {
    API.users.fetchAll().then((users) => {
      const usersList = Object.keys(users).map((user) => ({
        value: users[user]._id,
        label: users[user].name
      }));
      setUsers(usersList);
    });
  }, []);
  const validateConfig = {
    content: {
      isRequired: {
        message: "Email обязателен для заполнения"
      }
    },
    userId: {
      isRequired: {
        message: "Поле обязательно для заполнения"
      }
    }
  };

  return (
    <>
      <h2>New comment</h2>
      <div className="mb-4">
        {/* <select className="form-select" name="userId" value="">
          <option disabled value="" selected>
            Выберите пользователя
          </option>

          <option>Доктор</option>
          <option>Тусер</option>
        </select> */}
      </div>
      <div className="mb-4">
        <FormComponent validatorConfig={validateConfig} onSubmit={onAddComment}>
          <SelectField name="userId" options={users} />
          <TextArea
            label="Сообщение"
            name="content"
            labelClasses="form-label"
          />
          <button className="btn btn-primary">Опубликовать</button>
        </FormComponent>
      </div>
    </>
  );
};

AddComment.propTypes = {
  onAddComment: PropTypes.func.isRequired
};

export default AddComment;
