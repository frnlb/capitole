import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const FilmDetail = () => {
  const { filmId } = useParams<{ filmId: string }>();
  const [filmDetail, setFilmDetail] = useState(null);
  return <div>FilmDetail</div>;
};
