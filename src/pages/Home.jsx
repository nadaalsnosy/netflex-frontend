import { useState, useEffect, useContext } from "react";
import MainBanner from "../components/Login/MainBanner";
import ListSlider from "../components/Login/ListSlider";

import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import { MoviesContext } from "../context/MoviesModule";

const Home = ({ type }) => {
  const genreTypes = ["Action", "Comedy", "Romance", "Horror", "Drama"];
  const { auth } = useAuth();
  const [content, setContent] = useState();
  const [recentAdded, setRecentAdded] = useState();
  const [mostPopular, setMostPopular] = useState();
  const [genresMovies, setGenresMovies] = useState([]);

  const { getMovies } = useContext(MoviesContext);

  const getRandomMovie = async () => {
    try {
      const res = await axios.get(
        `/movies/random?${type ? `type=${type}` : ""}`,
        {
          headers: { Authorization: `${auth.token}` },
        }
      );
      setContent(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadMoviesLists = async () => {
    setRecentAdded(await getMovies(type, "", false, true));
    setMostPopular(await getMovies(type, "", true));

    const genresMoviesList = [];
    for (const genre of genreTypes) {
      const moviesList = await getMovies(type, genre);
      genresMoviesList.push({
        genre,
        moviesList,
      });
    }
    setGenresMovies(genresMoviesList);
  };

  useEffect(() => {
    if (auth.token) {
      getRandomMovie();
      loadMoviesLists();
    }
  }, [auth.token, type]);

  return (
    <div className="bg-black overflow-hidden">
      <MainBanner type={type} content={content} genreTypes={genreTypes} />
      <div className="py-5">
        <ListSlider listName="Recent Added" moviesList={recentAdded} />
        <ListSlider listName="Most Popular" moviesList={mostPopular} />

        {genresMovies.map((item) => (
          <ListSlider
            key={item.genre}
            listName={`Popular ${item.genre}`}
            type={type}
            moviesList={item.moviesList}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
