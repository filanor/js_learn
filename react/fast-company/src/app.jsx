import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";
import SearchStatus from "./components/searchStatus";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (id) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== id));
  };

  const handleBookmark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          const bookmark = !user.bookmark;
          return { ...user, bookmark: bookmark };
        }
        return { ...user };
      })
    );
  };

  return (
    <React.StrictMode>
      <SearchStatus qtty={users.length} />
      <Users users={users} onDelete={handleDelete} onBook={handleBookmark} />
    </React.StrictMode>
  );
};

export default App;