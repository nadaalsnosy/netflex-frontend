import { useContext, useEffect } from "react";
import Slider from "react-slick";
import MovieCard from "./MovieCard";
import { Spinner } from "react-bootstrap";
import { MoviesContext } from "../../context/MoviesModule";
import useAuth from "../../hooks/useAuth";

const ListSlider = (props) => {
  const { listName, type, genereName } = props;
  const { auth } = useAuth();

  const { movies, setRate, getMovies, genere, setGenere, setYear, year } =
    useContext(MoviesContext);
  console.log("movies");

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

  useEffect(() => {
    if (auth.token) {
      if (listName === "Recent Added") {
        console.log(listName);
        setRate(false);
        setYear(true);
      } else if (listName === "Most Popular") {
        console.log(listName);

        setYear(false);
        setRate(true);
      } else {
        setYear(false);
        setRate(false);
        setGenere(genereName);
      }

      getMovies(type);
    }
  }, [auth.token, type, genere, year]);

  return (
    <div className="text-white container my-4">
      <h2> {listName} </h2>
      <Slider {...settings}>
        {movies ? (
          movies.map((item, i) => (
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
