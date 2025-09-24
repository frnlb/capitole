import React from "react";
import type { Film } from "@/types";
import { useFilms } from "@/hooks";
import "./Home.scss";

export const Home: React.FC<{ films: { results: Film[] } }> = ({ films }) => {
  const { films: movies, loading, error } = useFilms("popular", films);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="page">
      <h1>Home</h1>
    </div>
  );
};
