import { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import MovieCard from "./MovieCard";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { Spinner } from "react-bootstrap";
import { MoviesContext } from "../../context/MoviesModule";

const ListSlider = (props) => {
  const { listName, type } = props;
  const { movies, setMovies } = useContext(MoviesContext);
  console.log(movies);

  var settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="text-white container my-4">
      <h2> {listName} </h2>
      <Slider {...settings}>
        {movies ? (
          movies.map((item, i) => <MovieCard index={i} item={item} />)
        ) : (
          <div className="d-flex justify-content-center p-3">
            <Spinner animation="border" variant="primary" />
          </div>
        )}
        {/* {list.map((item, i) => (
          <MovieCard index={i} item={item} />
        ))} */}
        {/* <MovieCard index={0} />
        <MovieCard index={1} />
        <MovieCard index={2} />
        <MovieCard index={3} />
        <MovieCard index={4} />
        <MovieCard index={5} />
        <MovieCard index={6} />
        <MovieCard index={7} />
        <MovieCard index={8} />
        <MovieCard index={9} />
        <MovieCard index={10} />
        <MovieCard index={11} />
        <MovieCard index={12} />
        <MovieCard index={13} />
        <MovieCard index={14} /> */}
      </Slider>
    </div>
  );
};

export default ListSlider;
