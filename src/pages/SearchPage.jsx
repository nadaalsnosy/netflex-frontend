import ManyCards from "../components/Login/ManyCards";
import { Spinner } from "react-bootstrap";

const SearchPage = () => {
  const list = [2, 3, 4, 5, 6, 7, 8, 9, 12, 4];
  const title = "Your Reasult";

  return (
    <>
      {list ? (
        <ManyCards movies={list} pageTitle={title} />
      ) : (
        <div className="d-flex justify-content-center p-3">
          <Spinner animation="border" variant="danger" />
        </div>
      )}
      <ManyCards movies={list} pageTitle={title} />;
    </>
  );
};

export default SearchPage;
