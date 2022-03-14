// import logo from "../logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./SignIn";
import SignUpPage from "./SignUp";
import UnSigned from "./UnSigned";
import React from "react";

// import NavbarComp from "../components/Navbar";

const Home = () => {
  return (
    <>
      {/* <NavbarComp /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UnSigned />} />
          <Route path="signUp/" element={<SignUpPage />} />
          <Route path="signIn/" element={<SignInPage />} />
          <Route path="*" element={<div>404 - NotFound</div>} />
        </Routes>
      </BrowserRouter>

      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
      </div> */}
    </>
  );
};

export default Home;
