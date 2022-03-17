import { useContext } from "react";
import Users from "../components/Users";
import AddUser from "../comm/AddNewUser";
import { UsersContext } from "../../modules/UsersModule";

const UsersPage = () => {
  const { addUser } = useContext(UsersContext);

  return (
    <>
      <AddUser addUser={addUser} />
      <Users />
    </>
  );
};

export default UsersPage;
