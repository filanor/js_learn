import React from "react";
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
  bookmark,
}) => {
  // console.log(onDelete);
  return (
    <tr key={_id}>
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

export default User;
