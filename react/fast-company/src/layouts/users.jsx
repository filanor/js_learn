import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import UsersList from "../components/userList";
import UserPage from "../components/userPage";

const Users = () => {
  const { userId } = useParams();
  return <>{userId ? <UserPage id={userId} /> : <UsersList />}</>;
};

export default Users;
