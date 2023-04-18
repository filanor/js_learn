import React from "react";
import PropTypes from "prop-types";

import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = ({
  _id,
  name,
  profession,
  qualities,
  completedMeetings,
  rate,
  onDelete,
  onBook,
  bookmark
}) => {
  // console.log(onDelete);
  return (
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map((qual) => (
          <Qualitie {...qual} key={qual._id} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}/5</td>
      <td>
        <Bookmark bookmark={bookmark} onBook={onBook} id={_id} />
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            onDelete(_id);
          }}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

User.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.object.isRequired,
  qualities: PropTypes.array.isRequired,
  completedMeetings: PropTypes.number,
  rate: PropTypes.number,
  onDelete: PropTypes.func.isRequired,
  onBook: PropTypes.func.isRequired,
  bookmark: PropTypes.bool.isRequired
};

User.defaultProps = {
  completedMeetings: 0,
  rate: 0
};

export default User;
