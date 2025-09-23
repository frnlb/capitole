import React from "react";
import { useFilms } from "@/hooks/useFilms";
import "./Home.scss";

export const Home: React.FC = () => {
  const popularFilms = useFilms("popular");
  const topRatedFilms = useFilms("top_rated");
  const upcomingFilms = useFilms("upcoming");

  return <div className="home"></div>;
};
