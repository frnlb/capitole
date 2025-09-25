import { useDataStore } from "@/store/films";
import "./Home.scss";

export const IMAGE_URL = "https://image.tmdb.org/t/p/w200";

export const Home: React.FC = () => {
  const allFilms = useDataStore((state) => state.films);
  console.log("🚀 ~ Home ~ allFilms:", allFilms);

  return (
    <div className="page home-page">
      <h1>Popular Movies</h1>
      <div className="carousel-section"></div>
    </div>
  );
};
