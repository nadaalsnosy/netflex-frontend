import { useState, useEffect, useContext } from "react";
import MainBanner from "../components/Login/MainBanner";
import MovieCard from "../components/Login/MovieCard";
import { Spinner } from "react-bootstrap";

import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import { MoviesContext } from "../context/MoviesModule";
import { useParams } from "react-router-dom";

const GenerePage = (type) => {
  // const genreTypes = ["Action", "Comedy", "Romance", "Horror", "Drama"];
  const { auth } = useAuth();
  const { getMovies } = useContext(MoviesContext);

  // const [content, setContent] = useState();
  const [genresMovies, setGenresMovies] = useState([]);

  const { genere } = useParams();
  console.log(genere);

  // const getRandomMovie = async () => {
  //   try {
  //     const res = await axios.get(
  //       `/movies/random?${type ? `type=${type}` : ""}`,
  //       {
  //         headers: { Authorization: `${auth.token}` },
  //       }
  //     );
  //     setContent(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const loadMoviesLists = async () => {
    setGenresMovies(await getMovies(type, genere));
  };

  useEffect(() => {
    if (auth.token) {
      // getRandomMovie();
      loadMoviesLists();
    }
  }, [auth.token, type, genere]);

  return (
    <div className="bg-black overflow-hidden">
      <div className="py-5">
        {genresMovies ? (
          genresMovies.map((item, i) => (
            <MovieCard key={item._id} index={i} item={item} />
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

export default GenerePage;
