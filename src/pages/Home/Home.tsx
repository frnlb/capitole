import { useFilmsStore } from "@/store/films";
import "./Home.scss";

export const IMAGE_URL = "https://image.tmdb.org/t/p/w200";

export const Home: React.FC = () => {
  const getAllData = useFilmsStore((state) => state.getAllData);
  const data = getAllData();
  console.log("🚀 ~ Home ~ data:", data);

  return (
    <div className="page home-page">
      <h1>Popular Movies</h1>
      <div className="carousel-section"></div>
    </div>
  );
};
