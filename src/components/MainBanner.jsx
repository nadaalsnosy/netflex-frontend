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
          {/* <video
            autoPlay
            muted
            src="https://rr5---sn-hgn7yn7e.c.drive.google.com/videoplayback?expire=1647741975&ei=11M2YpqJKMOB_9EPwva36AU&ip=41.42.50.160&cp=QVRJWUhfUFlVRlhPOjNrYlZLVGh5Wkg3eTdYUkJnT1BZSThXOWlVS1FaUnFCRlp4VUV5clpaQWM&id=8d350252959c6acb&itag=18&source=webdrive&requiressl=yes&mh=en&mm=32&mn=sn-hgn7yn7e&ms=su&mv=m&mvi=2&pl=20&ttl=transient&susc=dr&driveid=1gThxBpGEkuy7Xg2pvsUlTbJtIjk8zkOv&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=184.087&lmt=1647718918492460&mt=1647727227&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIhAIVW-fMzXAi06QFQ_lcMhr6_wVwFuZ623z9aVHlDo_smAiAgWWquuGtCw4DY4tgd8c-Zn7VzRkH4m5NmPJot-5CRZg==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgWjzjcns1QdtVoBYB-MeP4RFLggm_CyUQAI8NnTgxrlACIQCzytj-XCS4Sduvj1y1DdDQHeUIGvNHWhEqK29fMbkBcA==&cpn=fkRg0bqiKqD74A7O&c=WEB_EMBEDDED_PLAYER&cver=1.20220316.01.00&ir=1&rr=12&fexp=24162928"
          ></video> */}

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
