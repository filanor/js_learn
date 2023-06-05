import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import UsersList from "../components/pages/userListPage/";
import UserPage from "../components/pages/userPage/";

const Users = () => {
  const { userId } = useParams();
  return <>{userId ? <UserPage id={userId} /> : <UsersList />}</>;
};

export default Users;
