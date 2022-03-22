import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import ListItem from "./ListItem";
import { useRef, useState } from "react";

const List = () => {
  const listRef = useRef();
  const [slideNum, setSlideNum] = useState(0);
  const [disNumPlus, setDisNumPlus] = useState(220);
  const [disNum, setDisNum] = useState(220);

  const handelShowCards = (dir) => {
    if (dir === "left") {
      setSlideNum(slideNum - 1);
      if (slideNum === 13) {
        listRef.current.style.transform = `translateX(${10 + disNumPlus}px)`;
      } else {
        listRef.current.style.transform = `translateX(${disNumPlus}px)`;
      }
      setDisNum(220);

      setDisNumPlus(disNumPlus - 220);
    }
    if (dir === "right" && slideNum < 13) {
      setSlideNum(slideNum + 1);
      if (slideNum === 0) {
        listRef.current.style.transform = `translateX(${-10 - disNum}px)`;
      } else {
        listRef.current.style.transform = `translateX(${-disNum}px)`;
      }
      setDisNumPlus(disNumPlus + disNum);
      setDisNum(disNum + 220);
    }
    // console.log(slideNum);
    // console.log(listRef.current);
    console.log(disNum);
    console.log(disNumPlus);

  };
  return (
    <>
      <div className="list container">
        <h2 className="text-white">List Title</h2>
        <div className="wrapperList text-white">
          <ArrowBackIosRounded
            className={`${slideNum === 0 ? "none" : ""} sliderArrow start-0`}
            onClick={() => handelShowCards("left")}
          />
          <div className="itemsContainer" ref={listRef}>
            <ListItem index={0}/>
            <ListItem index={1}/>
            <ListItem index={2}/>
            <ListItem index={3}/>
            <ListItem index={4}/>
            <ListItem index={5}/>
            <ListItem index={6}/>
            <ListItem index={7}/>
            <ListItem index={8}/>
            <ListItem index={9}/>
            
          </div>
          <ArrowForwardIosRounded
            className={`${slideNum === 13 ? "none" : ""} sliderArrow end-0`}
            onClick={() => handelShowCards("right")}
          />
        </div>
      </div>
    </>
  );
};

export default List;
