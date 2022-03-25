import { useEffect, useState } from "react";
import Movie from "./Movie";
// import { MoviesContext } from "../../context/MoviesModule";
import { Table, Spinner } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";

const Movies = () => {
  // const { movies, setMovies } = useContext(MoviesContext);

  const [movies, setMovies] = useState();
  const { auth } = useAuth();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(`/movies/`, {
          headers: { Authorization: `${auth.token}` },
        });
        setMovies(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [auth.token]);
  console.log(movies);

  return (
    <div className="container py-3 bg-body">
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
