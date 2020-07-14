import React from "react";
import "./App.css";
import MovieList from "./MovieList";
import AddMovie from "./AddMovies";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <MovieProvider>
      {/* everything here has acces to all the information in movie provider */}
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
