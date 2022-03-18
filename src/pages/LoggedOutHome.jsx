import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import logo from "../images/Logonetflix.png";
import oieImg from "../images/oieImg.gif";

import LoggedOutFooter from "../components/LoggedOutFooter";
import LoggedOutCardsContainer from "../components/LoggedOutCardsContainer";
import LoggedOutAccordion from "../components/LoggedOutAccordion";

const LoggedOutHome = () => {
  return (
    <>
      <nav className="loggedOut">
        <div className="container d-flex justify-content-between align-items-center my-4">
          <div className="imgContainer">
            <img src={logo} alt="logo" />
          </div>
          <div className="linksContent">
            <Link to={`/signUp`}>
              <Button variant="danger mx-1 py-0 pb-1" type="submit">
                Sign Up
              </Button>
            </Link>
            <Link to={`/signIn`}>
              <Button variant="danger mx-1 py-0 pb-1" type="submit">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="mainBanner grayBoderBottom">
        <div className="overlay centeringBody position-relative">
          <div className="container">
            <h1 className="fw-bold text-white text-center">
              Welcome To Our Netflix
            </h1>
            <img className="gifImg" src={oieImg} alt="oieImg" />
          </div>
        </div>
      </section>

      <section className="mainSection">
        <LoggedOutCardsContainer />
      </section>

      <section className="informationSection">
        <LoggedOutAccordion />
      </section>

      <footer className="footerSection">
        <LoggedOutFooter />
      </footer>
    </>
  );
};

export default LoggedOutHome;
