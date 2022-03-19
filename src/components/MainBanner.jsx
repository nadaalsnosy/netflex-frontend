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
          {/* <video autoPlay loop muted>
            <source src="https://www.youtube.com/embed/JfVOs4VSpmA" type="video/mp4" />
            
          </video> */}
          <div>
            <iframe
              auto
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JfVOs4VSpmA?I?&autoplay=1&mute=1&controls=0&showinfo=1&rel=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima at
            molestiae adipisci, ducimus possimus
          </p>
          <div className="linksContent">
            <Stack direction="row" spacing={1}>
              <Button
                variant="outlined bg-White text-dark fs-8 banberBtn"
                startIcon={<PlayArrow />}
              >
                Play
              </Button>
              <Button
                variant="contained bg-grey text-white fs-8 banberBtn text-capitalize"
                startIcon={<InfoOutlined />}
              >
                More Info
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
