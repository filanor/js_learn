import React, { useState, useEffect } from "react";
import _ from "lodash";

import SearchStatus from "../../ui/searchStatus";
import Pagination from "../../common/pagination";
import { paginate } from "../../../utils/paginate";
import GroopList from "../../common/groopList";
import Loader from "../../common/loader";
import UsersTable from "../../ui/usersTable";
import { useSelector } from "react-redux";
import {
  getProfessions,
  getProfessionsLoadingStatus
} from "../../../store/professions";
import { getCurrentUserId, getUsersList } from "../../../store/users";

const UsersListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProf, setSellectedProf] = useState();
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
  const pageSize = 8;

  const currentUserId = useSelector(getCurrentUserId());
  const users = useSelector(getUsersList());

  const professions = useSelector(getProfessions());
  const professinsLoading = useSelector(getProfessionsLoadingStatus());

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedProf]);

  const handleDelete = (id) => {
    // setUsers((prevState) => prevState.filter((user) => user._id !== id));
    console.log(id);
  };

  const handleBookmark = (id) => {
    // const newArray =
    users.map((user) => {
      return user._id === id
        ? { ...user, bookmark: !user.bookmark }
        : { ...user };
    });
    // setUsers(newArray);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleProfessionSelect = (prof) => {
    setSellectedProf(prof);
    // setCurrentPage(1);
    setSearchQuery("");
  };

  const handleOnSort = (item) => {
    setSortBy(item);
  };

  const filterUsers = () => {
    let filteredUsers = [];
    if (selectedProf) {
      filteredUsers = users.filter(
        (user) => user.profession === selectedProf._id
      );
    } else if (searchQuery) {
      filteredUsers = users.filter((user) => {
        const name = user.name.toLowerCase();
        return name.includes(searchQuery.toLowerCase());
      });
    } else {
      filteredUsers = users;
    }
    return filteredUsers.filter((user) => user._id !== currentUserId);
  };

  if (users) {
    const filtredUsers = filterUsers();

    const count = filtredUsers.length;
    const sortedUsers = _.orderBy(filtredUsers, [sortBy.path], [sortBy.order]);
    const userCrop = paginate(sortedUsers, currentPage, pageSize);
    // setUserCrop(paginate(sortedUsers, currentPage, pageSize));
    const clearFilter = () => setSellectedProf();

    const handleSearchQueryChange = ({ target }) => {
      setSearchQuery(target.value);
      clearFilter();
    };

    // Рендеринг
    if (users.length === 0) {
      return (
        <span className="badge fs-4 bg-danger">Никто с тобой не тусанет</span>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-center">
            {professions && !professinsLoading && (
              <div className="d-flex flex-column flex-shrink-1 p-3 justify-content-start">
                <GroopList
                  items={professions}
                  onItemSelect={handleProfessionSelect}
                  selectedItem={selectedProf}
                />
                {/* )} */}

                <button
                  className="btn btn-secondary mt-2"
                  onClick={clearFilter}
                >
                  Очистить
                </button>
              </div>
            )}

            <div className="d-flex flex-column p-3 flex-grow-1">
              <input
                name="search"
                value={searchQuery}
                onChange={handleSearchQueryChange}
                placeholder="Search..."
                className="form-control mb-2"
              />
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

export default UsersListPage;
