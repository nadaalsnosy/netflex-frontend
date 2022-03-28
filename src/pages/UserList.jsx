import ManyCards from "../components/Login/ManyCards";
import useAuth from "../hooks/useAuth";
import { Spinner } from "react-bootstrap";

const UserList = () => {
  // const list = [2, 3, 4, 5, 6, 7, 8, 9, 12, 4];
  const title = "My List";
  const { auth } = useAuth();

  let list = auth?.user?.userList;

  return (
    <>
      {list ? (
        <ManyCards movies={list} pageTitle={title} />
      ) : (
        <div className="d-flex justify-content-center p-3">
          <Spinner animation="border" variant="danger" />
        </div>
      )}
    </>
  );
};

export default UserList;
