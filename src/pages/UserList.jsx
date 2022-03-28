import ManyCards from "../components/Login/ManyCards";

const UserList = () => {
  const list = [2, 3, 4, 5, 6, 7, 8, 9, 12, 4];
  const title = "My List";

  return (
    <>
      <ManyCards movies={list} pageTitle={title} />;
    </>
  );
};

export default UserList;
