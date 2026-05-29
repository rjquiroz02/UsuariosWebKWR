import {
  createContext,
  useState,
} from "react";

import {
  users as initialUsers,
} from "../data/mockUsers";

export const UserContext =
  createContext();

export function UserProvider({
  children,
}) {

  const [users, setUsers] =
    useState(initialUsers);

  const addUser = (newUser) => {

    const userWithId = {
      ...newUser,
      id: Date.now().toString(),
    };

    setUsers((prevUsers) => [
      ...prevUsers,
      userWithId,
    ]);
  };

  const updateUser = (
    updatedUser
  ) => {

    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id
          ? updatedUser
          : user
      )
    );
  };

  const deleteUser = (userId) => {

    setUsers((prevUsers) =>
      prevUsers.filter(
        (user) => user.id !== userId
      )
    );
  };

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}