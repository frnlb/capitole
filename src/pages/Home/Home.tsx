import { useFilmsStore } from "@/store/films";
import "./Home.scss";
import { Card, Typography } from "@/components";
import { Film } from "@/types";

export const IMAGE_URL = "https://image.tmdb.org/t/p/w200";
export const LINK_TO = "details/";

export const Home: React.FC = () => {
  const getAllData = useFilmsStore((state) => state.getAllData);
  const data = getAllData();
  console.log("🚀 ~ Home ~ data:", data);
  const display = data.popularFilms.map((film: Film) => {
    console.log("film", film);
    const {
      adult,
      backdrop_path,
      genre_ids,
      original_language,
      id,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      video,
      vote_average,
      vote_count,
    } = film;
    return (
      <Card
        description={overview}
        title={title}
        imageUrl={`${IMAGE_URL}${poster_path}`}
        link={`${LINK_TO}${id}`}
      />
    );
  });

  return (
    <div className="page">
      <Typography tag="h1">Popular Movies</Typography>
      <div className="carousel-section">{display}</div>
    </div>
  );
};
