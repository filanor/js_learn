import React from "react";
import PropTypes from "prop-types";

import { displayDate } from "../../utils/displayDate";
import { useSelector } from "react-redux";
import { getCurrentUserId, getUserById } from "../../store/users";

const Comment = ({
  _id: id,
  content,
  userId,
  onDelete,
  created_at: created
}) => {
  const currentUserId = useSelector(getCurrentUserId());
  const author = useSelector(getUserById(userId));

  return (
    <div className="bg-light card-body mb-3">
      <div className="row">
        <div className="col">
          <div className="d-flex flex-start">
            <img
              src={author.image}
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
                    <span className="small"> {displayDate(created)}</span>
                  </p>
                  {currentUserId === userId && (
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
                  )}
                </div>
                <p className="small mb-0">{content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
