import ManyCards from "../components/Login/ManyCards";

const SearchPage = () => {
  const list = [2, 3, 4, 5, 6, 7, 8, 9, 12, 4];
  const title = "Your Reasult";

  return (
    <>
      <ManyCards movies={list} pageTitle={title} />;
    </>
  );
};

export default SearchPage;
