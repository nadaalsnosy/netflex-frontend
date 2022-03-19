import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";

import Button from "@mui/material/Button";
import { PlayArrow, InfoOutlined } from "@mui/icons-material";
import Stack from "@mui/material/Stack";

import spiderMan from "../images/spiderMan.jpg";

const MainBanner = () => {
  return (
    <div className="mainContainer">
      <img src={spiderMan} alt="spiderMan" />
      <div className="overlay bannerOverlay"></div>
      <div className="bannerInfo">
        <div className="container text-white">
          <h1>Film Title</h1>
          <p>sdfsfsdfsdf</p>
          <div className="linksContent">
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined bg-White text-dark fs-8"
                startIcon={<PlayArrow />}
              >
                Play
              </Button>
              <Button
                variant="contained bg-grey text-white fs-8"
                startIcon={<InfoOutlined />}
              >
                More Info
              </Button>
              <Button
                variant="contained bg-grey text-white fs-8"
                endIcon={<InfoOutlined />}
              >
                More Info
              </Button>
            </Stack>

            {/* <Link to={`/signUp`}>
              <Button variant="light mx-1 py-0 pb-1" type="submit">
                Sign Up
              </Button>
            </Link>
            <Link to={`/signIn`}>
              <Button variant="secondary mx-1 py-0 pb-1" type="submit">
                Sign In
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
