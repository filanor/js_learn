import React from "react";
import PropTypes from "prop-types";
import Table from "../common/table";
// import TableHeader from "./tableHeader";
// import TableBody from "./tableBody";
import Bookmark from "../common/bookmark";
import Qualities from "./qualities";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Profession from "./profession";

const UsersTable = ({
  users,
  onSort,
  selectedSort,
  onDelete,
  onBook,
  ...rest
}) => {
  const columns = {
    name: {
      path: "name",
      name: "Имя",
      component: (user) => <Link to={`/users/${user._id}`}>{user.name}</Link>
    },
    qualities: {
      name: "Качества",
      component: (user) => <Qualities userQualities={user.qualities} />
    },
    professions: {
      // path: "profession.name",
      name: "Профессия",
      component: (user) => <Profession id={user.profession} />
    },
    completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
    rate: { path: "rate", name: "Оценка" },
    bookmark: {
      path: "bookmark",
      name: "Избранное",
      component: (user) => (
        <Bookmark bookmark={user.bookmark} onBook={onBook} id={user._id} />
      )
    },
    delete: {
      component: (user) => (
        <button
          className="btn btn-danger"
          onClick={() => {
            onDelete(user._id);
          }}
        >
          delete
        </button>
      )
    }
  };

  return (
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      data={users}
    />
    // если передаем тело и заголовок как детей:
    // <Table>
    //   <TableHeader {...{ onSort, selectedSort, columns }} />
    //   <TableBody {...{ columns, data: users }} />
    // </Table>
  );
};

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onBook: PropTypes.func.isRequired
};

export default UsersTable;
