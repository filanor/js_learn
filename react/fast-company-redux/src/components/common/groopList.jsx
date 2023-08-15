import React from "react";
import PropTypes from "prop-types";

const GroopList = ({
  items,
  indexProps,
  nameProps,
  selectedItem,
  onItemSelect
}) => {
  const itemsArray = Array.isArray(items) ? items : Object.values(items);

  return (
    <ul className="list-group">
      {itemsArray.map((item) => {
        return (
          <li
            className={
              "list-group-item" + (isEqual(item, selectedItem) ? " active" : "")
            }
            onClick={() => onItemSelect(item)}
            key={item[indexProps]}
            role="button"
          >
            {item[nameProps]}
          </li>
        );
      })}
    </ul>
  );
};

const isEqual = (arrayFirst, arraySecond) => {
  return JSON.stringify(arrayFirst) === JSON.stringify(arraySecond);
};

GroopList.defaultProps = {
  indexProps: "_id",
  nameProps: "name"
};

GroopList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  indexProps: PropTypes.string.isRequired,
  nameProps: PropTypes.string.isRequired,
  selectedItem: PropTypes.object,
  onItemSelect: PropTypes.func
};
export default GroopList;
