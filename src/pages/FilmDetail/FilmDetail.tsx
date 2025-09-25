import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFilmsStore } from "@store/films";
import { Film } from "@/types";
import { Typography } from "@/components";

export const FilmDetail = () => {
  const isHydrated = useFilmsStore((state) => state.isHydrated);
  const getFilmById = useFilmsStore((state) => state.getFilmById);

  const [film, setFilm] = useState<Film | undefined>(undefined);

  const { id } = useParams<{ id: string }>();
  const filmId = id ? parseInt(id, 10) : undefined;

  useEffect(() => {
    if (isHydrated && filmId !== undefined) {
      const foundFilm = getFilmById(filmId);
      setFilm(foundFilm);
    }

    if (filmId === undefined) {
      setFilm(undefined);
    }
  }, [isHydrated, getFilmById, filmId]);

  if (!isHydrated) {
    return <div className="p-8">Loading film data...</div>;
  }

  if (!film) {
    return <div className="p-8">Film not found.</div>;
  }

  return (
    <div className="page">
      <Typography>{film.title}</Typography>
      <Typography>{`ID: ${film.id.toString()}`}</Typography>

      <img
        src={
          film.poster_path
            ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
            : "https://placehold.co/500x750/333/FFF?text=No+Image"
        }
        alt={film.title}
        className=""
        onError={(e) => {
          e.currentTarget.src =
            "https://placehold.co/500x750/333/FFF?text=Image+Error";
        }}
      />

      <Typography>{film.overview}</Typography>
      <div>
        <p>
          Release Date: <Typography>{film.release_date}</Typography>
        </p>
        <p>
          Vote Average: <Typography>{film.vote_average.toFixed(1)}</Typography>
        </p>
      </div>
    </div>
  );
};
