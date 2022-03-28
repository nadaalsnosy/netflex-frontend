import { useContext, useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

import ManyCards from "../components/Login/ManyCards";
import { MoviesContext } from "../context/MoviesModule";
import useAuth from "../hooks/useAuth";

const SearchPage = () => {
  const list = [2, 3, 4, 5, 6, 7, 8, 9, 12, 4];
  const { auth } = useAuth();
  const { keyword } = useParams();
  // console.log(keyword);

  const title = "Your Reasult";
  const [movies, setMovies] = useState([]);
  const { getMovies } = useContext(MoviesContext);

  const loadMoviesLists = async () => {
    setMovies(await getMovies());
    if (movies) {
      console.log(keyword);
    }
    console.log(movies);
  };

  useEffect(() => {
    if (auth.token) {
      loadMoviesLists();
    }
  }, [auth.token, keyword]);

  return (
    <>
      {movies ? (
        <ManyCards movies={movies} pageTitle={title} />
      ) : (
        <div className="d-flex justify-content-center p-3">
          <Spinner animation="border" variant="danger" />
        </div>
      )}
    </>
  );
};

export default SearchPage;
