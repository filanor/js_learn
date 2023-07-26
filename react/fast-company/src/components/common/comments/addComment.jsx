import React from "react";
import TextArea from "../form/textArea";
import FormComponent from "../form/form";
import PropTypes from "prop-types";

const AddComment = ({ onAddComment }) => {
  const validateConfig = {
    content: {
      isRequired: {
        message: "Сообщение не может быть пустым"
      }
    }
  };

  return (
    <>
      <h2>New comment</h2>

      <div className="mb-4">
        <FormComponent validatorConfig={validateConfig} onSubmit={onAddComment}>
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
