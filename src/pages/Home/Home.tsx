import React from "react";
import { useFilms } from "@/hooks/useFilms";
import "./Home.scss";

export const Home: React.FC = () => {
  const popularFilms = useFilms("popular");
  console.log("🚀 ~ Home ~ popularFilms:", popularFilms);
  const topRatedFilms = useFilms("top_rated");
  console.log("🚀 ~ Home ~ topRatedFilms:", topRatedFilms);
  const upcomingFilms = useFilms("upcoming");
  console.log("🚀 ~ Home ~ upcomingFilms:", upcomingFilms);

  return (
    <div className="page">
      <div className="home__container">
        <header className="home__header">
          <h1 className="home__title">Discover Amazing Films</h1>
          <p className="home__subtitle">
            Explore popular, top-rated, and upcoming movies from around the
            world
          </p>
        </header>
      </div>
    </div>
  );
};
