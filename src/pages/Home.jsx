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
      <NavbarComp />
      <MainBanner type="" genreTypes={videoTypes} />
      <ListSlider listName="Recent Added" />
      {videoTypes.map((list, index) => (
        <ListSlider key={index} listName={`Popular ${list}`} />
      ))}

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {auth?.user?.username}
            Edit It<code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
};

export default Home;
