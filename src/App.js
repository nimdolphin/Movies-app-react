import React from "react";
import PostMovies from "./components/Movies";

import MovieDescription from "./components/MovieDescription";
import NotFoundPage from "./components/NotFoundPage";

import { Routes, Route } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<PostMovies />} />
          <Route path="movie-description/:id" element={<MovieDescription />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
