import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import UsersList from "../components/pages/userListPage/";
import UserPage from "../components/pages/userPage/";
import UserProvider from "../hooks/useUsers";

const Users = () => {
  const { userId } = useParams();
  return (
    <UserProvider>
      {userId ? <UserPage id={userId} /> : <UsersList />}
    </UserProvider>
  );
};

export default Users;
