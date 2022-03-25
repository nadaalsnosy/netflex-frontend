// import { useState, useEffect } from "react";
// import useAuth from "../hooks/useAuth";
import MainBanner from "../components/Login/MainBanner";
import ListSlider from "../components/Login/ListSlider";
// import axios from "../api/axios";

const Home = ({ type }) => {
  // const { auth } = useAuth();
  const videoTypes = ["Action", "Comedy", "Romance", "Horrer"];
 
  return (
    <div className="bg-black overflow-hidden">
      <MainBanner type="" genreTypes={videoTypes} />
      <div className="py-5">
        <ListSlider listName="Recent Added" />
        {videoTypes.map((list, index) => (
          <ListSlider key={index} listName={`Popular ${list}`} type={type} />
        ))}
      </div>
    </div>
  );
};

export default Home;
