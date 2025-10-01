import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Typography, DisplayWrapper, Button } from "@/components";
import { useFilmsStore } from "@store/films";
import { genreMapper } from "@/helpers";
import { useWishlist } from "@/hooks";
import "./FilmDetail.scss";
import type { Film, FilmCategories } from "@/types";

export interface FilmDetailLocationState {
  filmCategory: FilmCategories;
}

export const FilmDetail = () => {
  const location = useLocation() as { state: FilmDetailLocationState };
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isHydrated = useFilmsStore((state) => state.isHydrated);
  const getFilmById = useFilmsStore((state) => state.getFilmById);
  const getGenres = useFilmsStore((state) => state.getGenres);
  const genresData = getGenres();
  const { filmCategory } = location.state;

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

  const genres = genreMapper(genresData.genres, film.genre_ids).map(
    (genre: string, index: number) => (
      <Typography key={`${index}-genre`} tag="p">
        {genre}
      </Typography>
    )
  );

  const filmCategoryMapper: Record<FilmCategories, string> = {
    popularFilms: "primary",
    upcomingFilms: "secondary",
    topRatedFilms: "tertiary",
  };

  const pageStyles = filmCategoryMapper[filmCategory];

  return (
    <div className={`page page-detail ${pageStyles}`}>
      <DisplayWrapper>
        <div>
          <img
            loading="lazy"
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                : "https://placehold.co/500x750/333/FFF?text=No+Image"
            }
            alt={film.title}
            className="film-detail-image"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/500x750/333/FFF?text=Image+Error";
            }}
          />
        </div>
        <div>
          {isInWishlist(filmId!) ? (
            <Button
              icon="heart-solid"
              iconFill="accent"
              label="Remove from favourites"
              onClick={() => removeFromWishlist(filmId!)}
            />
          ) : (
            <Button
              icon="heart-outline"
              iconStroke="text"
              label="Add to favourites"
              onClick={() => addToWishlist(film)}
            />
          )}
          <Typography tag="h1">{film.title}</Typography>
          <Typography>{film.overview}</Typography>
        </div>

        <div className="detail-additional-info">
          <Typography>{film.title}</Typography>
          <Typography>{`ID: ${film.id.toString()}`}</Typography>
          <Typography tag="p">Release Date: {film.release_date}</Typography>
          {film.adult && <Typography tag="p">Adult: Yes</Typography>}
          <Typography tag="h4">Genres: </Typography>
          {genres && genres}
          <Typography tag="p">
            Vote Average: {film.vote_average.toFixed(1)}
          </Typography>
        </div>
      </DisplayWrapper>
    </div>
  );
};
