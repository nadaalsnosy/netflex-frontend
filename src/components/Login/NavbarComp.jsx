import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";
import avatarImg from "../../images/avatar.png";
import useAuth from "../../hooks/useAuth";

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
  const { auth } = useAuth();
  console.log(auth);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <>
      <Navbar
        className={`${
          isScrolled ? "bg-lg-black" : "homeNavbar"
        } bg-black p-lg-0 fixed-top`}
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
              <Nav.Link className="flex-grow-1" to={"/"}>
                <Form className="d-flex align-items-center">
                  <FormControl
                    type="search"
                    placeholder="Titles, Genres "
                    className="me-2 searchInput"
                    aria-label="Search"
                  />
                  <SearchOutlinedIcon className="icon" />
                </Form>
              </Nav.Link>

              <NavDropdown
                className="ms-5 me-2 m-lg-0"
                title={avatar}
                id="collasible-nav-dropdown"
                to={"/"}
              >
                <Link className="dropdown-item text-white" to={"/profile"}>
                  Account
                </Link>

                <NavDropdown.Divider className="text-white" />
                <NavDropdown.Item className="text-white">
                  Sign out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
