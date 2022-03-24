import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import FormModel from "./FormModel";
import { v4 as uuid } from "uuid";
import { MoviesContext } from "../../context/MoviesModule";

const AddNewMovie = () => {
  const { setMovies } = useContext(MoviesContext);

  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => setShowForm(true);

  
  const addMovie = (movie) => {
    setMovies((currentMovies) => [
      ...currentMovies,
      { ...movie, _id: uuid() },
    ]);
    setShowForm(false);
  };
  
  return (
    <div className="bg-dark pt-7">
      <div className=" p-3 px-5 container d-flex justify-content-between">
        <h3 className="text-white">Videos</h3>

        <Button
          variant="danger bg-white text-danger fw-bold px-5"
          onClick={handleShowForm}
        >
          Add Video
        </Button>
      </div>

      <FormModel onSubmit={addMovie} showForm={showForm} setShowForm={setShowForm} />
    </div>
  );
};

export default AddNewMovie;
