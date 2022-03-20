import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Stack } from "@mui/material";
import { PlayArrow, InfoOutlined } from "@mui/icons-material";

import spiderMan from "../images/spiderMan.jpg";

const MainBanner = (props) => {
  const [typeName, setTypeName] = useState("Choose");
  const {type} = props

  const handelTypeName = (e) => {
    setTypeName(e.target.innerText);
  };

  return (
    <div className="mainContainer">
      <img src={spiderMan} alt="spiderMan" />
      {/* <video
            autoPlay
            muted
            src="https://rr5---sn-hgn7yn7e.c.drive.google.com/videoplayback?expire=1647795173&ei=pSM3Yrq1IIKL8wTVv66IBA&ip=156.221.165.185&cp=QVRJWUhfVFFVRFhPOjNrZ1pDVGZ5Wkg3eTJCSkJlT1BZSThCM2FVSVFaUnFCS0RwVUN5clpaQWg&id=8d350252959c6acb&itag=18&source=webdrive&requiressl=yes&mh=en&mm=32&mn=sn-hgn7yn7e&ms=su&mv=m&mvi=2&pl=22&ttl=transient&susc=dr&driveid=1gThxBpGEkuy7Xg2pvsUlTbJtIjk8zkOv&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=184.087&lmt=1647718918492460&mt=1647780512&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRgIhAKf1dfaCpK247BI5wL7KMbbu3VXoPBate7IunfUsKloYAiEA0ADLhV5UqzyYbBzpbvrssyULsxT4odvuEJaDtSlDuoQ=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhALhee_fXDjk97Te5BvGVLSVEQ6g9BAH2k1w_LZySvlsUAiEAjV4DcbPW5JR67f1jIUALvy37f0V3W4cmLvCte6GM6bk=&cpn=QNTgxila2VRgOsJw&c=WEB_EMBEDDED_PLAYER&cver=1.20220316.01.00&ir=1&rr=12&fexp=24162928"
          ></video> */}
      <div className="overlay bannerOverlay"></div>
      <div className="bannerInfo container">
        {type && (
          <div className="container selectContainer d-flex align-items-center mb-4">
            <h1 className="text-white me-3 typeTitle">
              {type === "movie" ? "Movies" : "Series"}
            </h1>
            <div class="input-group">
              <button
                class="btn btn-outline-secondary dropdown-toggle px-2 py-0 text-white border-white"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {typeName}
              </button>
              <ul class="dropdown-menu bg-black">
                <li
                  className="dropdown-item text-white"
                  onClick={handelTypeName}
                >
                  Action
                </li>
                <li
                  className="dropdown-item text-white"
                  onClick={handelTypeName}
                >
                  Comedy
                </li>
                <li
                  className="dropdown-item text-white"
                  onClick={handelTypeName}
                >
                  Romance
                </li>
                <li
                  className="dropdown-item text-white"
                  onClick={handelTypeName}
                >
                  Horrer
                </li>
              </ul>
            </div>
          </div>
        )}
        <div className="container text-white movieBannerContainer">
          <h1>Film Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima at
            molestiae adipisci, ducimus possimus
          </p>
          <div className="linksContent">
            <Stack direction="row" spacing={1}>
              <Link to={"/movies"}>
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
  );
};

export default MainBanner;
