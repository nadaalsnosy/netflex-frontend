import { Routes, Route } from "react-router-dom";
import Movies from "../pages/Movies";
import Movie from "../pages/Movie";
import { useState, useMemo, useEffect, createContext } from "react";
import axios from "axios";

export const MoviesContext = createContext();

const MoviesModule = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const localMovies = localStorage.getItem("movies");

    if (localMovies) {
      setMovies(JSON.parse(localMovies));
    } else
      axios.get("https://my-json-server.typicode.com/nadaalsnosy/mockNetflix/movies").then((res) => {
        const moviesData = res.data;
        // moviesData.map((m) => (m._id = `${m._id}`));
        setMovies(res.data);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const contextValue = useMemo(
    () => ({
      movies,
      setMovies,
    }),
    [movies]
  );

  return (
    <MoviesContext.Provider value={contextValue}>
      <Routes>
        <Route index element={<Movies />} />
        <Route path=":id" element={<Movie />} />
      </Routes>
    </MoviesContext.Provider>
  );
};

export default MoviesModule;
