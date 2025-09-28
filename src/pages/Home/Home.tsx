import { useFilmsStore } from "@/store/films";
import "./Home.scss";
import { Card, Carousel } from "@/components";
import { Film } from "@/types";
import { genreMapper } from "@/helpers";

export const IMAGE_URL = "https://image.tmdb.org/t/p/w200";
export const LINK_TO = "details/";

export const Home: React.FC = () => {
  const getAllData = useFilmsStore((state) => state.getAllData);
  const data = getAllData();
  if (!data) {
    return <div>Loading...</div>;
  }

  const display = Object.entries(data).map(([key, value]) => {
    if(key !=="genres") {
      const carouselItems = value.map((film) => {
        const {
      genre_ids,
      id,
      overview,
      poster_path,
      title,
    } = film as Film;
        return(

      <Card
        description={overview}
        title={title}
        imageUrl={`${IMAGE_URL}${poster_path}`}
        link={`${LINK_TO}${id}`}
        key={id}
        genre={genreMapper(data.genres, genre_ids)[0].toLocaleLowerCase().replace(/ /g, "-")}
      />
    );
    });
    return (
      <Carousel key={key}>{carouselItems}</Carousel>
    )
  }
});

  return (
    <div className="page">
      <div className="carousel-section">{display}</div>
    </div>
  );
};
