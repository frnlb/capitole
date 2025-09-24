import React, { useState } from "react";
import { useFilms } from "@/hooks/useFilms";
import "./Home.scss";

export const Home: React.FC = () => {
  const popularFilms = useFilms("popular");
  console.log("🚀 ~ Home ~ popularFilms:", popularFilms);
  // const topRatedFilms = useFilms("top_rated");
  // const upcomingFilms = useFilms("upcoming");

  // const popFilms = popularFilms.results?.map((film) => {
  //   console.log("film: ", film);
  //   return (
  //     <div>
  //       <h1>This should be a film</h1>
  //       <img src={film.poster_path}></img>
  //       <h3>{film.title}</h3>
  //     </div>
  //   );
  // });

  const { films, loading, error } = useFilms("popular");
  console.log("🚀 ~ Home ~ error:", error);
  console.log("🚀 ~ Home ~ loading:", loading);
  console.log("🚀 ~ Home ~ films:", films);
  const popFilms = films.results.map((film) => {
    console.log("film: ", film);
    return (
      <div>
        <h1>This should be a film</h1>
        <img src={film.poster_path ?? ""}></img>
        <h3>{film.title}</h3>
      </div>
    );
  });

  return (
    <div className="page">
      <h1>Home alone</h1>
      {popFilms}
    </div>
  );
};
