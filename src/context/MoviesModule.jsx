import { Routes, Route } from "react-router-dom";
import Movies from "../pages/Movies";
import Movie from "../pages/Movie";
import { useMemo, createContext } from "react";
import axios from "../api/axios";
import NavbarComp from "../components/Login/NavbarComp";
import useAuth from "../hooks/useAuth";

import RequireAdminAuth from "../components/Auth/RequireAdminAuth";
import Home from "../pages/Home";
import VideoPage from "../pages/VideoPage";
import Profile from "../pages/Profile";
import EditProfile from "../components/Login/EditProfile";
import SearchPage from "../pages/SearchPage";
import UserList from "../pages/UserList";

export const MoviesContext = createContext();

const MoviesModule = () => {
  const { auth } = useAuth();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getMovies = async (type, genere, mostPopular, recentAdded) => {
    try {
      const res = await axios.get(
        `/movies?${type ? `type=${type}` : ""}&${
          genere ? `genere=${genere}` : ""
        }&${mostPopular ? `rate=${mostPopular}` : ""}&${
          recentAdded ? `year=${recentAdded}` : ""
        }`,
        {
          headers: { Authorization: `${auth.token}` },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = useMemo(
    () => ({
      getMovies,
    }),
    [getMovies]
  );

  return (
    <MoviesContext.Provider value={contextValue}>
      <NavbarComp />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Home type="movie" />} />
        <Route path="/series" element={<Home type="series" />} />

        <Route path="/mainVideo/:id" element={<VideoPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/myList" element={<UserList />} />

        <Route path="/showLists" element={<RequireAdminAuth />}>
          <Route index element={<Movies />} />
          <Route path=":id" element={<Movie />} />
        </Route>
      </Routes>
    </MoviesContext.Provider>
  );
};

export default MoviesModule;
