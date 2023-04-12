import React from "react";
import User from "./user";

const Users = ({ users, onDelete, onBook }) => {
  if (users.length === 0) {
    return (
      <span className="badge fs-4 bg-danger">Никто с тобой не тусанет</span>
    );
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User
              {...user}
              onDelete={onDelete}
              onBook={onBook}
              key={user._id}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
