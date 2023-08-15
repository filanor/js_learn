import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import UsersList from "../components/pages/userListPage/";
import UserPage from "../components/pages/userPage/";
import UserProvider from "../hooks/useUsers";
import EditUserPage from "../components/pages/editUserPage";

const Users = () => {
  const params = useParams();
  const { userId, edit } = params;

  return (
    <>
      <UserProvider>
        {userId ? (
          edit ? (
            <EditUserPage />
          ) : (
            <UserPage id={userId} />
          )
        ) : (
          <UsersList />
        )}
      </UserProvider>
    </>
  );
};

export default Users;
