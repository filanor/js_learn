import React, { useState } from "react";
import PropTypes from "prop-types";

import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";

const Users = ({ users, onDelete, onBook }) => {
  const count = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const userCrop = paginate(users, currentPage, pageSize);

  if (count === 0) {
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
          {userCrop.map((user) => (
            <User
              {...user}
              onDelete={onDelete}
              onBook={onBook}
              key={user._id}
            />
          ))}
        </tbody>
      </table>

      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onBook: PropTypes.func.isRequired
};

export default Users;
