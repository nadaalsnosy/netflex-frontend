import { Link } from "react-router-dom";
import { useState } from "react";
import { Spinner } from "react-bootstrap";

import { Button, Stack } from "@mui/material";
import { PlayArrow, InfoOutlined } from "@mui/icons-material";
// import spiderMan from "../../images/spiderMan.jpg";

const MainBanner = (props) => {
  const [typeName, setTypeName] = useState("Choose");
  const { type, genreTypes, content } = props;

  const handelTypeName = (e) => {
    setTypeName(e.target.innerText);
    // todo: go to different page
    // setGenere(e.target.innerText);
  };

  return (
    <>
      {content ? (
        <div className="mainContainer">
          {/* <img
         src="https://firebasestorage.googleapis.com/v0/b/netflix-9e61f.appspot.com/o/spiderMan.jpg?alt=media&token=d63b28f0-88b3-4e98-aa57-53553397e3b6"
         alt="spiderMan"
       /> */}

          <video
            autoPlay
            muted
            // src="https://res.cloudinary.com/netflix-mearn/video/upload/v1648324549/spiderMan_jwlcil.mp4"
            src={content.trailer}
          ></video>
          <div className="overlay bannerOverlay"></div>
          <div className="bannerInfo container">
            {type && (
              <div className="container selectContainer d-flex align-items-center my-4">
                <h1 className="text-white me-3 typeTitle">
                  {type === "movie" ? "Movies" : "Series"}
                </h1>
                <div className="input-group">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle px-2 py-0 text-white border-white"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {typeName}
                  </button>
                  <ul className="dropdown-menu bg-black">
                    {genreTypes.map((list, index) => {
                      return (
                        <Link
                          key={index}
                          className="dropdown-item text-white"
                          onClick={handelTypeName}
                          to={`${list}`}
                        >
                          {list}
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}
            <div className="container text-white movieBannerContainer">
              <h1>{content.title}</h1>
              <p>{content.desc}</p>
              <div className="linksContent">
                <Stack direction="row" spacing={1}>
                  <Link to={`/mainVideo/${content._id}`}>
                    <Button
                      variant="outlined bg-White text-dark fs-8 banberBtn"
                      startIcon={<PlayArrow />}
                    >
                      Play
                    </Button>
                  </Link>
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
      ) : (
        <div className="d-flex justify-content-center p-3 mt-5">
          <Spinner animation="border" variant="danger" />
        </div>
      )}
    </>
  );
};

export default MainBanner;
