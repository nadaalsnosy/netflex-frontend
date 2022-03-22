import { Card } from "react-bootstrap";
import spiderMan from "../../images/spiderMan.jpg";
import {
  PlayArrow,
  ThumbDownOffAlt,
  ThumbUpOffAlt,
  Check,
} from "@mui/icons-material";

import { useState } from "react";

const MovieCard = (index) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://firebasestorage.googleapis.com/v0/b/netflix-9e61f.appspot.com/o/spiderMan.mp4?alt=media&token=ad4ed7e7-a46f-44ef-b56f-7e1e4718cb68";
  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cardItem"
    >
      <Card.Img variant="top" src={spiderMan} />
      {isHovered && <video autoPlay muted loop src={trailer}></video>}
      <Card.Body className="pb-5 bg-black">
        <Card.Title className="d-flex justify-content-between mb-4">
          <span className="cardIcon playArrowIcon">
            <PlayArrow />
          </span>
          <span className="cardIcon checkIcon">
            <Check />
          </span>
          <span className="cardIcon thumbUpOffAltIcon">
            <ThumbUpOffAlt />
          </span>
          <span className="cardIcon thumbDownOffAltIcon">
            <ThumbDownOffAlt />
          </span>
        </Card.Title>
        <Card.Text className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-lightGreen fs-6">98% Match</span>
          <span className="cardBoder fs-8"> All</span>
          <span className="fs-6"> 1h 38m</span>
          <span className="cardBoder fs-8"> HD</span>
        </Card.Text>
        <Card.Text className="mb-5">
          Goofy. Comedy. Family Relationship
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
