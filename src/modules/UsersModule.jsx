import { Routes, Route } from "react-router-dom";
import Users from "../others/pages/Users";
import User from "../pages/User";
import { useState, useMemo, useEffect, createContext } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

export const UsersContext = createContext();

const UsersModule = () => {
  const [users, setUsers] = useState();
  const usersAboveThirty = useMemo(() => {
    return users?.filter((user) => {
      console.log("RECALCULATION");
      return user.age > 30;
    }).length;
  }, [users]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const usersData = res.data;
      const usersDataIds = usersData.map((u) => (u.id = `${u.id}userId`));
      setUsers(res.data);
      console.log(usersDataIds);
    });

    return () => {
      localStorage.removeItem("user");
      console.log("USE EFFECT CLEAN UP");
    };
  }, []);

  const incrementUserAge = (userId) => {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === userId ? { ...user, age: user.age + 1 } : user
      )
    );
  };

  const addUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUsers((currentUsers) => [
      ...currentUsers,
      { ...user, age: +user.age, id: uuid() },
    ]);
  };

  const contextValue = useMemo(
    () => ({
      users,
      usersAboveThirty,
      addUser,
      incrementUserAge,
    }),
    [users, usersAboveThirty]
  );

  return (
    <UsersContext.Provider value={contextValue}>
      <Routes>
        <Route index element={<Users />} />
        <Route path=":id" element={<User />} />
      </Routes>
    </UsersContext.Provider>
  );
};

export default UsersModule;
