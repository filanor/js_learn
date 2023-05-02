/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from "react";
import Users from "./components/users";
import api from "./api";
import Loader from "./components/loader/loader";

const App = () => {
  const [users, setUsers] = useState();
  const [isUsersLoaded, setIsUsersLoaded] = useState(false);

  useEffect(() => {
    api.users.fetchAll().then((data) => {
      setUsers(data);
      console.log("true");
      setIsUsersLoaded(true);
    });
  }, []);

  const handleDelete = (id) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== id));
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

  return (
    (!isUsersLoaded && <Loader />) ||
    (users && (
      <React.StrictMode>
        <Users users={users} onDelete={handleDelete} onBook={handleBookmark} />
      </React.StrictMode>
    ))
  );
};

export default App;
