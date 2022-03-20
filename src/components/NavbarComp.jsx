import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";
import avatarImg from "../images/avatar.png";

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

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  console.log(isScrolled);

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
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-between"
            id="responsive-navbar-nav"
          >
            <Nav className="me-auto flex-row justify-content-around border border-secondary border-end-0 border-start-0 my-3 m-lg-0 border-lg-0">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#shows">TV Shows</Nav.Link>
              <Link className="nav-link" to={"/movies"}>
                Movies
              </Link>
              <Nav.Link href="#newpopular">New & Popular</Nav.Link>
              <Nav.Link href="#mylist">My List</Nav.Link>
            </Nav>

            <Nav className="align-items-center flex-row px-3">
              <Nav.Link className="flex-grow-1">
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

              <Nav.Link className="ms-5 me-2 m-lg-0" eventKey={2} href="#memes">
                <NavDropdown title={avatar} id="collasible-nav-dropdown">
                  <NavDropdown.Item className="text-white">
                    Account
                  </NavDropdown.Item>

                  <NavDropdown.Divider className="text-white" />
                  <NavDropdown.Item className="text-white">
                    Sign out of Netflix
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
