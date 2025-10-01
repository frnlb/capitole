import { useFilmsStore } from "@/store/films";
import { Card, Carousel } from "@/components";
import { genreMapper, IMAGE_URL, LINK_TO } from "@/helpers";
import { Film } from "@/types";
import "./Favourites.scss";

export const Favourites: React.FC = () => {
  const getAllData = useFilmsStore((state) => state.getAllData);
  const data = getAllData();
  if (!data) {
    return <div>Loading...</div>;
  }

  const display = Object.entries(data).map(([key, value], index) => {
    console.log("🚀 ~ Home ~ key:", key);
    if (key !== "genres") {
      const carouselItems = value.map((film) => {
        const { genre_ids, id, overview, poster_path, title } = film as Film;
        return (
          <Card
            description={overview}
            title={title}
            imageUrl={`${IMAGE_URL}${poster_path}`}
            link={`${LINK_TO}${id}`}
            key={`${id}-${key}-${index}`}
            genre={genreMapper(data.genres, genre_ids)[0]
              .toLocaleLowerCase()
              .replace(/ /g, "-")}
            category={key}
          />
        );
      });
      return <Carousel key={key}>{carouselItems}</Carousel>;
    }
  });

  return (
    <div className="page">
      <div className="carousel-section">{display}</div>
    </div>
  );
};
