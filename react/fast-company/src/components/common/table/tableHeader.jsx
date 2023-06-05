import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ columns, onSort, selectedSort, ...rest }) => {
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort((selectedSort) => ({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc"
      }));
    } else {
      onSort({ path: item, order: "asc" });
    }
  };

  const addSortImg = (selectedSort) => {
    if (selectedSort.order === "desc") {
      return <i className="bi bi-caret-up-fill"></i>;
    }
    return <i className="bi bi-caret-down-fill"></i>;
  };

  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            scope="col"
            role={columns[column].path ? "button" : ""}
          >
            {columns[column].name}
            {columns[column].path === selectedSort.path &&
              addSortImg(selectedSort)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired
};

export default TableHeader;
