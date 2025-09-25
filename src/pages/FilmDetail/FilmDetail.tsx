import { useParams } from "react-router-dom";
export const FilmDetail = () => {
  const { filmId } = useParams<{ filmId: string }>();
  console.log("🚀 ~ FilmDetail ~ filmId:", filmId);
  return <div>You are in film detail</div>;
};
