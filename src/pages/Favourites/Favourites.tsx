import { useFilmsStore } from "@/store/films";
import { useWishlistStore } from "@/store/wishlist";
import { Card } from "@/components";
import { genreMapper, IMAGE_URL, LINK_TO } from "@/helpers";
import { Film } from "@/types";
import "./Favourites.scss";

export const Favourites: React.FC = () => {
  const getAllData = useFilmsStore((state) => state.getAllData);
  const getFavourites = useWishlistStore((state) => state.getWishlistItems);
  const favourites = getFavourites();
  const data = getAllData();
  if (!data) {
    return <div>Loading...</div>;
  }

  const cards = favourites.map((film, index) => {
    const { genre_ids, id, overview, poster_path, title } = film as Film;
    return (
      <Card
        description={overview}
        title={title}
        imageUrl={`${IMAGE_URL}${poster_path}`}
        link={`${LINK_TO}${id}`}
        key={`${id}-${index}`}
        genre={genreMapper(data.genres, genre_ids)[0]
          .toLocaleLowerCase()
          .replace(/ /g, "-")}
      />
    );
  });

  return (
    <div className="page">
      <div className="carousel-section">{cards}</div>
    </div>
  );
};
