import { useContext } from "react";
import Movie from "./Movie";
import { MoviesContext } from "../../context/MoviesModule";
import { Table, Spinner } from "react-bootstrap";

const Movies = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <div className="container my-3">
      <Table striped bordered hover size="sm" className="container">
        <thead>
          <tr>
            <th></th>
            <th className="text-start ps-4 py-2">Video Name</th>
          </tr>
        </thead>
        <tbody>
          {movies ? (
            movies.map((movie, index) => (
              <Movie key={movie._id} {...movie} i={index + 1} />
            ))
          ) : (
            <tr>
              <td></td>
              <td className="d-flex justify-content-center p-3">
                <Spinner animation="border" variant="primary" />
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Movies;
