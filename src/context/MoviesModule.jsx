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
import EditProfile from "../components/EditProfile";

export const MoviesContext = createContext();

const MoviesModule = () => {
	const [movies, setMovies] = useState();
	const [genere, setGenere] = useState();
	const [rate, setRate] = useState(false);
	const [year, setYear] = useState(false);

	const { auth } = useAuth();
	console.log(movies);
	console.log(auth);
	console.log(genere);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const getMovies = async (type) => {
		try {
			const res = await axios.get(
				`/movies?${type ? `type=${type}` : ""}&${
					genere ? `genere=${genere}` : ""
				}&${rate ? `rate=${rate}` : ""}`,
				{
					headers: { Authorization: `${auth.token}` },
				}
			);
			setMovies(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	// useEffect(() => {
	//   if (auth.token) {
	//     getMovies();
	//   }
	// }, [auth.token]);

	console.log(movies);
	console.log("mainPage");

	// useEffect(() => {
	//   localStorage.setItem("movies", JSON.stringify(movies));
	// }, [movies]);

	const contextValue = useMemo(
		() => ({
			movies,
			setMovies,
			getMovies,
			genere,
			setGenere,
			setRate,
			rate,
			setYear,
			year,
		}),
		[movies, getMovies, setGenere, genere, rate, setRate, year, setYear]
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

				<Route path="/showLists" element={<RequireAdminAuth />}>
					<Route index element={<Movies />} />
					<Route path=":id" element={<Movie />} />
				</Route>
			</Routes>
		</MoviesContext.Provider>
	);
};

export default MoviesModule;
