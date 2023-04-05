import React, { useState } from "react";
import api from "../api";

const Users = () => {
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
      <tr key={_id}>
        <td>{name}</td>
        <td>
          {qualities.map((qual) => {
            const className = `badge bg-${qual.color} m-2`;
            return (
              <span className={className} key={qual.color}>
                {qual.name}
              </span>
            );
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

  const getTitleBage = (qtty) => {
    const mans =
      [2, 3, 4].includes(qtty) || ([2, 3, 4].includes(qtty % 10) && qtty > 20)
        ? `человека`
        : `человек`;

    return `${qtty} ${mans} тусанет с тобой сегодня`;
  };

  if (users.length === 0) {
    return (
      <span className="badge fs-4 bg-danger">Никто с тобой не тусанет</span>
    );
  }

  return (
    <>
      <span className="badge fs-4 bg-primary m-2">
        {getTitleBage(users.length)}
      </span>
      <table className="table">
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
    </>
  );
};

export default Users;
