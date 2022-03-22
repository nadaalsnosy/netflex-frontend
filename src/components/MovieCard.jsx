import {
  Card
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import spiderMan from "../images/spiderMan.jpg";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";




const MovieCard = (index) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer ="https://firebasestorage.googleapis.com/v0/b/netflix-9e61f.appspot.com/o/spiderMan.mp4?alt=media&token=ad4ed7e7-a46f-44ef-b56f-7e1e4718cb68"
  return <> 
  <Card className="cardItem"  style={{left:isHovered && index * 225 -50 + index * 2.5}}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}>
  <Card.Img variant="top" src={spiderMan} />
  {isHovered && (
  
  <><video
          autoPlay
          muted
          loop
          src={trailer}
        ></video><Card.Body>
            <Card.Title className="icons"><span className="playArrowIcon"><PlayArrowIcon /></span><span className="checkIcon"><CheckIcon /></span><span className="thumbUpOffAltIcon"><ThumbUpOffAltIcon /></span><span className="thumbDownOffAltIcon"><ThumbDownOffAltIcon /></span></Card.Title>
            <Card.Text>
              <span className="cardMatching">98% Match</span><span className="cardAll"> All</span><span className="cardHour"> 1h 38m</span><span className="cardHd"> HD</span>
            </Card.Text>
            <Card.Text>
              <span>Goofy </span><span className="dots"> .</span><span>Comedy</span><span className="dots"> .</span><span>Family Relationship</span>
            </Card.Text>
          </Card.Body></>
             
)};
</Card>
 </>
};

export default MovieCard;
