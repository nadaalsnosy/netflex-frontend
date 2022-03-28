import { Card } from "react-bootstrap";
import {
  PlayArrow,
  ThumbDownOffAlt,
  ThumbUpOffAlt,
  Check,
} from "@mui/icons-material";

import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const MovieCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { item } = props;
  const { genere } = useParams();
  const { auth } = useAuth();
  const lists = [];


  const handelsetFav = async () => {
    lists.push(item);
    console.log(lists)
    try {
      const res = await axios.patch(
        `/users/${auth.user._id}`,
        JSON.stringify({
          userList: lists,
        }),
        {
          headers: {
            "content-type": "application/json",
            Authorization: `${auth.token}`,
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // <Link to={`/mainVideo/${item._id}`}>
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${genere ? "" : ""} cardItem d-block`}
    >
      <Card.Img variant="top" src={item.img} />
      {isHovered && <video autoPlay muted loop src={item.trailer}></video>}
      <Card.Body className="pb-1 bg-black">
        <Card.Title className="d-flex justify-content-between mb-4">
          <span className="cardIcon playArrowIcon">
            <PlayArrow />
          </span>
          <span className="cardIcon">
            <Check />
          </span>
          <span className="cardIcon" onClick={handelsetFav}>
            <ThumbUpOffAlt />
          </span>
          <span className="cardIcon">
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
    // </Link>
  );
};

export default MovieCard;
