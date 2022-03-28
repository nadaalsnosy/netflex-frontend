import React from "react";
import MovieCard from "../components/Login/MovieCard"

const UserList = () => {
  return (
    <>
      <div className=" container mt-5 pt-5 mb-5 text-white fw-bold"><h1 className="mb-2">My List</h1>
       <div className="d-flex mb-2 flex-wrap"><MovieCard /><MovieCard /><MovieCard />
      <MovieCard /><MovieCard /><MovieCard /><MovieCard /><MovieCard />
      <MovieCard /><MovieCard /><MovieCard /><MovieCard /></div>
      </div>;
     

    </>
  );
};

export default UserList;
