import React, { useState } from "react";
import api from "../api";

const Users = () => {
  console.log(api.users.fetchAll());
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (id) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== id));
  };

  const renderTable = () => {
    return users.map((user) => renderRow(user));
  };

  const renderRow = ({
    _id,
    name,
    profession,
    qualities,
    completedMeetings,
    rate,
  }) => {
    return (
      <tr>
        <td>{name}</td>
        <td>
          {qualities.map((qual) => {
            const className = `badge bg-${qual.color} m-2`;
            return <span className={className}>{qual.name}</span>;
          })}
        </td>
        <td>{profession.name}</td>
        <td>{completedMeetings}</td>
        <td>{rate}/5</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              handleDelete(_id);
            }}
          >
            delete
          </button>
        </td>
      </tr>
    );
  };

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценка</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </table>
  );
};

export default Users;
