import logo from "../logo.svg";
import React from "react";
import useAuth from "../hooks/useAuth";
import MainBanner from "../components/Login/MainBanner";
import NavbarComp from "../components/Login/NavbarComp";
import ListSlider from "../components/Login/ListSlider";

const Home = () => {
  const { auth } = useAuth();
  const videoTypes = ["Action", "Comedy", "Romance", "Horrer"];
  return (
    <div className="bg-black overflow-hidden">
      <MainBanner type="" genreTypes={videoTypes} />
      <div className="py-5">
        <ListSlider listName="Recent Added" />
        {videoTypes.map((list, index) => (
          <ListSlider key={index} listName={`Popular ${list}`} />
        ))}
      </div>
    </div>
  );
};

export default Home;
