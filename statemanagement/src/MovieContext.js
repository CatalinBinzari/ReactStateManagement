import React, { useState, createContext } from "react";

export const MovieContext = createContext();
//we use MovieContext to import and use it in difeerent components we want to
//whenever we  want to use MovieList, we import MoveContext

export const MovieProvider = (props) => {
  // provider helds information(movies) and pass it to all different components we want to
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 23123,
    },
    {
      name: "Game of Thrones",
      price: "$10",
      id: 2566124,
    },
    {
      name: "Inception",
      price: "$10",
      id: 23524,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
      {/* props.children is render a the child components, between the tags */}
    </MovieContext.Provider>
  );
};
