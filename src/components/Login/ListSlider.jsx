import Slider from "react-slick";
import MovieCard from "./MovieCard";

const ListSlider = (props) => {
  const { listName } = props;
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
        <MovieCard index={0} />
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
        <MovieCard index={14} />
      </Slider>
    </div>
  );
};

export default ListSlider;
