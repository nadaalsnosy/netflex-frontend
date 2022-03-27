import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import MovieCard from "./MovieCard";
import { Spinner } from "react-bootstrap";
import { MoviesContext } from "../../context/MoviesModule";
import useAuth from "../../hooks/useAuth";

const ListSlider = (props) => {
  const { listName, type, genereName } = props;
  const { auth } = useAuth();
  const [listContent, setListContent] = useState();
  // const [listArray, setListArray] = useState();
  const listArray = [];

  const {
    setRate,
    getMovies,
    genere,
    setGenere,
    setYear,
    year,
    rate,
    recentAdded,
    mostPopular,
  } = useContext(MoviesContext);

  console.log(recentAdded);
  console.log(mostPopular);

  // if (recentAdded) {
  //   listArray.push(recentAdded);
  // }
  // if (mostPopular) {
  //   listArray.push(mostPopular);
  // }
  // console.log(listArray);

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

  // useEffect(() => {
  //   if (auth.token) {
  //     if (listName === "Recent Added") {
  //       setRate(false);
  //       getMovies(type);
  //       setListContent(recentAdded);
  //     } else if (listName === "Most Popular") {
  //       setYear(false);
  //       // setRate(true);
  //       setListContent(mostPopular);
  //     } else {
  //       setYear(false);
  //       setRate(false);
  //       setGenere(genereName);
  //     }
  //     console.log(listContent);
  //   }
  // }, [
  //   auth.token,
  //   type,
  //   genere,
  //   year,
  //   listContent,
  //   mostPopular,
  //   recentAdded,
  // ]);

  useEffect(() => {
    if (auth.token) {
      if (listName === "Recent Added") {
        setRate(false);
        getMovies(type);
        setListContent(recentAdded);
      } else {
        setYear(false);
        setRate(false);
        setGenere(genereName);
      }
    }
  }, [auth.token, type, genere, rate, listContent, recentAdded]);

  useEffect(() => {
    if (auth.token) {
      if (listName === "Most Popular") {
        setYear(false);
        setRate(true);
        setListContent(mostPopular);
      } else {
        setYear(false);
        setRate(false);
        setGenere(genereName);
      }
    }
  }, [auth.token, type, genere, year, listContent, mostPopular]);

  console.log(listContent);

  return (
    <div className="text-white container my-4">
      <h2> {listName} </h2>
      <Slider {...settings}>
        {listContent ? (
          listContent.map((item, i) => (
            <MovieCard key={item._id} index={i} item={item} />
          ))
        ) : (
          <div className="d-flex justify-content-center p-3">
            <Spinner animation="border" variant="danger" />
          </div>
        )}
      </Slider>
    </div>
  );
};

export default ListSlider;
