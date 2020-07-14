import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>Catalin Binzari</h3>
      <p>List of movies: {movies.length}</p>
    </div>
  );
};

export default Nav;
