import { Typography } from "@/components";
import type { Film } from "@/types";
import "./FilmAdditionalInfo.scss";

export interface FilmAdditionalInfoProps {
  film: Film;
  genres: React.ReactNode | React.ReactNode[];
}

export const FilmAdditionalInfo = ({
  film,
  genres,
}: FilmAdditionalInfoProps) => {
  return (
    <div className="detail-additional-info">
      <div className="additional-wrapper">
        <Typography tag="p">Original title: {film.original_title}</Typography>
        <Typography>{`ID: ${film.id.toString()}`}</Typography>
        <Typography tag="p">Release Date: {film.release_date}</Typography>
        <Typography>Original language: {film.original_language}</Typography>
        {film.adult && <Typography tag="p">Adult: Yes</Typography>}
        <div className="genres-wrapper">
          <Typography tag="h4">Genres: </Typography>
          <div className="genres">{genres && genres}</div>
        </div>
        <Typography tag="p">
          Vote Average: {film.vote_average.toFixed(1)}
        </Typography>
      </div>
    </div>
  );
};
