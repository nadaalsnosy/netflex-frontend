import { useEffect, useState, useContext } from "react";
import Movie from "./Movie";
import { MoviesContext } from "../../context/MoviesModule";
import { Table, Spinner } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
// import axios from "../../api/axios";

const Movies = () => {
  const { movies } = useContext(MoviesContext);
  const { auth } = useAuth();


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
                <Spinner animation="border" variant="danger" />
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Movies;
