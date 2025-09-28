import type { FilmData } from "@/types";

export const genreMapper = (genres: Genre[], filmGenres: number[]) => {
  return filmGenres.map((filmId) => {
    const genre = genres.find((genreObject) => genreObject.id === filmId);
    return genre?.name ?? "";
  });
};
