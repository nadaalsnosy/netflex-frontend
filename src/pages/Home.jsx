import { useState, useEffect, useContext } from "react";
import MainBanner from "../components/Login/MainBanner";
import ListSlider from "../components/Login/ListSlider";

import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import { MoviesContext } from "../context/MoviesModule";

const Home = ({ type }) => {
  const videoTypes = ["Action", "Comedy", "Romance", "Horror", "Drama"];
  const { auth } = useAuth();
  const [content, setContent] = useState();
  const { getMovies, genere } = useContext(MoviesContext);

  const getRandomMovie = async () => {
    try {
      const res = await axios.get(
        `/movies/random?${type ? `type=${type}` : ""}`,
        {
          headers: { Authorization: `${auth.token}` },
        }
      );
      setContent(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (auth.token) {
  //     getRandomMovie();
  //     getMovies(type);
  //   }
  // }, [auth.token, type, genere]);

  // useEffect(() => {
  //   if (auth.token) {
  //     getMovies(type);
  //   }
  // }, [auth.token, type]);

  return (
    <div className="bg-black overflow-hidden">
      <MainBanner type={type} content={content} genreTypes={videoTypes} />
      <div className="py-5">
        <ListSlider listName="Recent Added" />
        <ListSlider listName="Most Popular" />

        {/* {videoTypes.map((list, index) => (
          <ListSlider
            key={index}
            listName={`Popular ${list}`}
            type={type}
            genereName={list}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Home;
