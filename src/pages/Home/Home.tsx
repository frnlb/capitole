import React from "react";
import { Film } from "@/types";
import "./Home.scss";

export const Home: React.FC<{ films: { results: Film[] } }> = ({ films }) => {
  const popFilms = films.results?.map((film) => (
    <div key={film.id}>
      <h1>This should be a film</h1>
      <img src={film.poster_path ?? ""} alt={film.title}></img>
      <h3>{film.title}</h3>
    </div>
  ));

  return (
    <div className="page">
      <h1>Home</h1>
      {popFilms}
    </div>
  );
};
