import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../api";

const Comment = ({
  _id: id,
  content,
  userId,
  onDelete,
  created_at: created
}) => {
  const [author, setAuthor] = useState();
  useEffect(() => {
    api.users.getById(userId).then((data) => setAuthor(data));
  }, []);

  const getdate = () => {
    const now = new Date();
    const date = new Date(Number(created));

    const yearDif = now.getFullYear() - date.getFullYear();
    if (yearDif === 0) {
      const dayDif = now.getDay() - date.getDay();
      if (dayDif === 0) {
        const hourDif = now.getHours() - date.getHours();
        if (hourDif === 0) {
          const minDif = now.getMinutes() - date.getMinutes();
          if (minDif >= 0 && minDif < 5) return "1 минуту назад";
          if (minDif >= 5 && minDif < 10) return "5 минут назад";
          if (minDif >= 10 && minDif < 30) return "10 минут назад";
          return "30 минут назад";
        }
        return `${date.getHours()}:${date.getMinutes()}`;
      }
      return `${date.getDay()} ${date.toLocaleString("default", {
        month: "long"
      })}`;
    }

    return (
      date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate()
    );
  };

  return (
    author && (
      <div className="bg-light card-body mb-3">
        <div className="row">
          <div className="col">
            <div className="d-flex flex-start">
              <img
                src="https://avatars.dicebear.com/api/avataaars/qweqasdas.svg"
                className="
                        rounded-circle
                        shadow-1-strong
                        me-3
                    "
                alt="avatar"
                width="65"
                height="65"
              />
              <div
                className="
                        flex-grow-1 flex-shrink-1
                    "
              >
                <div className="mb-4">
                  <div
                    className="
                                d-flex
                                justify-content-between
                                align-items-center
                            "
                  >
                    <p className="mb-1">
                      {author.name}
                      <span className="small"> {getdate()}</span>
                    </p>
                    <button
                      onClick={() => onDelete(id)}
                      className="
                                    btn btn-sm
                                    text-primary
                                    d-flex
                                    align-items-center
                                "
                    >
                      <i
                        className="
                                        bi bi-x-lg
                                    "
                      ></i>
                    </button>
                  </div>
                  <p className="small mb-0">{content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

Comment.propTypes = {
  comment: PropTypes.object,
  _id: PropTypes.string,
  userId: PropTypes.string,
  content: PropTypes.string,
  created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onDelete: PropTypes.func
};
export default Comment;
