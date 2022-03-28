import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useRef, useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatarImg from "../../images/avatar.png";
import useAuth from "../../hooks/useAuth";
import { MoviesContext } from "../../context/MoviesModule";

import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

const NavbarComp = () => {
  const avatar = <img className="avatar" src={avatarImg} alt="avatar" />;
  const [isScrolled, setIsScrolled] = useState();
  // const [filterMovies, setFilterMovies] = useState([]);

  const [keyword, setKeyword] = useState("");

  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const searchRef = useRef();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const { getMovies, movies, setMovies, setFilterMovies } =
    useContext(MoviesContext);

  // const handleSearchTerm = async () => {
  //   if (movies) {
  //     const newMovies = movies?.filter((item) => item?.title.includes(keyword));
  //     setFilterMovies(newMovies);
  //   }
  //   if (searchRef?.current?.value === "") {
  //     // navigate("/home");
  //     console.log("navvv");
  //   }
  // };

  const handleSearchInput = async (e) => {
    setKeyword(e.target.value);
    console.log(e.target.value);

    if (e.target.value) {
      console.log("inif");
      const newMovies = movies?.filter((item) =>
        item?.title.includes(keyword.toUpperCase() && keyword.toLowerCase())
      );
      setFilterMovies(newMovies);
      await navigate(`/search/:${keyword}`);
    } else {
      navigate(`/home`);
    }

    // if (searchRef?.current?.value === "") {
    //   // navigate("/home");
    //   console.log("navvv");
    // }
  };
  const getData = async () => {
    setMovies(await getMovies());
  };

  useEffect(() => {
    if (auth.token) {
      getData();
    }
  }, [auth.token]);

  const handleLogOut = async (e) => {
    try {
      localStorage.removeItem("user");
      setAuth("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar
        className={`${
          isScrolled ? "bg-lg-black" : "homeNavbar"
        } bg-black p-lg-3 fixed-top`}
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <img
              className="netflix"
              src="https://news.hitb.org/sites/default/files/styles/large/public/2017-11/1024px-Netflix_2015_logo.svg_.png?itok=8b8LSIN8"
              alt="netflixLogo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-between"
            id="responsive-navbar-nav"
          >
            <Nav className="me-auto flex-row justify-content-around border border-secondary border-end-0 border-start-0 my-3 m-lg-0 border-lg-0">
              <Link className="nav-link" to={"/home"}>
                Home
              </Link>
              <Link className="nav-link" to={"/series"}>
                TV Shows
              </Link>
              <Link className="nav-link" to={"/movies"}>
                Movies
              </Link>
              <Link className="nav-link" to={"/myList"}>
                My List
              </Link>
              {auth?.user?.isAdmin && (
                <Link className="nav-link" to={"/showLists"}>
                  Show Lists
                </Link>
              )}
            </Nav>

            <Nav className="align-items-center flex-row px-3">
              <Form className="d-flex align-items-center flex-grow-1">
                <FormControl
                  type="search"
                  value={keyword}
                  ref={searchRef}
                  onChange={handleSearchInput}
                  placeholder="Titles, generes "
                  className="me-2 searchInput"
                  aria-label="Search"
                />
                <Link to={`/search/:${keyword}`}>
                  <SearchOutlinedIcon
                    className="icon"
                    // onClick={handleSearchTerm}
                  />
                </Link>
              </Form>

              <NavDropdown
                className="ms-5 me-2 m-lg-0"
                title={avatar}
                id="collasible-nav-dropdown"
              >
                <Link className="dropdown-item text-white" to={"/profile"}>
                  Account
                </Link>

                <NavDropdown.Divider className="text-white" />
                <Link className="dropdown-item text-white" to={"/signIn"}>
                  <span className="d-block" onClick={handleLogOut}>
                    Sign Out
                  </span>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
