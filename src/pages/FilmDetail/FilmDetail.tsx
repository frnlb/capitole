import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFilmsStore } from "@store/films";
import { Film } from "@/types";
import { Typography, DisplayWrapper, Button, IconComponent } from "@/components";
import { genreMapper } from "@/helpers";
import { useLocation } from "react-router-dom";
import { useWishlist } from "@/hooks";
import "./FilmDetail.scss";

export const FilmDetail = () => {
  const location = useLocation ();
  const { addToWishlist, removeFromWishlist, isInWishlist} = useWishlist();
  const isHydrated = useFilmsStore((state) => state.isHydrated);
  const getFilmById = useFilmsStore((state) => state.getFilmById);
  const getGenres = useFilmsStore((state) => state.getGenres);
  const genresData = getGenres();
  const {filmCategory} = location.state;
  console.log("🚀 ~ FilmDetail ~ filmCategory:", filmCategory);


  const [film, setFilm] = useState<Film | undefined>(undefined);

  const { id } = useParams<{ id: string }>();
  const filmId = id ? parseInt(id, 10) : undefined;
  console.log("🚀 ~ FilmDetail ~ filmId:", filmId);

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

  const genre = genreMapper(genresData.genres, film.genre_ids)[0];
  const colorStyles = `bg-${genre.toLocaleLowerCase().replace(/ /g, "-")}`;

  return (
    <div className={`page-detail ${colorStyles}`}>
      <Typography>{film.title}</Typography>
      <Typography>{`ID: ${film.id.toString()}`}</Typography>

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
          {
            isInWishlist(filmId!) ?
            <Button 
            icon={"heart-outline"} 
            iconStroke="text"
            label="Remove from favourites"
            onClick={()=>removeFromWishlist(filmId!)}/>
            :
            <Button  
            icon={"heart-solid"}  
            iconFill="accent"
            label="Add to favourites"
            onClick={()=>addToWishlist(film)}/>
          }
      <Typography tag="h1" >{film.title}</Typography>
      <Typography>{film.overview}</Typography>


        </div>


      <div>

          <Typography tag="p">Release Date:  {film.release_date}</Typography>
          {film.adult && <Typography tag="p">Adult: Yes</Typography>}
          <Typography tag="p">Release Date:  {film.release_date}</Typography>
          <Typography tag="p">Release Date:  {film.release_date}</Typography>


           <Typography tag="p">Vote Average: {film.vote_average.toFixed(1)}</Typography>

      </div>
      </DisplayWrapper>

    </div>
  );
};
