import React, { useMemo } from "react";
import type { Film } from "@/types";
import { useDataStore } from "@/store/films";
import { Card, Carousel } from "@/components";
import "./Home.scss";

export const IMAGE_URL = "https://image.tmdb.org/t/p/w200";

export const Home: React.FC = () => {
  const allFilms = useDataStore((state) => state.films);
  console.log("🚀 ~ Home ~ allFilms:", allFilms);
  const popularFilms: Film[] = useMemo(() => {
    return allFilms.slice(0, 10);
  }, [allFilms]);

  if (popularFilms.length === 0) {
    return <div className="home-loading">Loading Movie Data...</div>;
  }

  const popularFilmDisplay = popularFilms.map((film: Film) => {
    const { id, title, overview, poster_path } = film;
    const detailLink = `/movies/${id}`;

    return (
      <Card
        key={id}
        title={title}
        description={overview}
        imageUrl={poster_path ? `${IMAGE_URL}${poster_path}` : undefined}
        link={detailLink}
      />
    );
  });

  return (
    <div className="page home-page">
      <h1>Popular Movies</h1>
      <div className="carousel-section">
        <Carousel>{popularFilmDisplay}</Carousel>
      </div>

      {/* You would repeat this pattern for Top Rated, Upcoming, etc. */}
      {/* <h2>Top Rated</h2>
      <div className="carousel-section">
        <Carousel>{topRatedFilmDisplay}</Carousel>
      </div> */}
    </div>
  );
};
