import { Link } from "react-router-dom";
import { Film, FilmCategory } from "@/types";

import "./FilmCard.scss";

interface FilmCardProps {
  film: Film;
  category: FilmCategory;
}

export const FilmCard: React.FC<FilmCardProps> = ({ film, category }) => {
  const posterUrl = film.poster_path
    ? `${TMDB_IMAGE_BASE_URL}${film.poster_path}`
    : "/placeholder-poster.jpg";

  return (
    <div className={`film-card film-card--${category}`}>
      <Link
        to={`/film/${film.id}?category=${category}`}
        className="film-card__link"
      >
        <div className="film-card__image">
          <img src={posterUrl} alt={film.title} loading="lazy" />
        </div>
        <div className="film-card__content">
          <h3 className="film-card__title">{film.title}</h3>
          <div className="film-card__meta">
            <span className="film-card__rating">
              ★ {film.vote_average.toFixed(1)}
            </span>
            <span className="film-card__year">
              {new Date(film.release_date).getFullYear()}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
