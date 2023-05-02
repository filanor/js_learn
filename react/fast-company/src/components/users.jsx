import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import SearchStatus from "./searchStatus";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import GroopList from "./groopList";
import Loader from "./loader/loader";
import api from "../api";

const Users = ({ users, onDelete, onBook }) => {
  const [professions, setProfessions] = useState(api.professions.fetchAll());
  const [isProfessionsLoaded, setIsProfessionsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProf, setSellectedProf] = useState();
  const pageSize = 2;

  useEffect(() => {
    api.professions.fetchAll().then((data) => {
      setProfessions(data);
      setIsProfessionsLoaded(true);
    });
  }, []);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleProfessionSelect = (user) => {
    setSellectedProf(user);
    setCurrentPage(1);
  };

  const filtredUsers = selectedProf
    ? users.filter((user) => user.profession._id === selectedProf._id)
    : users;
  const count = filtredUsers.length;
  const userCrop = paginate(filtredUsers, currentPage, pageSize);

  const clearFilter = () => setSellectedProf();

  useEffect(() => {
    if (currentPage * pageSize > userCrop.length && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [users]);

  // Рендеринг
  if (count === 0) {
    return (
      <span className="badge fs-4 bg-danger">Никто с тобой не тусанет</span>
    );
  }

  return (
    <div className="d-flex">
      <div className="d-flex flex-column flex-shrink-1 p-3 justify-content-center">
        {(!isProfessionsLoaded && <Loader />) || (
          <GroopList
            items={professions}
            onItemSelect={handleProfessionSelect}
            selectedItem={selectedProf}
          />
        )}

        <button className="btn btn-secondary mt-2" onClick={clearFilter}>
          Очистить
        </button>
      </div>

      <div className="d-flex flex-column p-3 flex-grow-1">
        <SearchStatus qtty={count} />
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

        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onBook: PropTypes.func.isRequired
};

export default Users;
