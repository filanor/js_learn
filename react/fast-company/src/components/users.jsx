import React, { useState, useEffect } from "react";
import _ from "lodash";

import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import GroopList from "./groopList";
import Loader from "./loader/loader";
import api from "../api";
import UsersTable from "./usersTable";

const Users = () => {
  const [professions, setProfessions] = useState(api.professions.fetchAll());
  const [isProfessionsLoaded, setIsProfessionsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProf, setSellectedProf] = useState();
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
  const pageSize = 2;

  const [users, setUsers] = useState();

  useEffect(() => {
    api.users.fetchAll().then((data) => {
      setUsers(data);
    });
  }, []);

  useEffect(() => {
    api.professions.fetchAll().then((data) => {
      setProfessions(data);
      setIsProfessionsLoaded(true);
    });
  }, []);

  const handleDelete = (id) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== id));
    // console.log("currentPage", currentPage);
    // console.log("users.length", users.length);
    // console.log("pageSize", pageSize);
    // if (userCrop && currentPage > userCrop.length / pageSize) {
    //   console.log("Пиздец");
    //   setCurrentPage((prevState) => prevState - 1);
    // }
  };

  const handleBookmark = (id) => {
    setUsers(
      users.map((user) => {
        return user._id === id
          ? { ...user, bookmark: !user.bookmark }
          : { ...user };
      })
    );
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleProfessionSelect = (user) => {
    setSellectedProf(user);
    setCurrentPage(1);
  }; 

  const handleOnSort = (item) => {
    setSortBy(item);
  };

  if (users) {
    const filtredUsers = selectedProf
      ? users.filter((user) => user.profession._id === selectedProf._id)
      : users;
    const count = filtredUsers.length;
    const sortedUsers = _.orderBy(filtredUsers, [sortBy.path], [sortBy.order]);
    const userCrop = paginate(sortedUsers, currentPage, pageSize);
    // setUserCrop(paginate(sortedUsers, currentPage, pageSize));
    const clearFilter = () => setSellectedProf();

    // Рендеринг
    if (users.length === 0) {
      return (
        <span className="badge fs-4 bg-danger">Никто с тобой не тусанет</span>
      );
    }

    return (
      <div className="d-flex">
        <div className="d-flex flex-column flex-shrink-1 p-3 justify-content-start">
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
          {count > 0 && (
            <UsersTable
              onSort={handleOnSort}
              selectedSort={sortBy}
              users={userCrop}
              onDelete={handleDelete}
              onBook={handleBookmark}
            />
          )}

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
  }

  return <Loader />;
};

// Users.propTypes = {
//   users: PropTypes.array.isRequired,
//   onDelete: PropTypes.func.isRequired,
//   onBook: PropTypes.func.isRequired
// };

export default Users;
