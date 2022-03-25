import { Routes, Route } from "react-router-dom";
import Movies from "../pages/Movies";
import Movie from "../pages/Movie";
import { useState, useMemo, useEffect, createContext } from "react";
import axios from "../api/axios";
import NavbarComp from "../components/Login/NavbarComp";
import useAuth from "../hooks/useAuth";

import RequireAdminAuth from "../components/Auth/RequireAdminAuth";
import Home from "../pages/Home";
import VideoPage from "../pages/VideoPage";
import Profile from "../pages/Profile";

export const MoviesContext = createContext();

const MoviesModule = () => {
  const [movies, setMovies] = useState();
  const { auth } = useAuth();
  console.log(movies);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(`/movies/`, {
          headers: { Authorization: `${auth.token}` },
        });
        console.log(res.data);
        setMovies(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [auth.token]);
  console.log(movies);

  // useEffect(() => {
  //   localStorage.setItem("movies", JSON.stringify(movies));
  // }, [movies]);

  const contextValue = useMemo(
    () => ({
      movies,
      setMovies,
    }),
    [movies]
  );

  return (
    <MoviesContext.Provider value={contextValue}>
      <NavbarComp />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Home type="movies" />} />
        <Route path="/series" element={<Home type="series" />} />

        <Route path="/mainVideo" element={<VideoPage />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/showLists" element={<RequireAdminAuth />}>
          <Route index element={<Movies />} />
          <Route path=":id" element={<Movie />} />
        </Route>
      </Routes>
    </MoviesContext.Provider>
  );
};

export default MoviesModule;
