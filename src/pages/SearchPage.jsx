import { useContext, useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

import ManyCards from "../components/Login/ManyCards";
import { MoviesContext } from "../context/MoviesModule";
import useAuth from "../hooks/useAuth";

const SearchPage = () => {
  const list = [2, 3, 4, 5, 6, 7, 8, 9, 12, 4];
  const genereTypes = ["action", "comedy", "romance", "horror", "drama"];
  const centerlet = "om";

  // for (const item of genereTypes) {
  //   const res = item.includes(centerlet);
  //   console.log(res);
  // }
  const { auth } = useAuth();
  let { keyword } = useParams();
  keyword = keyword.substring(1);
  // console.log(keyword);

  const title = "Your Reasult";
  // const [movies, setMovies] = useState([]);
  const { filterMovies } = useContext(MoviesContext);

  // const loadMoviesLists = async () => {
  //   setMovies(await getMovies());
  //   console.log(movies);

  //   if (movies) {
  //     console.log(movies);
  //     const newMovies = movies.filter((item) => item?.title.includes(keyword));
  //     setMovies(newMovies);
  //     console.log(newMovies);
  //   }
  //   // console.log(movies);
  // };

  // useEffect(() => {
  //   if (auth.token) {
  //     loadMoviesLists();
  //   }
  // }, [auth.token, keyword]);

  return (
    <>
      {filterMovies ? (
        <ManyCards movies={filterMovies} pageTitle={title} />
      ) : (
        <div className="d-flex justify-content-center p-3">
          <Spinner animation="border" variant="danger" />
        </div>
      )}
    </>
  );
};

export default SearchPage;
