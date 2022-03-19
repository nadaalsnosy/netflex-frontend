import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const NavbarComp = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              className="Netflix"
              src="https://news.hitb.org/sites/default/files/styles/large/public/2017-11/1024px-Netflix_2015_logo.svg_.png?itok=8b8LSIN8"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#shows">TV Shows</Nav.Link>
              <Link className="nav-link" to={"/movies"}>
                Movies
              </Link>
              <Nav.Link href="#newpopular">New & Popular</Nav.Link>
              <Nav.Link href="#mylist">My List</Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              <Nav.Link href="#deets">
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Titles,people,genres "
                    className="me-2 searchInput"
                    aria-label="Search"
                  />
                  <SearchOutlinedIcon className="icon" />
                </Form>
              </Nav.Link>

              <img
                className="avatar"
                src="https://th.bing.com/th/id/OIP.nhwxcWqxR9ykvLCRZsGJGAAAAA?pid=ImgDet&rs=1"
                alt=""
              />
              <Nav.Link eventKey={2} href="#memes">
                <NavDropdown title="" id="collasible-nav-dropdown">
                  <NavDropdown.Item className="text-white" href="">
                    Account
                  </NavDropdown.Item>

                  <NavDropdown.Divider className="text-white" />
                  <NavDropdown.Item className="text-white" href="">
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
