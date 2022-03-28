import MovieCard from "./MovieCard";
import { Spinner } from "react-bootstrap";

const ManyCards = (props) => {
  const { movies, pageTitle, search } = props;

  return (
    <div className=" container mt-5 pt-5 mb-5 text-white fw-bold">
      <h1 className="mb-3">{pageTitle}</h1>
      <div className="d-flex mb-2 flex-wrap justify-content-center">
        {movies ? (
          movies.map((item, i) => (
            <div className="listCards">
              <MovieCard key={item._id} index={i} item={item} />
            </div>
          ))
        ) : (
          <div className="d-flex justify-content-center p-3">
            <Spinner animation="border" variant="danger" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ManyCards;
