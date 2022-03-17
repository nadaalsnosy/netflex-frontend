import { useContext } from "react";
import AddNewUser from "../comm/AddNewUser";
import { UsersContext } from "../../modules/UsersModule";

const AddUserPage = () => {
	const { addUser } = useContext(UsersContext);

	return <AddNewUser addUser={addUser} />;
};

export default AddUserPage;
