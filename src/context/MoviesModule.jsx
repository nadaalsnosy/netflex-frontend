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

const MoviesModule = (type, genere) => {
  const [movies, setMovies] = useState();
  const { auth } = useAuth();

  console.log(auth.token);

  useEffect(() => {
    const localMovies = localStorage.getItem("movies");

    const getMovies = async () => {
      try {
        const res = await axios.get(`/movies/`, {
          headers: { Authorization: `${auth.token}` },
        });
        setMovies(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [auth.token, type, genere]);

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
      <NavbarComp />
      <Routes>
        <Route path="/home" element={<Home />} />
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
