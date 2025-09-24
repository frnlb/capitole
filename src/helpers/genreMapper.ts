export const genreMapper = (
  genres: { id: number; name: string }[],
  filmGenres: number[]
) => {
  return filmGenres.map((filmId) => {
    const genre = genres.find((genreObject) => genreObject.id === filmId);
    return genre?.name ?? "";
  });
};
