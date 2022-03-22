import logo from "../logo.svg";
import React from "react";
import useAuth from "../hooks/useAuth";
import MainBanner from "../components/MainBanner";
import NavbarComp from "../components/NavbarComp";
import List from "../components/List";

const Home = () => {
  const { auth } = useAuth();
  return (
    <div className="bg-black overflow-hidden">
      <NavbarComp />
      <MainBanner />
      <List />
      <List />
      <List />
      <List />

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
