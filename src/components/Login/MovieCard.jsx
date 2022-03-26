import { Card } from "react-bootstrap";
import {
  PlayArrow,
  ThumbDownOffAlt,
  ThumbUpOffAlt,
  Check,
} from "@mui/icons-material";

import { useState } from "react";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { item } = props;
  // console.log(item);

  return (
    <Link to={`/mainVideo/${item._id}`}>
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cardItem d-block"
      >
        <Card.Img variant="top" src={item.img} />
        {isHovered && <video autoPlay muted loop src={item.trailer}></video>}
        <Card.Body className="pb-1 bg-black">
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
            <span className="text-lightGreen fs-6">Rate {item.rate}</span>
            <span className="cardBoder fs-8">{item.limit}</span>
            <span className="fs-6"> 1h 38m</span>
            <span className="cardBoder fs-8"> HD</span>
          </Card.Text>
          <Card.Text className="mb-1">{item.genere}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default MovieCard;
