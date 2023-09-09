import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import UsersList from "../components/pages/userListPage/";
import UserPage from "../components/pages/userPage/";
import EditUserPage from "../components/pages/editUserPage";
import UsersLoader from "../components/ui/hoc/usersLoader";

const Users = () => {
  const params = useParams();
  const { userId, edit } = params;

  return (
    <>
      <UsersLoader>
        {userId ? (
          edit ? (
            <EditUserPage />
          ) : (
            <UserPage id={userId} />
          )
        ) : (
          <UsersList />
        )}
      </UsersLoader>
    </>
  );
};

export default Users;
